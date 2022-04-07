import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom";

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] =  useState('')
    let navigate = useNavigate ();

    function usernameChangeHandler(e){
        setUserName(e.target.value)
    }

    function passwordChangeHandler(e){
        setPassword(e.target.value)
    }

    function submitHandler(){
        if((userName === "Himanshu" && password === "Himanshu@123") || (userName === "Rahul" && password === "Rahul@123") ){
            console.log("Welcome...")
            setUserName('')
            setPassword('')
            navigate("/dashboard");
        }else{
            setErr('Username or Password is incorrect') 
        }
    }

    if(err){
        setTimeout(()=>{
            setErr('')
            setUserName('')
            setPassword('')
        },1500)
    }

    return (
        <div className='form-container'>
            <h1>Login</h1>
            <input type="text" placeholder="Enter Username" value={userName} onChange={usernameChangeHandler}></input>
            <input type="password" placeholder='Enter Password' value={password} onChange={passwordChangeHandler}></input>
            {err && <div className='error'>{err}</div>}
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Login