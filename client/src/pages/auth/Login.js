import React from 'react';
import {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Form, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useAuth();
    const navigate=useNavigate();
    const location = useLocation();
    const handleSubmit= async (data)=>{
        data.preventDefault();
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
            if(res.data.success)
            {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                // we are sending the user to the site he/she wanted to reach before login for better experience
                navigate(location.state ||"/")
            }
            else 
            {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout >
            <Row style={{ marginTop: "50px" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}onChange={(data)=>setEmail(data.target.value)}  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(data)=>setPassword(data.target.value)}  required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <div className="mt-3">
                        <Button variant="primary" type="button" className="btn btn-primary" onClick={() => {navigate('/forgot-password')}}>
                            Forgot Password
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Layout>
    );
}

export default Login;
