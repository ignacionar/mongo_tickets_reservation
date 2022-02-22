import styled from 'styled-components'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' ;

const StyledFooter = styled.footer`
  background-color: white;
  border-top: 4px solid #d1d1d1;
  height: 170px;
`;

const MediaIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  border-bottom: 4px solid #d1d1d1;
`;

const MediaLinks = styled.a`
  text-decoration: none;
  color: #4287f4;
  font-size: 40px;
  &:hover {
    background-color: rgba(0.2, 0.2, 0.2, 0.2)
  }
`;

const PaymentMethods = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% 70%;
`;

const PaymentText = styled.p`
  text-align: center;
  font-weight: bolder;
  text-decoration: underline;
  font-size: 20px;
`
const GridImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

const PaymentImages = styled.img`
  width: 60%;
  height: auto;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <MediaIcons>
        <MediaLinks href=""><FontAwesomeIcon icon={faFacebook}/></MediaLinks>
        <MediaLinks href=""><FontAwesomeIcon icon={faTwitter}/></MediaLinks>
        <MediaLinks href=""><FontAwesomeIcon icon={faInstagram}/></MediaLinks>
      </MediaIcons>
      <PaymentMethods>
        <PaymentText>ACEPTAMOS LOS SIGUIENTES MÉTODOS DE PAGO:</PaymentText>
        <GridImages>
          <PaymentImages src={'efectivo.png'}/>
          <PaymentImages src={'tarjetas.png'}/>
        </GridImages>
      </PaymentMethods>
    </StyledFooter>
  )
}

export default Footer