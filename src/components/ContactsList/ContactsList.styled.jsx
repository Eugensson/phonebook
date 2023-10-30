import styled from '@emotion/styled';

export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  gap: 40px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 350px;
  font-size: 20px;
  padding: 10px;  

  border: 3px solid #f00;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
`;
