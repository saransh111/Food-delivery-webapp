import React, { useState , useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol ,MDBBtn } from 'mdb-react-ui-kit';
import "./Beecchwala.css";
function Beecchwala() {
  const [query, setquery] = useState("all");
  const [recipes, setrecipes] = useState([]);
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=57ccb031&app_key=3c56f5b55ff5223acd5e600ec7e09ca4`;
  const notify = () => toast("Item added to cart!!!"); 
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  })
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  async function getRecipes() {
    var result = await Axios.get(URL);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const gharjao= async (title) =>{
	  console.log(title ,`${userInfo._id}`);
	  const user=userInfo._id;
	  try {
		const config = {
		  headers: {
			"Content-type": "application/json",
		  },
		};
		const { data } = await Axios.post(
		  "/api/notes/create",
		  { title, user},
		  config
		);
     console.log("vfddf");
     toast.success('Item added to cart!!!');
	  } catch (error) {
		alert("Item not added to cart");
	  }
  } 
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="Beecchwala">
      <h1>FOOD MENU</h1>
      <form className="app._searchForm" onSubmit={onSubmit}>
        <input
          type=" text"
          className="app_input"
          placeholder="Enter Ingridents"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search"/>
      </form>
      <MDBRow className='row-cols-4 row-cols-md-4 g-4'>
      {recipes.map((recipe) => {
        return (
          <div class="wsk-cp-product">
            <ToastContainer />
          <div class="wsk-cp-img">
            <img src={recipe["recipe"]["image"]}/>
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span><a href= {recipe["recipe"]["url"]} target ='_blank'>INFO</a></span>
            </div>
            <div class="title-product">
              <h3>{recipe["recipe"]["label"]}</h3>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">$10.00</span></div>
              <div class="wcf-right"><a onClick = {() => gharjao(recipe["recipe"]["label"])} class="buy-btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
            </div>
          </div>
        </div>
        );
      })}
      </MDBRow>
    </div>
  );
}

export default Beecchwala;
