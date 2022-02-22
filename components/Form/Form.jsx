import styled from 'styled-components';

export const Form = styled.form`
  top: 10%;
  text-align: center;
  width: 500px;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 0px 1px 10px 1px grey;
  position: absolute;
  background-color: white;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  text-align: left;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bolder;
  color: #4287f4;
  margin: 15px auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 15px;
  margin-bottom: 10px;
  border-color: ${props => props.color};
`;

export const Label = styled.label`
  color: ${props => props.color};
`;

export const Button = styled.button`
  background-color: white;
  border: 3px solid #4287f4;
  border-radius: 25px;
  padding: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  margin: 20px 32%;
  cursor: pointer;
  &:active {
    transform: scale(1.05)
  }
`

export const LinkContainer = styled.div`
  text-align: center;
`;

export const EnableSignup = styled.a`
  font-style: italic;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
