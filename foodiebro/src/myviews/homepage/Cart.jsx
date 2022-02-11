import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import './cart.css';
import StripeCheckout from "react-stripe-checkout";
import Header2 from "./Header2";
const Cart = () => {
  const [data, setdata] = useState([]);
  const [quant, setquant] = useState(0);
  const [Res, setRes] = useState();
  const [product, setProduct] = useState({
    name: "Payment gateway",
    price: 0,
    productBy: "Foodie-bro"
  });

  const makePayment = token => {
    const body = {
      token,
      product
    };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        setRes("true");
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch(error => console.log(error));
  };
  useEffect(async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const user = userInfo._id;
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      var bata = await Axios.post("/api/notes/", { user }, config);
      setdata(bata.data);
      setquant(Object.keys(data).length) ;
    } catch (error) {
      alert("Item not added to cart");
    }
  });
  const marjao= async (_id) =>{
    console.log("sdvsd");
    try {
		const config = {
		  headers: {
			"Content-type": "application/json",
		  },
		};
		const { data } = await Axios.post(
		  "http://localhost:5000/api/notes/delete",
		  {_id},
		  config
		);
     console.log("vfddf");
     alert('Item deleted from cart!!!');
	  } catch (error) {
		console.log(error);
	  }
  }
  return (
    <div class ="Con">
    <div class="container mt-5 p-3 rounded cart col-md-8 align-items-center">
    <div class="row no-gutters">
        <div class="col-md-12">
            <div class="product-details mr-2">
                <div class="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2"><Link to ="/">Continue Shopping</Link></span></div>
                <hr/>
                <h6 class="mb-0">Shopping cart</h6>
                <span>You have {quant} items in your cart</span>
        {data.map((recipe) => {
          return (
            <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" src="https://cdn2.vectorstock.com/i/1000x1000/88/26/kawaii-cartoon-fast-food-vector-24378826.jpg" width="40"/>
                        <div class="ml-2"><span class="font-weight-bold d-block"> {recipe.title}</span><span class="spec">FOODIE BRO Inc</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">1</span><span class="d-block ml-5 font-weight-bold">$10.00 </span><i class="fa fa-trash-o ml-3 text-black-50" onClick = {() => marjao(recipe._id)}>delete</i></div>
                </div>
          );
        })}
         <hr class="new5"/>
         <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
              <div class="ml-2"><span class="font-weight-bold d-block"> TOTAL : ${10.00*quant} </span></div>
              <StripeCheckout
          stripeKey='pk_test_51JyhF1SGZNht59Jn6x8w9LRZ5lncxOdJ8UfhQLGSoBUyNpREgVCUqCrjJ8Dvz8gzCSgFzboGehYoORlzEaLdGU9l007s2U5PrZ'
          token={makePayment}
          name="BILL PAYMENT"
          amount={quant * 1000}
          shippingAddress
          billingAddress
        >
          <button className="abcd">
            Pay: {quant * 10} $
          </button>
</StripeCheckout>
          </div>
          </div>
           </div> 
    </div>
</div>
 <div>
   {
     Res ?(<button className="btn-large blue">
       <Link to ="/tracker">
     Track my order:)
     </Link>
   </button>):(<div></div>)
   }
  </div>
</div>
  );
};

export default Cart;
