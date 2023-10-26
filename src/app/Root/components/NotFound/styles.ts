import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import wave from "assets/images/wave.svg";
import ScreenContainer from "core/components/ScreenContainer";
import Button from "core/components/Button";

export const Container = styled(ScreenContainer)<MuiEmotion>`
  padding: 0;
  height: 100vh;
  background-image: url(${wave});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #8be3e3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  font-size: 200px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-shadow: 7px 5px 2px rgba(0, 0, 0, 0.5);
  word-spacing: 0px;

  @media (max-width: 740px) {
    font-size: 130px;
  }
`;

export const Title = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #175e5e;
`;

export const Message = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #175e5e;
  opacity: 0.8;
  margin-top: 20px;
`;

export const BackButton = styled(Button)<MuiEmotion>`
  width: 180px;
  margin-top: 40px;
`;

export const App = styled.div``;
