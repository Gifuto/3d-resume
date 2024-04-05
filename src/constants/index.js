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
    devair,
    startup,
    dalle,
    jobit,
    tripguide,
    threejs,
    jobs,
    musk,
    durov
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
      title: "JS Developer",
      company_name: "Startup",
      icon: startup,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2021",
      points: [
        "Planned website development, converting mockups into usable web presence with vanilla JavaScript.",
        "Applied knowledge of JavaScript and Object-Oriented Programming to create successful designs.",
        "Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Validated third-party code to comply with internal standards and technical requirements.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Devair",
      icon: devair,
      iconBg: "#020617",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Employed TypeScript and other technology to make line-code repairs and optimize corporate presence.",
        "Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bogdan does magic as a developer.",
      name: "Pavel Durov",
      designation: "CEO",
      company: "Telegram",
      image: durov,
    },
    {
      testimonial:
        "I have never met a web developer cooler than Bogdan.",
      name: "Elon Musk",
      designation: "CEO",
      company: "Tesla",
      image: musk,
    },
    {
      testimonial:
        "If I were alive I would take him to my team!",
      name: "Steve Jobs",
      designation: "CEO",
      company: "Apple",
      image: jobs,
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
      name: "Job IT",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };