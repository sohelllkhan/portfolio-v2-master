import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/sbh.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import humanforceLogo from "@/public/upwork-logo.png";
import uqLogo from "@/public/bou-logo.png";
import youpayLogo from "@/public/codeforceslodo.png";
import m3Logo from "@/public/githublogo.png";
import expense from "@/public/expense.png";
import shoe from "@/public/shoe.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: " Freelance Web Developer",
    location: "Upwork, Fiverr",
    description:
      "Offering full-stack development services with a focus on React.js, Node.js, MongoDB, and Tailwind CSS.Set up and optimized project listings and proposals on Upwork and Fiverr to target real client needs.Built multiple demo projects and landing pages to showcase skills and improve hands-on experience.Continuously learning how to meet client expectations and deliver production-ready systems.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
    logo: humanforceLogo
  },
  {
    title: "Full-Stack Developer",
    location: "Personal & Academic Projects",
    description: 
      "Developed Smart Blood Hub, a full-stack blood bank management system with real-time donor tracking, built using MERN stack.Designed REST APIs, authentication systems, and responsive UIs focused on user experience and scalability.Hosted projects on GitHub and deployed using Vercel and Render.Learned project architecture, Git version control, and basic CI/CD workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - Present",
    logo: uqLogo
  },
  {
    title: "Competitive Programmer",
    location: "Codeforces & LeetCode",
    description:
      "Solved over 1000 problems across various topics including binary search, graphs, and dynamic programming. Participated in over 200 contests, currently rated 1200+ on Codeforces. Built strong analytical and debugging skills through consistent problem-solving.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - Ongoing",
    logo: youpayLogo
  },
  {
    title: "Open Source Contributor",
    location: "Github",
    description:
      "Contributed to small open source issues (fixing bugs, improving documentation, etc.). Created and maintained personal repositories demonstrating clean code, component reuse, and responsiveness. Engaged with developer communities and followed best practices in code structure and Git workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - February 2022",
    logo: m3Logo
  },
] as const;

export const projectsData = [
  {
    title: "Smart Blood Hub",
    description:
      "Smart Blood Hub is a modern web-based blood bank system designed to connect blood donors, recipients, and hospitals in a fast and reliable way. Its main goal is to make the blood donation process easier, safer, and more efficient, especially during emergencies. Users can register as donors, search for blood based on group or location. The system can also track nearby donors using GPS.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
     
    ],
    imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/sohelllkhan/my-project",
  },
  {
    title: "Expense Tracker + Budget Planner",
    description:
      "A simple and responsive web app built with React.js and Tailwind CSS to help users track daily expenses, manage budgets, and view spending summaries with a clean dashboard UI",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
     
    ],
    imageUrl: expense,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/sohelllkhan/expense-tracker",
  },
  {
    title: "ShoeVerse – Modern Shoe Store Websiter",
    description:
      "ShoeVerse is a full-stack web application for a modern shoe business. The frontend is built with React.js and Tailwind CSS, providing a clean, stylish, and fully responsive user interface. It dynamically loads products from a PHP + MySQL backend, allowing users to browse a curated collection of premium shoes.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
     
    ],
    imageUrl: shoe,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/sohelllkhan/business-websiter",
  },
  
  // {
  //   title: "Company Asset Trading",
  //   description:
  //     "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
  //   tags: ["Java", "MariaDB", "Swing"],
  //   icons: ["logos:java", "logos:mariadb-icon"],
  //   imageUrl: assetTradingImg,
  //   githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  // },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  // {
  //   title: "Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
    // urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Relationship Path Finder",
  //   description:
  //     "Python program that computes the shortest paths in a family tree using a breadth-first search algorithm. Problem was to calculate the shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

// lib/data.ts
export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "PHP", icon: "logos:php" },
      { name: "C#", icon: "logos:c-sharp" },
      { name: "Python", icon: "logos:python" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "SQL" },
    //  { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
    //  { name: "DynamoDB", icon: "logos:aws-dynamodb" },
    //  { name: "REST APIs", icon: "material-symbols:api-outline" },
    //  { name: "GraphQL", icon: "logos:graphql" },
    //  { name: "Elasticsearch", icon: "logos:elasticsearch" },
    //  { name: "Logstash", icon: "logos:logstash" },
    ],
  }, 
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
    //  { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    //  { name: "Webpack", icon: "logos:webpack" },
    //  { name: "Single Page Applications" },
    //  { name: "Responsive Design" }
    ],
  }, 
  {
    category: "DevOps",
    skills: [
    //  { name: "AWS", icon: "logos:aws" },
    //  { name: "Docker", icon: "logos:docker-icon" },
    //  { name: "Kubernetes", icon: "logos:kubernetes" },
    //  { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
    //  { name: "Linux", icon: "logos:linux-tux" },
    //  { name: "CI/CD" },
    //  { name: "Infrastructure as Code" },
    ],
  },
  {
    category: "Practices",
    skills: [
    //  { name: "Database design" },
    //  { name: "Event‑driven architecture" },
    //  { name: "Agile" },
    //  { name: "Scrum" },
      { name: "Problem Solving"},
      { name: "Object Oriented Programming (OOP)" },
    //  { name: "Test Driven Development (TDD)" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
    //  { name: "Sentry", icon: "logos:sentry-icon" },
    //  { name: "New Relic", icon: "logos:new-relic-icon" },
    //  { name: "Grafana", icon: "logos:grafana" },
    ],
  },
];

