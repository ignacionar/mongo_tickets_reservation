import styled from "styled-components";

export const Purchase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  border-bottom: 2px solid black;
  margin-bottom: 5px;
`;

export const PurchaseDetails = styled.div`
  text-align: center;
`;

export const PurchaseState = styled.a`
  background-color: ${props => props.color};
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 10px;
`;