import { styled } from 'styled-components';
import { ReactComponent as ArrowUp } from '../arrowup.svg';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.blackColor};
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 70px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 100px;
    padding-bottom: 85px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 118px;
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 245px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
    padding-right: 198px;
    position: relative;
   }

 

`;

export const ButtonFaq = styled.button`
     position:relative;
    cursor: pointer;
    display:flex;
    align-items:center;
      border: none;
    background-color: transparent;
     margin-left: auto;
    
     
  .btn-span{
      color: ${({ theme }) => theme.brandColor};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1.92px;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
    &:hover .btn-span {
        background: linear-gradient(235deg, #F4F90F -1.28%, #0FF9C0 115.55%);
        -webkit-background-clip: text; 
        background-clip: text;
        color: transparent;
            }
            @media screen and (min-width:1368px){
              margin-right: 190px;
            }
             @media screen and (min-width:1920px){
              margin-right: 420px;
            }
`

export const SvgArrow = styled(ArrowUp)`
   transform: ${ props => props.$data === 'true' ? 'rotate(180deg)' : ''};
  `

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    font-size: 40px;
  }
  @media screen and (min-width: 1368px) {
    text-align: right;
    margin-bottom: -40px;
  }
  @media screen and (min-width: 1920px) {
    position: absolute;
    top: 0;
    right: 200px;
    margin-bottom: 0;
    font-size: 90px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
   
  @media screen and (min-width: 768px) {
    gap: 0;
  }
 
  @media screen and (min-width: 1920px) {
    flex-grow: 1;
  }
`;
