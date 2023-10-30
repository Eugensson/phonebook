import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  width: 100%;
  
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

export const FormBtn = styled.button`
  padding: 10px;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  background: #fff;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background: #000;
  }
`;
