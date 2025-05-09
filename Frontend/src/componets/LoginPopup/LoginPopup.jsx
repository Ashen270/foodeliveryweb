import React, { useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';


const LoginPopup = ({setShowLogin}) => {



  const {baseURL,setToken} = useContext(StoreContext);

    const[currState,setCurrState] = React.useState("Sign Up");
    const [data, setData] = React.useState({
      name: "",
      email: "",
      password: "",
    });

      const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData( data=> ({...data, [name]: value}));
      }

   const onLogin =  async (event) => {
        event.preventDefault();
        let newUrl = baseURL;
        if (currState==="Login") {
          newUrl += "/api/user/login";
          
        }
        else {
          newUrl += "/api/user/register";
        }

        const  response = await axios.post(newUrl, data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token); 
          setShowLogin(false);
        }
        else {
          alert(response.data.message);
        }
   }



  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>: <input name='name' value={data.name} onChange={onChangeHandler} type="text" placeholder='Your Name' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required/>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?
        <p>Create a new account? <span onClick={() =>setCurrState('Sign Up')}> Click Here</span></p>
        :
        <p>Already have an Account? <span onClick={() =>setCurrState('Login')}> Login Here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
