import HeaderWithIcon from "core/components/HeaderWithIcon/HeaderWithIcon";
import * as Styled from "./styles";
import star from "assets/images/star-outlined.svg";
import Button from "core/components/Button";
import SocialLinks from "../SocialLinks";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age--;
  }
  return age;
};

const AboutIntro = () => {
  const birthDate = new Date(1996, 7, 3);
  const myAge = calculateAge(birthDate);
  const experience = new Date().getFullYear() - 2020;
  return (
    <Styled.AboutIntroContainer>
      <Styled.Star src={star} />

      <HeaderWithIcon
        title="About Me"
        titleStyle={{ textAlign: "left", paddingLeft: 0, paddingBottom: 30 }}
      />

      <Styled.Description>
        I’m {myAge} and I’m living in Lugano, Switzerland, and I hold a{" "}
        <strong>Swiss C Permit</strong>. I received my bachelor’s degree in
        <strong> Electrical Engineering</strong> in 2019 from Shahrood
        University of Technology. During my studies, I started programming with{" "}
        <strong>C++</strong>, which sparked my interest in software development.
        <div style={{ marginTop: 15 }} />
        Over the last {experience} years, I’ve focused on web development,
        expanding my skills in
        <strong>
          {" "}
          HTML, CSS, JavaScript, TypeScript, React, React Native
        </strong>{" "}
        and modern frameworks. I’ve built several cross-platform mobile apps and
        web applications while continuously improving my frontend architecture
        and development practices.
        <div style={{ marginTop: 15 }} />
        I'm currently working as a{" "}
        <strong>Full Stack Developer at S’nce Group</strong>, contributing to{" "}
        <strong>KitchenAid’s global e-commerce platforms</strong>. I help
        develop and maintain regional sites across Europe and the US using
        <strong> Next.js, Tailwind CSS, Contentful</strong>, and{" "}
        <strong>Algolia</strong>. I also contribute to backend integrations
        using <strong>Node.js</strong>, building APIs with{" "}
        <strong>Express</strong> and collaborating on
        <strong> NestJS</strong>-based services.
        <div style={{ marginTop: 15 }} />
        Previously at <strong>SUPSI’s Geomatics group</strong>, I redesigned and
        developed <strong>GESPOS</strong>, a platform used to manage geomatics
        surveys in Canton Ticino. Working with tools like{" "}
        <strong>Vue.js, OpenLayers, Ionic</strong>, and <strong>Figma</strong>{" "}
        strengthened my ability to quickly learn new technologies and deliver
        modern, user-friendly interfaces.
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
