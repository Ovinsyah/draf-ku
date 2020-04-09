import Styled, { css } from 'styled-components';
export const Section = Styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 450px;
  width: 100%;
  z-index: 999;
  ${(props: {active: boolean}) => props.active && css`
    visibility: visible;
  `};
`;
export const SectionModal = Styled.div`
`;
export const Backdrop = Styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
`;
export const ContentModal = Styled.div`
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  height: 320px;
  border-radius: 12px 12px 0px 0px;
  background: white;
  padding: 24px;
`;