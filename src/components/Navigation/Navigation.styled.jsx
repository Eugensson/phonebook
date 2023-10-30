import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 100vw;
  color: #fff;
  background-color: #000;
  border-bottom: 1px solid #fff;
  box-shadow: 0px 1px 1px #999696;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavigationList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 20px;
`;

export const NavigationItem = styled.li`
  display: flex;
  gap: 60px;
`;

export const ContactsLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;  

  font-weight: 700;
  font-size: 20px;
  color: #fff;

  &:hover,
  &:focus,
  &.active {
    color: #f00;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    color: #f00;
  }
`;
