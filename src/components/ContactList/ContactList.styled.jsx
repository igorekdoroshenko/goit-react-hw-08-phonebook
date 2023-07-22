import styled from '@emotion/styled';

export const ContactWriper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  width: 500px;
  padding: 12px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 17px;
  width: 500px;
  padding: 10px;
  border-radius: 6px;
  background-color: #0341fa;
  margin-bottom: 5px;
  margin-left: -10px;
`;

export const ContactButton = styled.button`
  display: block;
  background-color: #f6e764;
  color: #0341fa;
  border: none;
  width: 130px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
  :hover {
    background-color: #2196F3;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const ContactInfo = styled.p`
  width: 500px;
  color: #f6e764;
`;

export const ModalWrapper = styled.div`
  background-color: #0341fa;
  text-align: center;
  padding: 16px;
  border-radius: 6px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

export const ModalButton = styled.button`
  display: block;
  background-color: #f6e764;
  color: black;
  border: none;
  width: 100px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #038bfa;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  color: #f6e764;
`;

export const ModalText = styled.p`
  color: #f6e764;
`;
