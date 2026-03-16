type Expertise = {
  id: number;
  name: string;
  items: string[];
};

export const ExpertiseData: Expertise[] = [
  {
    id: 0,
    name: "languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "C++", "Python"]
  },
  {
    id: 1,
    name: "libraries",
    items: [
      "React JS",
      "Next JS",
      "React Native",
      "Vue JS",
      "Redux",
      "React Query",
      "Material UI",
      "Styled Components",
      "Emotion",
      "Tailwind CSS",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Node.js",
      "React Hook Form",
      "Zod",
      "Contentful (Headless CMS)",
      "Algolia"
    ]
  },
  {
    id: 2,
    name: "backends",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Sequelize",
      "REST API",
      "GraphQL"
    ]
  },
  {
    id: 3,
    name: "general",
    items: [
      "Git",
      "Scrum",
      "Figma",
      "Sketch",
      "Docker",
      "CI/CD (GitHub Actions)"
    ]
  }
];
