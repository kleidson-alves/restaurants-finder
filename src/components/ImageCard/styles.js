import styled from 'styled-components';

export const Card = styled.div`
  display:flex;
  justify-content: center;

  width: 90px;
  height: 90px;
  border-radius: 6px;
  background:url( ${props => props.photo}) no-repeat center;
  background-size: cover;
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: #fff;
  font-size: 16px;

`;
