export type ExperienceItemType = {
  id: number;
  date: string;
  title: string;
  description: React.JSX.Element;
};

export const ExperienceData: ExperienceItemType[] = [
  {
    id: 0,
    date: "Dec 2021 - Now",
    title: "Front End Developer at SUPSI",
    description: (
      <>
        I am working at Geomatic group at SUPSI as a Front End developer,
        working with a variety of technologies such as <strong>React JS</strong>{" "}
        and <strong>Vue JS</strong>. We are using <strong>Redux</strong> and{" "}
        <strong>Context</strong> for state management, and{" "}
        <strong>Styled Component</strong> and <strong>Material UI</strong> as
        the styling library for creating best UI for our customers. I develop
        and maintain several projects, such as <strong>Swissforages</strong>{" "}
        website (a platform to acquire borehole data by{" "}
        <strong>Swisstopo</strong> company).
      </>
    ),
  },
  {
    id: 1,
    date: "Feb - May 2021",
    title: "Front End and React Native Developer",
    description: (
      <>
        As an intern in <strong>Baker Street</strong>, I was in charge of
        maintaining and developing <strong>go! Fleet</strong> Driver app and{" "}
        <strong>Cockpit</strong> website. My responsibilities included adding
        new features and screens. We used <strong>Jest</strong> for testing our
        library and custom hooks, and implemented great cache system with{" "}
        <strong>React Query</strong>.
      </>
    ),
  },
  {
    id: 2,
    date: "Oct 2020 - Jan 2021",
    title: "React Native Developer",
    description: (
      <>
        I was working with a private company to create <strong>AutoTik </strong>{" "}
        app, using <strong>React Native</strong> and <strong>Sketch</strong>{" "}
        from scratch. The app aims to help customers to get motor vehicle
        services and products. The app uses <strong>REST API</strong> for
        fetching data and store it with <strong>Redux</strong> for state
        management.
      </>
    ),
  },
];
