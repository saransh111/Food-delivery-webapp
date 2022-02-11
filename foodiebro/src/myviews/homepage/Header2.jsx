import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {} from "react-router-dom";
import './Header2.css';
import {useHistory} from 'react-router-dom';
function Header2() {
  let history =useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  })
  const bhagjao = async()=> {
    localStorage.removeItem("userInfo");
    history.push('/login');
  }
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
  <div class ="ghar">
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
         { userInfo ?(
        <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/cart">CART</Link></li>
      <li><Link to="/profile">PROFILE</Link></li>
      <li><Link to="/aboutus">ABOUT</Link></li>
      <li><Link to="/login" onClick = {() => bhagjao()}>LOGOUT</Link></li>
          </ul>
        ):(
         <ul>
          <li><Link to="/login">LOGIN</Link></li>
           </ul>
        )
        }
</div>
</div>
      );
}

export default Header2;
