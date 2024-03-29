import HeaderWithIcon from "core/components/HeaderWithIcon/HeaderWithIcon";
import * as Styled from "./styles";
import star from "assets/images/star-outlined.svg";
import Button from "core/components/Button";
import SocialLinks from "../SocialLinks";

const AboutIntro = () => {
  return (
    <Styled.AboutIntroContainer>
      <Styled.Star src={star} />

      <HeaderWithIcon
        title="About Me"
        titleStyle={{ textAlign: "left", paddingLeft: 0, paddingBottom: 30 }}
      />

      <Styled.Description>
        I’m 27 and I’m living in Lugano and I hold a{" "}
        <strong>Swiss Work Permit (B)</strong>. I received my bachelor’s in
        Electrical engineering in 2019, from Shahrood University of Technology.
        During my bachelor’s, I used to write code in C++. For the last 4 years,
        I expanded my programming knowledge with web languages and frameworks
        such as HTML, CSS, JS, TypeScript and, React JS and React Native all by
        myself. I also have developed several cross‑platform mobile apps and
        websites.
        <div style={{ marginTop: 15 }} />
        Currently, I am a Front End Developer at the Geomatics group at SUPSI,
        where I work on different projects mainly with <strong>
          {" "}
          React
        </strong>{" "}
        and <strong>Vue JS</strong>. For instance, lately I redesigned and built
        a new website, GESPOS, for managing geomatics surveys collected in
        Canton Ticino. Working with
        <strong> OpenLayer, Ionic, Vue JS, Figma </strong>and many other new
        technologies in a short period of time increased my confidence in
        learning and using new knowledge and technologies faster and more
        efficiently.
      </Styled.Description>

      <Styled.Row>
        <Button title="Hire Me" href="mailto:malih.ghasemian@gmail.com" />

        <Styled.IconRow>
          <Styled.Text>Follow Me</Styled.Text>
          <Styled.Line>_________</Styled.Line>

          <SocialLinks />
        </Styled.IconRow>
      </Styled.Row>
    </Styled.AboutIntroContainer>
  );
};

export default AboutIntro;
