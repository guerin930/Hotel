import styled from 'styled-components'

export const ServicesContainer = styled.div`
 height: 600px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #000;

 @media screen and (max-width: 768px) {
     height: 1100px;
 }

 @media screen and (max-width: 480px) {
     height: 1300px
 }
`
export const ServicesWrapper = styled.div`
 max-width: 1080px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 50px;

 @media screen and (max-width: 1000px) {
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px) {
     grid-template-columns: 1fr;
     padding: 0 20px;
 }
`
export const ServicesCard = styled.div`
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 350px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 box-shadow: -1px 2px 6px 3px rgba(255,255,255,0.82);
 -webkit-box-shadow: -1px 2px 6px 3px rgba(255,255,255,0.82);
 -moz-box-shadow: -1px 2px 6px 3px rgba(255,255,255,0.82);

 &:hover {
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }
`
export const ServicesIcon = styled.img`
 height: 120px;
 width: 120px;
 margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
 font-size: 2.5rem;
 color: #fff;
 margin-bottom: 64px;

 @media screen and (max-width: 480px) {
     font-size: 2rem;
 }
`
export const ServicesH2 = styled.h2`
 font-size: 1rem;
 color: #000;
 margin-bottom: 10px;
 font-weight:600;
`
export const ServicesP = styled.p`
 font-size: 1rem;
 text-align: center;
 color: #000;
`