import React from 'react'
import SignupForm from '../components/SignupForm'
import { Background } from '../components/Background'
import { Home } from '../components/Purchases/Home'

const signup = () => {

  return (
    <>
      <Home />
      <Background src={'airplane.jpg'}/>
      <SignupForm/>
    </>
  )
}

export default signup;