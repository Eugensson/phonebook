import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserNameWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const UserNameInfo = styled.p`
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const NavigationLink = styled(Link)`
  padding: 0.5em;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f00;
  }
`;

export const UserNameStyled = styled.span`
  color: #f00;
`;
