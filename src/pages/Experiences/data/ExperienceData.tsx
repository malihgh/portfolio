import CustomHref from "core/components/CustomHref";

export type ExperienceItemType = {
  id: number;
  date: string;
  title: string;
  description: React.JSX.Element;
};

export const ExperienceData: ExperienceItemType[] = [
  {
    id: 0,
    date: "Jul 2024 - Now",
    title: "Full Stack Developer at S'nce group",
    description: (
      <>
        At <strong>S'nce Group</strong>, I work as a{" "}
        <strong>Full Stack Developer</strong> contributing to{" "}
        <strong>KitchenAid’s global e-commerce platforms</strong>. I’m involved
        in maintaining and evolving regional websites across{" "}
        <strong>Europe</strong> and <strong>the US</strong>, building responsive
        interfaces with <strong>Next.js</strong> and{" "}
        <strong>Tailwind CSS</strong> in close collaboration with UX designers.
        I also work with <strong>Contentful</strong> and{" "}
        <strong>Algolia</strong> to power content management and advanced
        product search, while contributing to backend services using{" "}
        <strong>Node.js</strong>, including APIs built with{" "}
        <strong>Express</strong> and <strong>NestJS</strong>. Working within a
        large cross-functional team, we focus on delivering scalable, reliable
        experiences for <strong>KitchenAid</strong> users worldwide.
      </>
    )
  },
  {
    id: 1,
    date: "Dec 2021 - Jun 2024",
    title: "Front End Developer at SUPSI",
    description: (
      <>
        I was part of the Geomatic group at SUPSI, where I contributed as a
        Front End Developer crafting modern web applications with{" "}
        <strong>React JS</strong> and <strong>Vue JS</strong>. Our stack
        included <strong>Redux</strong> and <strong>Context</strong> for
        efficient state management, along with{" "}
        <strong>Styled Components</strong> and <strong>Material UI</strong> to
        build sleek, responsive user interfaces. I played a key role in
        developing and maintaining impactful projects like{" "}
        <strong>Swissforages</strong> (a platform designed for acquiring
        borehole data, developed in collaboration with{" "}
        <strong>Swisstopo</strong>).
      </>
    )
  },
  {
    id: 2,
    date: "Feb - May 2021",
    title: "Front End and React Native Developer",
    description: (
      <>
        As an intern in
        <CustomHref
          to="https://www.baker-street.ch/"
          style={{ color: "inherit", textDecoration: "none" }}>
          <strong> Baker Street</strong>
        </CustomHref>
        , I was in charge of maintaining and developing{" "}
        <CustomHref
          to="https://play.google.com/store/apps/details?id=com.gofleet.driver&hl=en&gl=Us"
          style={{ color: "inherit", textDecoration: "none" }}>
          <strong>go! Fleet</strong>
        </CustomHref>{" "}
        Driver app and{" "}
        <CustomHref
          to="https://go-fleet.ch/en/product/go-cockpit/"
          style={{ color: "inherit", textDecoration: "none" }}>
          <strong>Cockpit</strong>
        </CustomHref>{" "}
        website. My responsibilities included adding new features and screens.
        We used <strong>Jest</strong> for testing our library and custom hooks,
        and implemented great cache system with <strong>React Query</strong>.
      </>
    )
  },
  {
    id: 3,
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
    )
  }
];
