import styled from "@emotion/styled";
// import { MuiEmotion } from "core/types/MuiEmotion";

export const AboutIntroContainer = styled.div`
  position: relative;
  /* margin-top: 110px; */
  flex: 5;
  padding-left: 50px;

  @media only screen and (max-width: 740px) {
    margin-top: 50px;
  }
`;

export const Description = styled.div`
  color: #6c6c6c;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;

  strong {
    font-weight: 600;
  }
`;

export const Shape = styled.img`
  width: 120px;
  position: absolute;
  top: -70px;
  right: 20px;

  @media only screen and (max-width: 740px) {
    top: -40px;
    right: 0px;
  }
`;
