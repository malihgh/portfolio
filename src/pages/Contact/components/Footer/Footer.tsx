import { pagesListData } from "pages/Home/data/PageListData";
import * as Styled from "./styles";
import { HashLink } from "react-router-hash-link";
import SocialLinks from "pages/About/components/SocialLinks";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.HeaderAndInfoContainer>
        <Styled.PageContainer>
          {pagesListData.map((page) => (
            <HashLink
              key={page.id}
              smooth
              to={page.path}
              style={{ textDecoration: "none" }}
            >
              <Styled.Text>{page.name}</Styled.Text>
            </HashLink>
          ))}
        </Styled.PageContainer>

        <Styled.InfoContainer>
          <Styled.Text>Phone: +41-78 220 50 98</Styled.Text>
          <Styled.Divider>|</Styled.Divider>
          <Styled.Text>Mail: malih.ghasemian@gmail.com</Styled.Text>
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
