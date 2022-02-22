import styled from 'styled-components';

export const Background = styled.div`
  background-position: center;
  background-size: cover;
  height: 700px;
  background-image: url(${props => props.src});
`;

export const BackgroundImage = styled.img`
  height: auto;
  width: 100%;
`;
