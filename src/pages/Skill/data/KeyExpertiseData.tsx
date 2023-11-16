import React from "react";

type KeyExpertiseDataType = {
  id: number;
  title: React.JSX.Element;
};

export const KeyExpertiseData: KeyExpertiseDataType[] = [
  {
    id: 0,
    title: (
      <>
        Experienced with <strong>React</strong>, <strong>TypeScript</strong> and{" "}
        <strong>HTML5, CSS3, JS</strong>
      </>
    ),
  },
  {
    id: 1,
    title: (
      <>
        Skilled with <strong>UI/UX</strong> processes and <strong>Agile</strong>
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        Familiar with <strong>Design Patterns</strong> and{" "}
        <strong>Clean Code</strong>
      </>
    ),
  },
  {
    id: 3,
    title: <>Good at teamwork, problem solving and math</>,
  },
  {
    id: 4,
    title: (
      <>
        Skilled in <strong>Object Oriented</strong> design
      </>
    ),
  },
];
