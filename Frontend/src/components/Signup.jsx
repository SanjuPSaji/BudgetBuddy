import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';                     // API
import 'bootstrap-icons/font/bootstrap-icons.css';
import illustration from '../assets/illustration.jpg';
import axios from 'axios';                                                                // API
import { toast } from "react-toastify";


const Signup = () => {
  const navigate = useNavigate()                                                        // API
    const [passwordMatch, setPasswordMatch] = useState(true);                     // API
    const [name, setName]=useState("");                                       // API
    const [email, setEmail]=useState("");                                  // API
    const [password, setPassword]=useState("");                                      // API

  const validatePassword = () => {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleClick = async ()=>{                     // API
    const res = await axios.post('http://localhost:3000/api/auth/signup',JSON.stringify({name,email,password}),{
      headers:{
        'Content-Type' : 'application/json',
      }
    })

    if(res.status===200){                     // API
      navigate('/');
      return toast.success("User Created Successfully");
    }
   }

  return (
    <div className="signup">
      <div>
        <h1>
          Create an Account <span className="accent">Today</span>
        </h1>
        <br/>
        <p>
          Start your financial journey by creating an account.
        </p>
        <br/>
        <Form method="post">
        <div className="input-container">
            <input
              type="text"
              name="Name"
              required
              placeholder="Name"
              aria-label="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <br/>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <br/>
          <div className="input-container">
            <input
              type="password"
              name="password1"
              required
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <br/>
          <div className="input-container">
            <input
              type="password"
              name="password2"
              required
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>
          <input type="hidden" name="_action" value="signup" />
          <br/>
          <button onClick={handleClick} className="btn btn--dark"><span>Create Account</span>                      
            <div>
              <i className="bi bi-person-add"></i>
            </div></button>
          {/* <Link to='/'  onClick={handleClick} className="btn btn--dark"><span>Create Account</span>
            <div>
              <i className="bi bi-person-add"></i>
            </div>
        </Link> */}
        </Form>
      </div>
    </div>
  );
};

export default Signup;
