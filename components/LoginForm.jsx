import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user-actions';
import Router from "next/router";
import { Form, Title, Wrapper, Input, Label, Button, LinkContainer, EnableSignup } from './Form/Form';

const LoginForm = () => {

  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const [errorMSG, setErrorMSG] = useState(false)

  const dispatch = useDispatch()

  const verifyLogin = (data) => {
    if (username === undefined || password === undefined || data.user === 'not found') {
      setTimeout(() => {
        setErrorMSG(false)
      }, 3000);
      setErrorMSG(true)
      return
    }
    dispatch(setCurrentUser({username: username, password: password}));
    Router.push('/');
  }

  const handlerLogin = async (US, PASS) => {
    const response = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: US,
        password: PASS
      })
    })
    const data = await response.json()
    verifyLogin(data);
  }

  const handlerValidation = (e) => {
    e.preventDefault()
    handlerLogin(username, password)
  }

  return (
    <Form>
      <Title>Reserva de Pasajes ✈️</Title>
      <Wrapper>
        <Label color={'black'}>{"Nombre de Usuario"}</Label>
        <Input value={username ?? ''} onChange={(e) => {setUsername(e.target.value)}} color={'grey'} type={'text'} placeholder='...'/>
        <Label color={'black'}>{"Contraseña"}</Label>
        <Input value={password ?? ''} onChange={(e) => {setPassword(e.target.value)}} color={'grey'} type={'password'} placeholder='...'/>
        {
          errorMSG ? <Label color={'red'}>Nombre de usuario y/o contraseña incorrecto</Label> : 
          <>
            <Button onClick={(e) => {handlerValidation(e)}}>Iniciar sesión</Button>
            <LinkContainer>
              <EnableSignup href='/signup'>{"No estás registrado? Hacelo acá"}</EnableSignup>
            </LinkContainer>
          </>
        }
      </Wrapper>
    </Form>
  )
}

export default LoginForm