import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user-actions';
import Router from 'next/router';
import { Form, Title, Wrapper, Input, Label, Button, LinkContainer, EnableSignup } from './Form/Form';

const SignupForm = () => {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorText, setErrorText] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPW, setErrorPW] = useState(false);
  const [alreadyExisting, setAlreadyExisting] = useState(false);

  const dispatch = useDispatch()

  const verifySignup = (data) => {
    if (data.user === 'already exists') {
      setTimeout(() => {
        setAlreadyExisting(false)
      }, 3000);
      setAlreadyExisting(true)
      return
    }
    dispatch(setCurrentUser({username: username, password: password}));
    Router.push('/');
  }

  const handlerSignup = async (US, EM, PASS) => {
    const response = await fetch(`http://localhost:4000/signup`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: US,
        email: EM,
        password: PASS
      })
    })
    const data = await response.json();
    verifySignup(data);
  }
  
  const HandlerValidation = (e) => {
    e.preventDefault()
    if (username === undefined || username.length < 8 || username.length > 16) {
      setTimeout(() => {
        setErrorText(false);
      }, 3000);
      setErrorText(true);
    }
    if (email === undefined || !email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
      setTimeout(() => {
        setErrorEmail(false);
      }, 3000);
      setErrorEmail(true);
    }
    if (password === undefined || password.length < 8 || password.length > 16) {
      setTimeout(() => {
        setErrorPW(false);
      }, 3000);
      setErrorPW(true);
      return;
    }
    if (!errorText && !errorEmail && !errorPW) {
      handlerSignup(username, email, password);
      console.log(email);
    }
  }

  return (
    <Form>
      <Title>Reserva de Pasajes ✈️</Title>
      <Wrapper>
        <Label color={errorText ? 'red' : 'black'}>{!errorText ? "Nombre de Usuario" : 'Debe contener entre 8 y 16 caracteres!'}</Label>
        <Input value={username ?? ''} onChange={(e) => {setUsername(e.target.value)}} color={errorText ? 'red' : 'grey'} type={'text'} placeholder={'...'}></Input>
        <Label color={errorEmail ? 'red' : 'black'}>{!errorEmail ? "Email" : 'Email inválido!'}</Label>
        <Input value={email ?? ''} onChange={(e) => {setEmail(e.target.value)}} color={errorEmail ? 'red' : 'grey'} type={'email'} placeholder={'...'}/>
        <Label color={errorPW ? 'red' : 'bla<ck'}>{!errorPW ? "Contraseña" : 'Debe contener entre 8 y 16 caracteres!'}</Label>
        <Input value={password ?? ''} onChange={(e) => {setPassword(e.target.value)}} color={errorPW ? 'red' : 'grey'} type={'password'} placeholder={'...'}/>
        {
          alreadyExisting ? <Label color='red'>El email ya fue utilizado</Label> : (<>
            <Button onClick={(e) => HandlerValidation(e)}>Registrarse</Button>
            <LinkContainer>
              <EnableSignup href='/login'>{"Ya estas registrado? Toca acá"}</EnableSignup>
            </LinkContainer>
          </>)
        }
        
      </Wrapper>
    </Form>
  )
}

export default SignupForm;