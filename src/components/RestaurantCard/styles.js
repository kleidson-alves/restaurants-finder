import styled, { css } from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-around;

  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;

  :hover{
    background-color:${props => props.theme.colors.background};
    border-left: 5px solid ${props => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
`;

export const RestaurantPhoto = styled.img`
  display: block;
  ${props => !props.imageLoaded && css`display: none`};

  width: 100px;
  height: 100px;
  border-radius: 6px;


`;
