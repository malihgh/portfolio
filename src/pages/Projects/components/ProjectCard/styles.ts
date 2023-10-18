import styled from "@emotion/styled";

export const Card = styled.div`
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageFrame = styled.div`
  background-color: #edf0ee;
  width: 90%;
  height: 225px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
`;

// export const ImageBackground = styled.div`
//   width: 100%;
//   background-image: url(${profile});
//   background-size: auto 100%;
//   background-repeat: no-repeat;
// `; //for show image with right size

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  width: 90%;
  height: 60px; //to not change the size of the card
`;

export const Title = styled.div`
  color: #303535;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const Description = styled.div`
  color: #646060;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
