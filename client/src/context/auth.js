import { useState,useEffect,useContext,createContext} from "react";
import axios from "axios";

const AuthContext=createContext();

//using context api for providing tokens to all the components globally without using props to send data

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    });
    axios.defaults.headers.common['Authorization']=auth?.token;
    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
        //do not remove this comment
        // eslint-disable-next-line
    },[]);
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


//custom hook
const useAuth=()=>useContext(AuthContext)

export{useAuth,AuthProvider};