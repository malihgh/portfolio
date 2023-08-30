import HeaderWithIcon from "core/components/HeaderWithIcon/HeaderWithIcon";
import * as Styled from "./styles";
// import pointer from "assets/images/pinter-short-green.png";
// import excited from "assets/images/excited-shape.png";
// import Button from "core/components/Button";

const AboutIntro = () => {
  return (
    <Styled.AboutIntroContainer>
      <HeaderWithIcon title="About Me" />
      <Styled.Description>
        I’m 26 and I’m living in Lugano and I hold a{" "}
        <strong>Swiss Work Permit (B)</strong>. I received my bachelor’s in
        Electrical engineering in 2019, from Shahrood University of Technology.
        During my bachelor’s, I used to write code in C++. For the last 3 years,
        I expanded my programming knowledge with web languages and frameworks
        such as HTML, CSS, JS, TypeScript and, React JS and React Native all by
        myself. I also have developed several cross‑platform mobile apps and
        websites.
        <div style={{ marginTop: 15 }} />
        Currently, I am a Front‑End Developer at the Geomatics group at SUPSI,
        where I work on different projects mainly with <strong>
          React
        </strong>{" "}
        and Vue JS. For instance, lately I built a new website, GESPOS, for
        managing geomatics surveys collected in Canton Ticino. Working with
        OpenLayer, Ionic, Vue JS and many other new technologies in a short
        period of time increased my confidence in learning and using new
        knowledge and technologies faster and more efficiently.
      </Styled.Description>
      {/* <Styled.Shape src={excited} /> */}
      {/* <Button title="Hire Me" style={{ marginTop: 40 }} /> */}
    </Styled.AboutIntroContainer>
  );
};

export default AboutIntro;
