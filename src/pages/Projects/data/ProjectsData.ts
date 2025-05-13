export type ProjectsItemType = {
  id: number;
  title: string;
  description: string;
  // image: string;//fix it later
  url?: string;
  isApp?: boolean;
};

export const projectsData: ProjectsItemType[] = [
  {
    id: 0,
    title: "Kitchenaid website",
    description:
      "A global e-commerce website for KitchenAid, an American appliance brand owned by Whirlpool",
    url: "https://www.kitchenaid.ie/",
  },
  {
    id: 1,
    title: "Pokèmon",
    description: "Simulation of pokemon website with the help of pokeapi.co",
    url: "https://mali-pokemon.vercel.app/",
  },
  {
    id: 2,
    title: "Practica-mente website",
    description: "A bilingual website for a professional coach using Next.js",
    url: "https://practica-mente.vercel.app/en",
  },
  {
    id: 3,
    title: "Gespos",
    description: "Managing geomatics surveys collected in Canton Ticino",
    url: "https://www.ist.supsi.ch/portale-gespos-ist",
  },
  {
    id: 4,
    title: "Swissforages",
    description: "Platform to acquire borehole data by Swisstopo",
  },
  {
    id: 5,
    title: "Mix Or Match game",
    description: "Memory game with a twist",
    url: "https://mali-mix-or-match.netlify.app/",
  },
  {
    id: 6,
    title: "Connected Home Care",
    description: "For the elderly and their caregivers",
    isApp: true,
    url: "https://apps.apple.com/us/app/connected-home-care/id1122799341",
  },
  {
    id: 7,
    title: "Cockpit Website",
    description: "For connecting passengers and drivers of the go! fleet",
    url: "https://go-fleet.ch/de/",
  },
  {
    id: 8,
    title: "go! Fleet Driver App",
    description: "For the drivers of the go! fleet",
    url: "https://go-fleet.ch/de/",
    isApp: true,
  },
  {
    id: 9,
    title: "AutoTik",
    description: "For keep track of your car maintenance",
    url: "https://www.youtube.com/watch?v=U1StgHCsvyY",
    isApp: true,
  },
  {
    id: 10,
    title: "Limo Restaurant",
    description: "For ordering food online",
    url: "https://www.youtube.com/watch?v=8mu5ihADOlE",
  },
  {
    id: 11,
    title: "Asena",
    description: "Time Tracking App",
    url: "https://www.youtube.com/shorts/g4jDDvGodtY",
    isApp: true,
  },
];
