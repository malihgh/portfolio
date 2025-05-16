import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import backgroundImage from "assets/images/background-contact.svg";

export const Container = styled.div<MuiEmotion>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 16px;
  height: 220px;

  background-image: url(${backgroundImage});
  background-size: 107% 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;

  margin: 60px 0px;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    height: 85%;
    margin: 0;
    border-radius: 0;
    background-size: inherit;
    background-repeat: repeat;
  }

  @media only screen and (min-width: 740px) and (max-width: 1024px) {
    height: 60%;
    background-size: inherit;
    background-repeat: repeat;
  }
`;

export const TextContainer = styled.div`
  padding: 25px 40px;
  flex: 2;

  @media only screen and (max-width: 740px) {
    padding: 20px 20px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 20px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-family: "Poppins-bold", sans-serif;
  font-size: 35px;
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media only screen and (max-width: 740px) {
    font-size: 33px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 33px;
  }
`;

export const Shape = styled.img`
  width: 40px;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 10px;

  @media only screen and (max-width: 740px) {
    margin-top: -10px;
    position: absolute;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: -10px;
    position: absolute;
  }
`;

export const Description = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  text-transform: capitalize;
`;

export const Star = styled.img`
  width: 40px;
  height: 50px;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
