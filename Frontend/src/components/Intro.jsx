import { Form, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';                                                                // API
// library
import 'bootstrap-icons/font/bootstrap-icons.css'
// assets
import illustration from "../assets/illustration.jpg"
import Signup from "./Signup"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";


const Intro = () => {
  const navigate = useNavigate()                                                        // API
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility  
  // Function to toggle password visibility
  const [email, setEmail]=useState("");                                  // API
  const [password, setPassword]=useState("");                                      // API

  const handleClick = async ()=>{                     // API
    const res = await axios.post('http://localhost:3000/api/auth/login',JSON.stringify({email,password}),{
      headers:{
        'Content-Type' : 'application/json',
      }
    })

    if(res.status===201){                     // API
      return toast.success("User Doesn't Exists!");
    }
    else{
      navigate('/dashboard');
      
    }
   }

  

  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        <Form method="post">
        <input
            type="name"
            name="name"
            required
            placeholder="Enter Email"
            aria-label="Your Name"
            autoComplete="given-name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password type
            name="password"
            required
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="hidden" name="_action" value="newUser"/>
         <button type="submit" className="btn btn--dark">
            <span>Login</span>
            <div>
             <i class="bi bi-box-arrow-in-right"></i>
             
            </div>
          </button>
          <p>
            Dont have an account?
          </p>
        </Form>
        <Link to="/signup" className="btn btn--dark">
            <span>SignUp</span>
            <div>
             <i class="bi bi-person-add"></i>
            </div>
          </Link>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro;