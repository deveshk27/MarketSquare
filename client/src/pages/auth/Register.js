import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Form, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../styles/AuthStyles.css'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (data) => {
        data.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name,
                email,
                password,
                phone,
                address,
                answer,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login")
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title="Register">
            <div className="form-container">
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit} > 
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(data) => setName(data.target.value)}
                            class="form-control"
                            id="exampleInputName"
                            placeholder='Enter Your Name'
                            required
                        />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(data) => setEmail(data.target.value)}
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Email'
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input 
                        type="password" 
                        value={password}
                        onChange={(data) => setPassword(data.target.value)}
                        class="form-control" 
                        id="exampleInputPassword1"
                        placeholder='Enter Your Password'
                        required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPhone" class="form-label">Phone</label>
                        <input 
                        type="phone" 
                        value={phone}
                        onChange={(data) => setPhone(data.target.value)}
                        class="form-control" 
                        id="exampleInputPhone"
                        placeholder='Enter Phone no.'
                        required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputAddress" class="form-label">Address</label>
                        <input 
                        type="address" 
                        value={address}
                        onChange={(data) => setAddress(data.target.value)}
                        class="form-control" 
                        id="exampleInputAddress"
                        placeholder='Enter Your Address'
                        required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputAddress" class="form-label" id='fpq'>Forgot Password Question</label>
                        <input 
                        type="forgotpassword" 
                        value={answer}
                        onChange={(data) => setAnswer(data.target.value)}
                        class="form-control" 
                        id="exampleInputforgotpassword"
                        placeholder='What is Your Favorite Sports'
                        required
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
}

export default Register;
