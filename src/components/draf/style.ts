import Styled from 'styled-components';

export const Section = Styled.section`
  padding: 24px 24px 64px;
  position: relative;
`;
export const Card = Styled.div`
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ececec;
  border-radius: 6px;
  background: #f8fafa;
  position: relative;
  transition: all .3s;
  cursor: pointer;
  .more-menu{
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in;
  }
  &:after{
    content: '';
    background: #a97ae4;
    height: 50px;
    width: 4px;
    border-radius: 2px;
    display: block;
    position: absolute;
    left: -2px;
    top: calc(50% - 20px);
    transition: all .3s;
  }
  &:hover{
    transition: all .3s;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.12);
    .more-menu{
      visibility: visible;
      opacity: 1;
      transition: all .3s ease-in;
    }
    &:after{
      background: #8c5bca;
      transition: all .3s;
    }
  }
`;
export const TitleCard = Styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;
export const DescriptionCard = Styled.p`
  margin: 0;
  text-align: justify;
  font-size: 12px;
`;
export const SectionDate = Styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  line-height: 0;
`;
export const IconClock = Styled.img`
  height: 18px;
  margin-right: 8px;
`;
export const MoreMenu = Styled.div`
  position: absolute;
  right: 0;
  background: #a97ae4;
  height: 50px;
  top: calc(50% - 20px);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 6px 0px 0px 6px;
  color: white;
`;
export const IconMenu = Styled.div`
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  line-height: 0;
  transition: all .3s;
  &:hover{
    background: #8c5bca;
    transition: all .3s;
  }
  img{
    height: 18px;
  }
  margin: 0 5px;
`;
export const SectionRemove = Styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  padding-top: 70px;
  text-align: center;
`;