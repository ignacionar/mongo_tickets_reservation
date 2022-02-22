import React from 'react'
import LoginForm from '../components/LoginForm'
import { Background } from '../components/Background'
import { Home } from '../components/Purchases/Home';

const login = () => {
  
  return (
    <>
      <Home />
      <Background src={'airplane.jpg'}/>
      <LoginForm/>
    </>

      
    
  )
}

export default login