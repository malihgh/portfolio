import asena from "assets/images/projects/asena.png";
import autoTik from "assets/images/projects/autotik.png";
import cockpit from "assets/images/projects/cockpit.jpg";
import connectedHomeCare from "assets/images/projects/connect-home-care.png";
import gespos from "assets/images/projects/gespos.jpeg";
import goFleet from "assets/images/projects/go-fleet.png";
import kitchenaid from "assets/images/projects/kitchenaid.png";
import limoRestaurant from "assets/images/projects/limo-restaurant.png";
import mixOrMatch from "assets/images/projects/mix-or-match.png";
import pokemon from "assets/images/projects/pokemon.png";
import practicaMente from "assets/images/projects/practica-mente.png";
import swissforages from "assets/images/projects/swissforages.png";
import maze from "assets/images/projects/maze.png";

export type ProjectsItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
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
    image: kitchenaid,
  },
  {
    id: 1,
    title: "Pokèmon",
    description: "Simulation of pokemon website with the help of pokeapi.co",
    url: "https://mali-pokemon.vercel.app/",
    image: pokemon,
  },
  {
    id: 2,
    title: "Practica-mente website",
    description: "A bilingual website for a professional coach using Next.js",
    url: "https://practica-mente.vercel.app/en",
    image: practicaMente,
  },
  {
    id: 3,
    title: "Maze game",
    description: "A puzzle of paths with no easy way out",
    url: "https://mali-maze.netlify.app/",
    image: maze,
  },
  {
    id: 4,
    title: "Gespos",
    description: "Managing geomatics surveys collected in Canton Ticino",
    url: "https://www.ist.supsi.ch/portale-gespos-ist",
    image: gespos,
  },
  {
    id: 5,
    title: "Swissforages",
    description: "Platform to acquire borehole data by Swisstopo",
    image: swissforages,
  },
  {
    id: 6,
    title: "Mix Or Match game",
    description: "Memory game with a twist",
    url: "https://mali-mix-or-match.netlify.app/",
    image: mixOrMatch,
  },
  {
    id: 7,
    title: "Connected Home Care",
    description: "For the elderly and their caregivers",
    isApp: true,
    url: "https://apps.apple.com/us/app/connected-home-care/id1122799341",
    image: connectedHomeCare,
  },
  {
    id: 8,
    title: "Cockpit Website",
    description: "For connecting passengers and drivers of the go! fleet",
    url: "https://go-fleet.ch/de/",
    image: cockpit,
  },
  {
    id: 9,
    title: "go! Fleet Driver App",
    description: "For the drivers of the go! fleet",
    url: "https://go-fleet.ch/de/",
    isApp: true,
    image: goFleet,
  },
  {
    id: 10,
    title: "AutoTik",
    description: "For keep track of your car maintenance",
    url: "https://www.youtube.com/watch?v=U1StgHCsvyY",
    isApp: true,
    image: autoTik,
  },
  {
    id: 11,
    title: "Limo Restaurant",
    description: "For ordering food online",
    url: "https://www.youtube.com/watch?v=8mu5ihADOlE",
    image: limoRestaurant,
  },
  {
    id: 12,
    title: "Asena",
    description: "Time Tracking App",
    url: "https://www.youtube.com/shorts/g4jDDvGodtY",
    isApp: true,
    image: asena,
  },
];
