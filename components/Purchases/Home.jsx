import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeIcon = styled.a`
  background-color: white;
  color: black;
  text-decoration: none;
  position: absolute;
  border: 2px solid #d1d1d1;
  top: 10px;
  left: 25px;
  color: #4287f4;
  padding: 10px;
  border-radius: 5px;
`;

export const Home = () => {
  return <HomeIcon href={'/'}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></HomeIcon>

}