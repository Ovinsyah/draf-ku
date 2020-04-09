import Styled, { css } from 'styled-components';

export const Section = Styled.div`
  background: white;
  position: fixed;
  top: 0;
  max-width: 450px;
  width: 100%;
  height: 100vh;
`;
export const Header = Styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #efefef;
  padding: 0px 24px;
`;
export const Content = Styled.div`
  padding: 24px;
`;
export const IconClose = Styled.img`
  height: 16px;
  cursor: pointer;
`;
export const Label = Styled.label`
  font-weight: bold;
  margin-bottom: 6px;
  display: inline-block;
`;
export const SectionDatePicker = Styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .react-datepicker-wrapper, .date-picker{
    min-width: 100%;
    cursor: pointer;
  }
`;
export const IconClock = Styled.img`
  height: 18px;
  position: absolute;
  right: 12px;
`;
export const SectionInput = Styled.div`
  margin-bottom: 16px;
  ${(props: {error?: boolean}) => props.error && css`
    input, textarea{
      border-color: #ff3232;
    }
  `}
`;
export const ErrorMessage = Styled.span`
  color: #ff3232;
  display: inline-block;
  font-size: 12px;
  margin-top: 8px;
  font-weight: 600;
`;