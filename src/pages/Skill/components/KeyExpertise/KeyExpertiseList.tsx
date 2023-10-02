import React from "react";

type KeyExpertiseListType = {
  id: number;
  title: React.JSX.Element;
};

export const KeyExpertiseList: KeyExpertiseListType[] = [
  {
    id: 0,
    title: (
      <>
        <strong>React</strong>, <strong>TypeScript</strong> and{" "}
        <strong>HTML5, CSS3, JS</strong>
      </>
    ),
  },
  {
    id: 1,
    title: (
      <>
        <strong>Object Oriented</strong> design
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <strong>UI/UX</strong> processes and <strong>Agile</strong>
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        Familiar with <strong>Design Patterns</strong> and{" "}
        <strong>Clean Code</strong>
      </>
    ),
  },
  {
    id: 4,
    title: <>Good at teamwork, problem solving and math</>,
  },
];
