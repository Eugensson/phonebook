import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  margin: 100px auto;
  padding: 40px;
  width: 550px;
  height: 450px;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HomeWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 800px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
`;

export const ContactsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: right;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 900px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: #fff;
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: #f00;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  height: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  text-align: center;
`;

export const FormLabel = styled.label`
  padding: 5px;
`;

export const FormInput = styled(Field)`
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  color: ${({ isvalid }) => (isvalid !== 'false' ? '#000' : '#f00')};
  padding: 10px 5px;
  border: 0;
  border-bottom: 2px solid
    ${({ isvalid }) => (isvalid !== 'false' ? '#000' : '#f00')};
  outline: none;
  transition: all 0.5s;
  &::placeholder {
    text-transform: uppercase;
  }
`;

export const FormError = styled(ErrorMessage)`
  color: #f00;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
`;

export const LogInSignUpBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 10px;
  width: 50%;

  font-family: inherit;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
  }
`;




