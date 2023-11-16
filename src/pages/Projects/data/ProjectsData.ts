export type ProjectsItemType = {
  id: number;
  title: string;
  description: string;
  // image: string;//fix it later
  isApp: boolean;
};

export const projectsData: ProjectsItemType[] = [
  {
    id: 0,
    title: "Gespos",
    description: "Managing geomatics surveys collected in Canton Ticino",
    isApp: false,
  },
  {
    id: 1,
    title: "Swissforages",
    description: "Platform to acquire borehole data by Swisstopo",
    isApp: false,
  },
  {
    id: 2,
    title: "Mix Or Match game",
    description: "Memory game with a twist",
    isApp: false,
  },
  {
    id: 3,
    title: "Connected Home Care",
    description: "For the elderly and their caregivers",
    isApp: true,
  },
  {
    id: 4,
    title: "Cockpit Website",
    description: "For connecting passengers and drivers of the go! fleet",
    isApp: false,
  },
  {
    id: 5,
    title: "go! Fleet Driver App",
    description: "For the drivers of the go! fleet",
    isApp: true,
  },
  {
    id: 6,
    title: "AutoTik",
    description: "For keep track of your car maintenance",
    isApp: true,
  },
  {
    id: 7,
    title: "Limo Restaurant",
    description: "For ordering food online",
    isApp: false,
  },
  {
    id: 8,
    title: "Asena",
    description: "Time Tracking App",
    isApp: true,
  },
];
