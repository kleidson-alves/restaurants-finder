import styled from "styled-components";
import Slider from "react-slick";

export const Wropper = styled.div`
  display: flex;

`;

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  padding: 15px;
`;

export const Carousel = styled(Slider)`
margin: 15px 0;
  .slick-slide {
    margin-right: 25px;
  }
`;

export const Logo = styled.img`
  margin: 15px auto;
  margin-bottom: 15px;
  width: 200px;
`;

export const Map = styled.div`
  background: red;
  max-width: 200px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;

  margin-top: 16px;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
   margin-bottom: 10px;
  letter-spacing: 0.15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  text-transform: none;
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
