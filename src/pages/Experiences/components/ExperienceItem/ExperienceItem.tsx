import * as Styled from "./styles";

const ExperienceItem = () => {
  const experience = {
    id: 1,
    date: "Dec 2021 - now",
    title: "Front-End Developer at Geomatic group",
    description: (
      <>
        I am working at Geomatic group at SUPSI as a front-end developer,
        working with a variety of technologies such as <strong>React JS</strong>{" "}
        and Vue JS. We are using Redux and Context for state management, and
        Styled Component and Material UI as styling library for creating best UI
        for our customer. I develop and maintain a few projects, such as
        Swissforages open source project, that’s a platform to acquire borehole
        data by Swisstopo.
      </>
    ),
  };

  return (
    <Styled.Container>
      <Styled.Duration>{experience.date}</Styled.Duration>
      <Styled.SectionLine>
        <Styled.Circle isPrimary={experience.id % 2 === 0} />
        <Styled.Line />
      </Styled.SectionLine>
      <Styled.DescriptionContainer>
        <Styled.Title>{experience.title}</Styled.Title>
        <Styled.Description>{experience.description}</Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ExperienceItem;
