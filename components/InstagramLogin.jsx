'use client'
import React from 'react';
import { useUser } from '../context/UserContext';
import InstagramLogin from "react-instagram-oauth";


  export default props => {
    const authHandler = (err, data) => {
      console.log(err, data);

    };
const API_ID = 17841402316785071;
const APP_Secret = "d32565357bdef6f00a67a54d1f8f31cf";
const redirect = "http://127.0.0.1:5000/login";

    return (
        <div>
          <InstagramLogin
            authCallback={authHandler}
            appId={API_ID}
            appSecret={APP_Secret}
            redirectUri={redirect}

        />
        </div>
    );
};

