import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const HeaderContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-family: "Poppins-Bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  line-height: 48px;
  padding-top: 30px;
  position: relative;
  display: inline-block;
  align-self: center;
`;

export const SubTitle = styled.div`
  color: #6c6c6c; //fix
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  width: 60%;
  margin: auto;
  margin-top: 35px;

  @media only screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const Shape = styled.img`
  width: 50px;
  /* margin-bottom: 30px; */
  position: absolute;
  top: -5px;
  right: -33px;
`;
