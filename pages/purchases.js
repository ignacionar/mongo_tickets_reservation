import React, { useState } from 'react'
import { Background } from '../components/Background';
import { Purchase, PurchaseDetails, PurchaseState } from '../components/Purchases/Purchase'
import { PurchasesContainer, PurchasesTitle } from '../components/Purchases/PurchasesContainer'
import Footer from './../components/Footer';
import { useSelector } from 'react-redux';
import Router from "next/router";
import { Home } from '../components/Purchases/Home';

const purchases = () => {

  const currentUser = useSelector(state => state.user.currentUser)

  if (!currentUser) {
    Router.push('/')
  }

  const [purchaseArray, setPurchaseArray] = useState([])

  const GetPurchases = async () => {
    const response = await fetch(`http://localhost:4000`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: currentUser.username,
        password: currentUser.password,
      })
    })
    const data = await response.json()
    setPurchaseArray(data)
  }

  if (!purchaseArray[0]) {
    GetPurchases()
  }
  
  return (
    <>
      <Home/>
      <Background src={'airplane.jpg'}/>
      <PurchasesContainer>
        <PurchasesTitle>COMPRAS REALIZADAS:</PurchasesTitle>
        {
          purchaseArray.map(element => 
          <Purchase>
            <PurchaseDetails>
              <h2>ORIGEN</h2>
              <h4>{element.origin}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>DESTINO</h2>
              <h4>{element.destination}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>CANTIDAD</h2>
              <h4>x {element.quantity}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>FECHA</h2>
              <h4>{element.date}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>HORA</h2>
              <h4>{element.hour}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>Precio</h2>
              <h4>$ {element.quantity * 1000}</h4>
            </PurchaseDetails>
            <PurchaseDetails>
              <h2>ESTADO</h2>
              <PurchaseState color={element.state === 'pendiente' ? 'red' : '#32cd32'}>{element.state}</PurchaseState>
            </PurchaseDetails>
          </Purchase>) 
        }
      </PurchasesContainer>
      <Footer style={{position: 'absolute'}}/>
    </>
  )
}

export default purchases