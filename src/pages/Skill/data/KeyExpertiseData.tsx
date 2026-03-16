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
        Building scalable apps with <strong>React</strong>,{" "}
        <strong>Next.js</strong>, and <strong>TypeScript</strong>
      </>
    )
  },
  {
    id: 1,
    title: (
      <>
        Full Stack development with <strong>Node.js</strong>,{" "}
        <strong>Express</strong>, and <strong>NestJS</strong>
      </>
    )
  },
  {
    id: 2,
    title: (
      <>
        Creating responsive UIs using <strong>Tailwind CSS</strong>,{" "}
        <strong>HTML</strong>, <strong>modern CSS</strong>
      </>
    )
  },
  {
    id: 3,
    title: (
      <>
        Integrating <strong>Contentful</strong> and <strong>Algolia</strong> for
        scalable search
      </>
    )
  },
  {
    id: 4,
    title: (
      <>
        Writing maintainable software with <strong>clean code</strong> and{" "}
        <strong>design patterns</strong>
      </>
    )
  },
  {
    id: 5,
    title: (
      <>
        Delivering production systems in <strong>Agile teams</strong> with{" "}
        <strong>testing</strong> and <strong>Storybook</strong>
      </>
    )
  }
];
