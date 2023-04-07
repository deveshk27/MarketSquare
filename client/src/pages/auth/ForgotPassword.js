import React from 'react';
import {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Form, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [answer,setAnswer]=useState("");
    const navigate=useNavigate();
    const handleSubmit= async (data)=>{
        data.preventDefault();
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{
                email,
                newPassword,
                answer
            });
            if(res.data.success)
            {
                toast.success(res.data.message);
                navigate("/login")
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
    <Layout>
       <Row style={{ marginTop: "50px" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}onChange={(data)=>setEmail(data.target.value)}  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={newPassword} onChange={(data)=>setNewPassword(data.target.value)}  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter Your Secret Answer</Form.Label>
                            <Form.Control type="text" placeholder="Password" value={answer} onChange={(data)=>setAnswer(data.target.value)}  required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Reset
                        </Button>
                    </Form>
                </Col>
            </Row>
    </Layout>
  )
}

export default ForgotPassword
