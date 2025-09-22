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
    treedis,
    dalle,
    animeSearcher,
    tripguide,
    travelApp,
    threejs, stickerSmash,
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
      title: "Three.js",
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
          title: "Software Engineer",
          company_name: "Treedis",
          icon: treedis,
          iconBg: "#ffff",
          date: "June 2024 - Present",
          points: [
              "Integrated navigation through 3D virtual tours.",
              "Refactored user registration flows, contributing to a reliable register and login experience.",
              "Created and maintained database migration scripts to support scalable backend changes.",
              "Designed and integrated responsive email templates using Postmark for consistent transactional messaging.",
              "Integrated UserGuiding to deliver personalized onboarding experiences based on user data.",
          ],
      },
    {
      title: "Frontend Developer",
      company_name: "WDH consulting",
      icon: wdhConsulting,
      iconBg: "#50ad20",
      date: "Apr 2023 - June 2024",
      points: [
        "Built interactive 3D features using Three.js, enhancing user engagement through advanced visualization.",
        "Developed dynamic, validated forms to streamline user input and data collection.",
        "Optimized lazy loading of media assets (images & videos) using react-intersection-observer, improving initial page load times.",
        "Developed intuitive drag-and-drop functionality with persistent layout state for customizable UI components.",
        "Enabled support for custom user styles, increasing flexibility and personalization of the application.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "fixIQ",
      icon: fixIQ,
      iconBg: "#ffff",
      date: "Feb 2022 - Apr 2023",
      points: [
        "Reduced API load and improved performance by caching key data in localStorage.",
        "Implemented Redux Toolkit instead of vanilla Redux.",
        "Interacted with a team of developers and designers to create high-quality software solutions.",
        "Collaborated with testers for comprehensive testing and debugging to identify and fix issues for optimal performance.",
        "Participated in the improvement of development processes and workflow.",
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
        "A web application that allows users to search for available anime and view more detailed information about them, such as ratings, studio, description, and trailer.",
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
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: travelApp,
      source_code_link: "https://github.com/Gifuto/travel-app",
    },
  ];
  
  export { services, technologies, experiences, projects };