import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import backgroundImage from "assets/images/background-contact.svg";

export const Container = styled.div<MuiEmotion>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 16px;
  height: 240px;

  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;

  margin: 60px 0px;
`;

export const TextContainer = styled.div`
  padding: 40px;
  flex: 2;
`;

export const Title = styled.div`
  color: #fff;
  font-family: "Poppins-bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const Shape = styled.img`
  width: 40px;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
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
