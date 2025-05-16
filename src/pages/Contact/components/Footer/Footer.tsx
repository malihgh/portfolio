import * as Styled from "./styles";
import SocialLinks from "pages/About/components/SocialLinks";
import CustomHref from "core/components/CustomHref";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.HeaderAndInfoContainer>
        <Styled.InfoContainer>
          <CustomHref to="tel:+41782205098">
            <Styled.Text>Phone: +41-78 220 50 98</Styled.Text>
          </CustomHref>

          <CustomHref to="mailto:malih.ghasemian@gmail.com">
            <Styled.Text>Mail: malih.ghasemian@gmail.com</Styled.Text>
          </CustomHref>
        </Styled.InfoContainer>
      </Styled.HeaderAndInfoContainer>

      <Styled.Line />

      <Styled.RowContainer>
        <Styled.Text>Maliheh Ghasemian</Styled.Text>

        <Styled.Text>
          Copyright © 2023 Maliheh Ghasemian. All rights reserved.
        </Styled.Text>

        <SocialLinks />
      </Styled.RowContainer>
    </Styled.Container>
  );
};

export default Footer;
