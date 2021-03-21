import { InfoStrings } from "./types";

const strings: InfoStrings = {
  brand: "Mit Vasani",
  homepage: {
    hero: {
      prelude: "Hi, I am",
      name: "Mit Vasani.",
      subtitle:
        "I am an enthusiastic developer. I love React and TypeScript." +
        " Outside dev, at any random point in time and space," +
        " you'd most probably find me watching anime, reading, and/or writing.",
    },
  },
  contact: {
    linkedin: "https://www.linkedin.com/in/mit-vasani-8321a2138/",
    github: "https://github.com/vasanimit9",
  },
  projects: [
    {
      name: "Anime Alchemist: The Mobile App",
      description:
        "A mobile app built in React Native for anime fans by an anime fan, " +
        "initially written in Flutter",
      repo: "https://github.com/vasanimit9/anime-alchemist-app",
      website: "https://expo.io/@vasanimit9/projects/anime-alchemist",
    },
    {
      name: "Anime Alchemist: The PWA",
      description:
        "A PWA built in React and Flask, for anime fans by an anime fan." +
        " It was live at www.animealchemist.xyz during Jan 2020 - Jan 2021.",
      repo: "https://github.com/vasanimit9/www.animealchemist.xyz",
    },
    {
      name: "Terminal Portfolio PWA",
      description: "A portfolio website modeled after the terminal.",
      repo: "https://github.com/vasanimit9/terminal-pwa",
      website: "https://vasanimit9.github.io/terminal-pwa",
    },
    {
      name: "Price Comparison Tool",
      description:
        "A webapp built with Flask and Selenium to " +
        "fetch prices from various ecommerce platforms and compare them.",
      repo: "https://github.com/vasanimit9/",
    },
  ],
  experience: [
    {
      org: "Utilize.app",
      position: "Software Development Intern",
      description: "Primarily worked on implementing features in the frontend.",
      homepage: "https://www.utilize.app/",
      startDate: "Jan 2021",
    },
    {
      org: "DA-IICT",
      position: "Research Intern",
      description:
        "Worked and compiled on data of Lok Sabha elections " +
        "and then studied the data w.r.t. opinion dynamics.",
      homepage: "https://www.daiict.ac.in/",
      startDate: "Jan 2020",
      endDate: "Jun 2020",
    },
    {
      org: "DA-IICT",
      position: "Summer Research Intern",
      description:
        "Studied and simulated cellular automata with rule based models like the Galam Model " +
        "and the Sznajd model",
      homepage: "https://www.daiict.ac.in/",
      startDate: "Jun 2019",
      endDate: "Jul 2019",
    },
    {
      org: "Lyearn",
      position: "Instructional Design Intern",
      homepage: "https://www.lyearn.com",
      startDate: "Jun 2018",
      endDate: "Jul 2018",
    },
  ],
};

export default strings;
