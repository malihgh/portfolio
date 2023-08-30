import styled from "@emotion/styled";

export const Container = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-bottom: 20px;

  @media only screen and (max-width: 740px) {
    padding-left: 0px;
    padding-bottom: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.div`
  color: #4a4a4a;
  text-align: center;
  font-family: "Poppins-Bold", sans-serif;
  font-size: 32px;
  font-style: normal;
  line-height: 48px;
  margin-bottom: 20px;
`;

export const Category = styled.div`
  margin-bottom: 15px;
`;

export const Expertise = styled.div`
  display: inline-block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 7px;
  border-radius: 6px;
  background: #eaf3f3;
  margin-right: 10px;
  margin-bottom: 7px;
`;

export const Text = styled.div`
  color: #5b5b5b;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
`;
