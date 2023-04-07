import React from "react";
import { useState } from 'react';
import Layout from "./../components/Layout/Layout";
import '../App.css'
import { Form,Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Consult = () => {
    const [prompt, setPrompt] = useState(" ");
    const [response,setResponse]=useState(" ");
    async function handleButtonClicked() {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/chat`, { prompt });
        setResponse(res.data);
    }
    return (
        <Layout>
            <h1 className="title">Consult About Your Pet</h1>

            <Form className="consultancy">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" placeholder="Enter your question here" value={prompt} onChange={(data)=>setPrompt(data.target.value)}  required />
                </Form.Group>
                <Button onClick={handleButtonClicked}>
                    Ask
                </Button>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder={response} />
                </Form.Group>
            </Form>
        </Layout>
    );
};

export default Consult;
