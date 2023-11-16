export type ProjectsItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  isApp: boolean;
};

export const projectsData: ProjectsItemType[] = [
  {
    id: 0,
    title: "Gespos",
    description: "Managing geomatics surveys collected in Canton Ticino",
    image: "src/assets/images/projects/gespos.jpeg",
    isApp: false,
  },
  {
    id: 1,
    title: "Swissforages",
    description: "Platform to acquire borehole data by Swisstopo",
    image: "src/assets/images/projects/swissforages.png",
    isApp: false,
  },
  {
    id: 2,
    title: "Mix Or Match game",
    description: "Memory game with a twist",
    image: "src/assets/images/projects/mix-or-match.png",
    isApp: false,
  },
  {
    id: 3,
    title: "Connected Home Care",
    description: "For the elderly and their caregivers",
    image: "src/assets/images/projects/connect-home-care.png",
    isApp: true,
  },
  {
    id: 4,
    title: "Cockpit Website",
    description: "For connecting passengers and drivers of the go! fleet",
    image: "src/assets/images/projects/cockpit.jpg",
    isApp: false,
  },
  {
    id: 5,
    title: "go! Fleet Driver App",
    description: "For the drivers of the go! fleet",
    image: "src/assets/images/projects/go-fleet.png",
    isApp: true,
  },
  {
    id: 6,
    title: "AutoTik",
    description: "For keep track of your car maintenance",
    image: "src/assets/images/projects/autotik.png",
    isApp: true,
  },
  {
    id: 7,
    title: "Limo Restaurant",
    description: "For ordering food online",
    image: "src/assets/images/projects/limo-restaurant.png",
    isApp: false,
  },
  {
    id: 8,
    title: "Asena",
    description: "Time Tracking App",
    image: "src/assets/images/projects/asena.png",
    isApp: true,
  },
];
