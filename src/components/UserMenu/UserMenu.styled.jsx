import styled from '@emotion/styled';

export const MenuWrapper = styled.div`
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

export const MenuText = styled.p`
  margin: 0;
  align-self: center;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    width: 112px;
  }
`;

export const MenuSettingItem = styled.p`
  margin: 0;
`;

export const MenuButton = styled.button`
  display: block;
  background-color: #f6e764;
  color: #0341fa;
  border: none;
  width: 80px;
  height: 30px;
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