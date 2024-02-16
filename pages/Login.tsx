// Login.jsx
import React from 'react';
import InstagramLoginForm from '../components/InstagramLoginForm';
import { UserProvider } from "../context/UserContext";

const Login = () => {
    return (
        <UserProvider>
            <h1>Login Page</h1>
            <InstagramLoginForm />
        </UserProvider>
    );
};

export default Login;
