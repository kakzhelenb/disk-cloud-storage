import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { login } from "../http/api";
import { setIsAuth } from "../redux/store";
import { useDispatch } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {Dispatch} from "redux";
// import style from "../components/LeftBar/LeftBar.module.css";
import style from "./Authorization.module.css"

export function handleLogin(dispatch: Dispatch, navigate: ReturnType<typeof useNavigate>, url: string): void {
  let token = localStorage.getItem('token');
  console.log("token", token);
  console.log("location = ", url);

  if (url.startsWith('/common')) {
    ;
  } else {
    if (!!token && token !== 'undefined') {
      dispatch(setIsAuth(true));
      navigate('/fs');
    } else {
      dispatch(setIsAuth(false));
      navigate('/auth');
    }
  }
}

function Authorization() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(username, password); // Вызываем функцию login с параметрами
    handleLogin(dispatch, navigate, location.pathname);
    setUsername('');
    setPassword('');
  };

  return (
    <Form className={`${style.authField}`} onSubmit={handleSubmit}>
      <Form.Label><h4>  Вход в аккаунт </h4></Form.Label>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/*<Form.Label>Username</Form.Label>*/}
        <Form.Control
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/*<Form.Label>Password</Form.Label>*/}
        <Form.Control
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}

export default Authorization;
