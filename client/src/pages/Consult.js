import React from "react";
import { useState } from 'react';
import Layout from "./../components/Layout/Layout";
import '../App.css'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Consult = () => {
    const [prompt, setPrompt] = useState(" ");
    const [response, setResponse] = useState(" ");
    async function handleButtonClicked() {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/chat`, { prompt });
        setResponse(res.data);
    }
    return (
        <Layout>
            {/* <div class="containerworking"> */}
                <h1 className="title">Consult About Your Pet</h1>

                <Form className="consultancy">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="headers">Question</Form.Label>
                        <Form.Control className="form-control12" type="text" placeholder="Enter your question here" value={prompt} onChange={(data) => setPrompt(data.target.value)} required />
                    </Form.Group>
                    <Button onClick={handleButtonClicked} variant="secondary" size='lg'>
                        Ask
                    </Button>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="headers">Answer</Form.Label>
                        <Form.Control className="form-control12"  as="textarea" rows={10} placeholder={response} />
                    </Form.Group>
                </Form>
            {/* </div> */}

        </Layout>
    );
};

export default Consult;