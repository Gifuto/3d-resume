import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    vitejs,
    fixIQ,
    wdhConsulting,
    dalle,
    animeSearcher,
    tripguide,
    travelApp,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "vitejs",
      icon: vitejs,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "WDH consulting",
      icon: wdhConsulting,
      iconBg: "#50ad20",
      date: "Apr 2023 - Present",
      points: [
        "Developed and maintained responsive web applications using Next.js.", 
        "Implemented theme changes with SCSS.",
        "Introduced tailwind CSS for faster design implementation.",
        "Participated in code reviews to maintain code quality, optimized performance, and shared best practices.",
        "Conducted code reviews, provided constructive feedback to other developers to ensure code quality and best practices.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "fixIQ",
      icon: fixIQ,
      iconBg: "#ffff",
      date: "Feb 2022 - Apr 2023",
      points: [
        "Developed and maintained web applications on React + TypeScript.",
        "Implemented Redux Toolkit instead of vanilla Redux.",
        "Used styled-components to create components.",
        "Interacted with a team of developers and designers to create high-quality software solutions.",
        "Integrated Redux, Redux Saga, Axios, as well as third-party libraries to extend the functionality of large web applications for a better user experience.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Dall-e",
      description:
        "A web platform that allows users to search, generate and post high-quality images based on English text descriptions using OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/Gifuto/dall-e",
    },
    {
      name: "Anime Searcher",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: animeSearcher,
      source_code_link: "https://gifuto.github.io/anime-searcher/",
    },
    {
      name: "Travel App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: travelApp,
      source_code_link: "https://github.com/Gifuto/travel-app",
    },
  ];
  
  export { services, technologies, experiences, projects };