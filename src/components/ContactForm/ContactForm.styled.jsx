import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  border-radius: 6px;
  background-color: #0341fa;
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 19px;
`;

export const Input = styled.input`
  margin: 8px 0;
  width: 210px;
  height: 30px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  padding: 2px 8px;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 34%);
`;

export const Button = styled.button`
  display: block;
  background-color: #f6e764;
  color: #0341fa;
  border: none;
  width: 142px;
  height: 38px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
  :hover {
    background-color: #2196F3;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const PhoneBookWrapper = styled.div`
  width: 500px;
  padding: 10px;
  margin: 0 auto;
`;
