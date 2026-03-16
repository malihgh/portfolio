import * as Styled from "./styles";
import SocialLinks from "pages/About/components/SocialLinks";
import CustomHref from "core/components/CustomHref";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Styled.Container>
      <Styled.HeaderAndInfoContainer>
        <Styled.InfoContainer>
          <CustomHref to="https://t.me/MaliheGhasemian">
            <Styled.Text>Telegram: MaliheGhasemian</Styled.Text>
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
          Copyright © {currentYear} Maliheh Ghasemian. All rights reserved.
        </Styled.Text>

        <SocialLinks />
      </Styled.RowContainer>
    </Styled.Container>
  );
};

export default Footer;
