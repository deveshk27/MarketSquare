import {useState,React,useEffect} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';

// suppose user tried to access dashboard or cart and he/she is not logged in 
// in that case after login we can directly send him/her to the page he/she requested 
//for that we are using useLocation to tract the history of user

const Spinner = ({path = "login"}) => {
    const [count,setCount]=useState(3)
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevValue)=>--prevValue)
        },1000)
        count===0 && 
        navigate(`/${path}`,{
            state:location.pathname
        });
        return ()=>clearInterval(interval)
    },[count,navigate,location,path])
    return (
        <>
        <div class="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <h1> redirecting you in {count} seconds</h1>
            <br/>
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        </>
    );
}

export default Spinner;
