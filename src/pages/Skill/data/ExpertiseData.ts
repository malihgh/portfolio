type Expertise = {
  id: number;
  name: string;
  items: string[];
};

export const ExpertiseData: Expertise[] = [
  {
    id: 0,
    name: "languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"],
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
      "Algolia",
    ],
  },
  {
    id: 3,
    name: "general",
    items: ["Git", "Scrum", "REST API", "Figma", "Sketch", "Docker"],
  },
];
