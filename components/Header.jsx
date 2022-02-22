import React from 'react'
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logoutCurrentUser, toggleHiddenMenu } from '../redux/user/user-actions';

const StyledHeader = styled.header`
  color: #4287f4;
  border-bottom: 4px solid #d1d1d1;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 6px 6px #000000;
  max-height: 110px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bolder;
  margin: 0 auto;
`;

const LoginIcon = styled.a`
  text-align: right;
  padding: 30px;
  font-size: 32px;
  border-left: 4px solid #d1d1d1;
  cursor: pointer;
`;

const UserMenu = styled.div`
  width: 200px;
  border-radius: 0 0 15px 15px;
  background-color: white;
  right: 0px;
  position: absolute;
`;

const UserMenuList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 0 auto;
  padding-left: 0;
`;

const UserMenuItem = styled.li`
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid #d1d1d1;
  &:hover {
    background-color: rgba(0.2, 0.2, 0.2, 0.2)
  }
`;

const UserMenuItemName = styled.li`
  padding: 10px;
  border-bottom: 1px solid #d1d1d1;
  color: #4287f4;
`;

const Header = () => {

  const currentUser = useSelector(state => {
    return state.user.currentUser
  })

  const hiddenMenu = useSelector(state => {
    return state.user.hiddenMenu
  })

  const dispatch = useDispatch()

  return (
    <>
      <StyledHeader>
        <Title>
          Reserva de Pasajes ✈️ 
        </Title>
        {
          !currentUser ? 
          (
            <>
              <Link href={'/login'}>
                <LoginIcon>
                  <FontAwesomeIcon icon={faDoorOpen}/>
                </LoginIcon>
              </Link>
            </>
          ) : (
            <LoginIcon onClick={() => {
              if (!hiddenMenu) {
                dispatch(toggleHiddenMenu())
              } 
              }}>
              <FontAwesomeIcon icon={faUser}/>
            </LoginIcon>
          )
        }
      </StyledHeader>
      {
        hiddenMenu ? 
        <UserMenu>
          <UserMenuList>
            <UserMenuItemName>Hola, {currentUser.username}</UserMenuItemName>
            <Link href={'/purchases'}>
              <UserMenuItem>Mis Compras</UserMenuItem>
            </Link>
            <UserMenuItem onClick={() => {dispatch(logoutCurrentUser())}} style={{borderRadius: "0 0 15px 15px", borderBottom: 'none'}}>Cerrar Sesión</UserMenuItem>
          </UserMenuList>
        </UserMenu> : ""
      }
    </>
  )
}

export default Header