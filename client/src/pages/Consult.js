import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import '../App.css'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Consult = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleButtonClicked();
        }
    };

    const handleButtonClicked = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/chat`, { prompt });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <Layout>
            <h1 className="title">Consult About Your Pet</h1>
            <Form className="consultancy">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="headers">Question</Form.Label>
                    <Form.Control
                        className="form-control12"
                        type="text"
                        placeholder="Enter your question here"
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)}
                        onKeyDown={handleKeyDown}
                        required
                    />
                </Form.Group>
                <Button
                    variant="secondary"
                    size='lg'
                    onClick={handleButtonClicked}
                >
                    Ask
                </Button>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="headers">Answer</Form.Label>
                    <Form.Control
                        className="form-control12"
                        as="textarea"
                        rows={10}
                        placeholder={response}
                        readOnly
                    />
                </Form.Group>
            </Form>
        </Layout>
    );
};

export default Consult;
