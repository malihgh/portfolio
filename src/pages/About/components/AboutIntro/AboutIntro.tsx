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
        I’m 28 and I’m living in Lugano and I hold a{" "}
        <strong>Swiss Work Permit (B)</strong>. I received my bachelor’s in
        Electrical engineering in 2019, from Shahrood University of Technology.
        During my bachelor’s, I used to write code in C++. For the last 5 years,
        I expanded my programming knowledge with web languages and frameworks
        such as HTML, CSS, JS, TypeScript and, React JS and React Native all by
        myself. I also have developed several cross‑platform mobile apps and
        websites.
        <div style={{ marginTop: 15 }} />
        I'm a <strong>Front End Developer</strong> passionate about building
        clean, responsive web experiences. At <strong>S’nce Group</strong>, I
        help enhance <strong>KitchenAid’s </strong> digital presence across
        Europe and the US using <strong>Next.js, Contentful, Algolia,</strong>{" "}
        and<strong> Tailwind CSS</strong>.
        <div style={{ marginTop: 15 }} />
        Previously at <strong>SUPSI’s Geomatics group</strong>, I redesigned and
        built <strong>GESPOS</strong>, a platform for managing geomatics surveys
        in Canton Ticino. Working with tools like <strong>Vue JS</strong>,{" "}
        <strong> OpenLayer, Ionic, Figma, </strong> sharpened my ability to
        learn fast and deliver modern, user-friendly interfaces.
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
