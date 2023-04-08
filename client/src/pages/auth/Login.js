import React from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Form, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (data) => {
        data.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                // we are sending the user to the site he/she wanted to reach before login for better experience
                navigate(location.state || "/")
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
        <Layout title="login">
            <div class='form-container'>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(data) => setEmail(data.target.value)}
                            class="form-control"
                            id="exampleInputEmail"
                            placeholder='Enter Your Email'
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword" class="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(data) => setPassword(data.target.value)}
                            class="form-control"
                            id="exampleInputPassword"
                            placeholder='Enter Your Password'
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary marrr">
                        LOGIN
                    </button>

                    <div className="mb-3">
                        <button
                            type="button"
                            className="btn btn-primary pads"
                            onClick={() => {
                                navigate("/forgot-password");
                            }}
                        >
                            Forgot Password
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Login;
