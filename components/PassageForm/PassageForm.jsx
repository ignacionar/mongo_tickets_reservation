import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from "next/router";

const Form = styled.form`
  display: flex;
  text-align: center;
  background-color: none;
  position: absolute;
`;

const Select = styled.select`
  padding: 10px;
  width: 80%;
  border-radius: 15px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  appearance: none;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  border-radius: 15px;
  border: none;
  font-family: 'Montserrat', sans-serif;
`;

const Label = styled.label`
  color: white;
  font-size: 24px;
`;

const Wrapper = styled.div`
  width: 250px;
`;

const Option = styled.option`
  position: absolute;
  &:hover {
    background-color: #4287f4;
  }
  font-weight: bolder;
`;

const Button = styled.button`
  background-color: white;
  border: 3px solid #4287f4;
  border-radius: 25px;
  padding: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  margin-left: 45%;
  position: absolute;
  bottom: 35%;
  cursor: pointer;
  &:active {
    transform: scale(1.05)
  }
`

const PassageForm = () => {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; 
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  } 
  today = yyyy + '-' + mm + '-' + (dd + 1);

  const hiddenMenu = useSelector(state => state.user.hiddenMenu)
  const currentUser = useSelector(state => state.user.currentUser)

  let origin = '';
  let destination = '';
  let quantity = 0;
  let date = '';
  let hour = '';

  const handlerValidation = () => {
    if (!currentUser) {
      Router.push('/login')
    }
    else if (origin === '' || destination === '' || quantity === 0 || date === '' || hour === '' || origin === destination) {
      alert('Revise los campos!')
    }
    else {
      newPurchase()
      Router.push('/purchases')
    }
  }

  const newPurchase = async () => {
    const response = await fetch(`http://localhost:4000`, {
      method: 'PUT',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: currentUser.username,
        password: currentUser.password,
        origin: origin,
        destination: destination,
        quantity: quantity,
        date: date,
        hour: hour,
        state: 'pendiente'
      })
    })
  }

  return (
  <>
    <Form style={hiddenMenu ? {bottom: '49%'} : {bottom: '54%'}}>
      <Wrapper>
        <Label>ORIGEN</Label>
        <Select onChange={(e) => {origin = e.target.value}}>
          <Option selected={true} disabled>Elija el origen</Option>
          <Option>Buenos Aires</Option>
          <Option>Córdoba</Option>
          <Option>Santa Fe</Option>
          <Option>Mendoza</Option>
          <Option>Tucumán</Option>
          <Option>Entre Ríos</Option>
          <Option>Salta</Option>
          <Option>Misiones</Option>
          <Option>Chaco</Option>
          <Option>Corrientes</Option>
          <Option>Santiago del Estero</Option>
          <Option>San Juan</Option>
          <Option>Jujuy</Option>
          <Option>Río Negro</Option>
          <Option>Neuquén</Option>
          <Option>Formosa</Option>
          <Option>Chubut</Option>
          <Option>San Luis</Option>
          <Option>Catamarca</Option>
          <Option>La Rioja</Option>
          <Option>La Pampa</Option>
          <Option>Santa Cruz</Option>
          <Option>Tierra del Fuego</Option>
        </Select>
      </Wrapper>
      <Wrapper>
        <Label>DESTINO</Label>
        <Select onChange={(e) => {destination = e.target.value}}>
        <Option selected={true} disabled>Elija el destino</Option>
          <Option>Buenos Aires</Option>
          <Option>Córdoba</Option>
          <Option>Santa Fe</Option>
          <Option>Mendoza</Option>
          <Option>Tucumán</Option>
          <Option>Entre Ríos</Option>
          <Option>Salta</Option>
          <Option>Misiones</Option>
          <Option>Chaco</Option>
          <Option>Corrientes</Option>
          <Option>Santiago del Estero</Option>
          <Option>San Juan</Option>
          <Option>Jujuy</Option>
          <Option>Río Negro</Option>
          <Option>Neuquén</Option>
          <Option>Formosa</Option>
          <Option>Chubut</Option>
          <Option>San Luis</Option>
          <Option>Catamarca</Option>
          <Option>La Rioja</Option>
          <Option>La Pampa</Option>
          <Option>Santa Cruz</Option>
          <Option>Tierra del Fuego</Option>
        </Select>
      </Wrapper>
      <Wrapper>
        <Label>CANTIDAD</Label>
        <Input onChange={(e) => {quantity = e.target.value}} type={'number'} min="0"/>
      </Wrapper>
      <Wrapper>
        <Label>FECHA</Label>
        <Input onChange={(e) => {date = e.target.value}} min={today} type={'date'}/>
      </Wrapper>
      <Wrapper>
        <Label>HORA</Label>
        <Select onChange={(e) => {hour = e.target.value}}>
          <Option selected={true} disabled>Elija la hora</Option>
          <Option>00:00 am</Option>
          <Option>04:00 am</Option>
          <Option>08:00 am</Option>
          <Option>12:00 pm</Option>
          <Option>16:00 pm</Option>
          <Option>20:00 pm</Option>
        </Select>
      </Wrapper>
    </Form>
    <Button onClick={() => {handlerValidation()}}>CONFIRMAR</Button>
  </>
  )
}

export default PassageForm