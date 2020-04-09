import Styled from 'styled-components';

export const Navbar = Styled.nav`
  border-bottom: 1px solid #efefef;
  height: 72px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DateNow = Styled.div`
  font-size: 46px;
  font-weight: 600;
  margin-right: 8px;
  line-height: 0;
`;
export const DateLeft = Styled.div`
  display: flex;
  align-items: center;
`;
export const Days = Styled.span`
  font-size: 18px;
`;
export const Month = Styled.span`
  font-weight: 600;
  display: block;
`;