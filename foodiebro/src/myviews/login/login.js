import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import "./login.css";
import { useHistory } from 'react-router-dom';
import {Link,withRouter} from "react-router-dom";
import axios from "axios";

import { Form, Button, Row, Col } from "react-bootstrap";
import ErrorMessage from "../homepage/ErrorMessage";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //const [email1, setEmail1] = useState("");
  const [name, setName] = useState("");
  //const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  let history=useHistory();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_0z3j5t8', 'template_nrlr6qy', e.target, 'user_Ab3q1ylI5iDj6EliMBnBm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  const submitHandler = async (e) => {
     e.preventDefault();
     try{
         const config ={
             headers:{
                 "Content-type":"application/json"
             }
         };
         const { data } = await axios.post(
             'api/users/login',
             {
               email,
               password,
             }, 
        config
        ); 
        localStorage.setItem("userInfo",JSON.stringify(data));
        console.log(data);
        history.push("/");
    }
    catch (error){
      alert("INVALID EMAIL-ID OR PASSWORD");
    }
  };
  const submitHandler1 = async(e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match");
    } else {
        try {
            const config = {
              headers: {
                "Content-type": "application/json",
              },
            };
            const { data } = await axios.post(
              "/api/users/register",
              { name, email, password },
              config
            );
            sendEmail(e);
            localStorage.setItem("userInfo", JSON.stringify(data));
            history.push("/");
          } catch (error) {
            console.log(email);
            alert("EMAIL-ID ALREADY THERE");
          }
    }
  };
    return (
      <div class="container">
      <input type="checkbox" id="flip"/>
      <div class="cover">
        <div class="front">
          <div class="empty"></div>
          <img src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
          <div class="text">
            <span class="text-1">Need some pizza, yo?</span>
            <span class="text-2">Straight out of the oven to your doorstep!</span>
          </div>
        </div>
        <div class="back">
          <div class="empty"></div>
          <img class="backImg" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"/>
          <div class="text">
            <span class="text-1">Craving Something?</span>
            <span class="text-2">Let's you started!</span>
          </div>
        </div>
      </div>
  
      <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
            <form onSubmit={submitHandler}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="button input-box">
                  <input type="submit" value="Submit"/>
                </div>
                <div class="text sign-up-text">Don't have an account? <label for="flip">Signup now</label></div>
              </div>
            </form>
          </div>
  
          <div class="signup-form">
            <div class="title">Signup</div>
            <form onSubmit={submitHandler1}>
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-user"></i>
                  <input  type="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input  type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input  type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input  type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div class="button input-box">
                  <input type="submit" value="Submit"/>
                </div>
                <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default withRouter(Login);