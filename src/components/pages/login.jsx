import React, { Component, useState } from 'react';
import logo from "../../img/logo.png";
import "../../../src/styles/login.css";
import {  gql, useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  if(localStorage.getItem("token")){
    history.push('/dashboard')
  }

  const [its_id, setIts] = useState('');
  const [password, setPassword] = useState('');
  const LOGIN_REQUEST = gql`
      query Login($its_id: Int!, $password: String!) {
        login(filter: {
          its_id: $its_id,
          password: $password 
        }){
          token
        }
      }
    `
  const [login, { loading, data }] = useLazyQuery(LOGIN_REQUEST);

  if (loading) return <p>Loading...</p>;
  if (data) {
    localStorage.setItem("token", data.login.token)
    history.push('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-main-style">
        <div className="login-logo-div">
          <img src={logo} alt="" className="login-logo" />
          <div className="vertical-line"></div>
        </div>

        <div className="login-form" >
          <h1>Login</h1>
          <div className="login-data-input">
            <input type="text" placeholder="Email" onChange={event => setIts(event.target.value)} />
            <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
            <button type="submit" onClick={() => login({ variables: { its_id: Number(its_id), password: password } })}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login;