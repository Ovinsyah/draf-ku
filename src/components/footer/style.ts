import Styled from 'styled-components';

export const SectionButtonFLoat = Styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 450px;
  margin: auto;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  background: white;
  border-top: 1px solid #efefef;
`;
export const ButtonSort = Styled.button`
  background: white;
  color: #a97ae4;
  height: 40px;
  width: 95px;
  margin-right: 8px;
  border-radius: 30px;
  &:hover{
    color: white;
  }
`;
export const ButtonFloat = Styled.button`
  width: 140px;
  height: 48px;
  border-radius: 30px;
  margin-right: 24px;
`;
export const ItemSort = Styled.div`
  padding: 16px 8px;
  border-bottom: 1px solid #ececec;
  font-weight: 600;
  cursor: pointer;
`;