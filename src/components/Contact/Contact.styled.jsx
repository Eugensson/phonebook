import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 10px;
`;

export const ContactInfo = styled.span`
  color: #000;
`;

export const BtnWrapper = styled.div`
  display: flex;  
  gap: 10px;
`;

export const DeleteBtn = styled.button`
  font-family: inherit;
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: #000;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    color: #f00;
  }
`;