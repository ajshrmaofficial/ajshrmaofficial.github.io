export const profile = {
  name: "Ajay Sharma",
  title: "Software Engineer",
  intro:
    "I'm a software engineer who enjoys building things, from mobile apps and backends to small command-line tools. Languages and frameworks are simply the tools I pick up as a problem demands, and I care about making what I build perform well. Right now I'm working on an OTT streaming application at To The New, and learning Go to rewrite the backend of my chat app.",
  email: "ajshrmaofficial@gmail.com",
  resume: "/files/Ajay_Sharma_Resume.pdf",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  stack: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "To The New",
    role: "Software Engineer",
    period: "June 2025 – Present",
    stack:
      "React Native, TypeScript, React Native Video, ExoPlayer, AVPlayer, React Navigation, Redux, Firebase, Conviva",
    points: [
      "Built and maintained the video player and ads features for an OTT streaming application, passing props across the JS and native layers.",
      "Improved video start time and playback stability, and validated streaming quality on both iOS and Android through Conviva reports.",
      "Optimized a large multi-channel, multi-day EPG (TV guide) screen using windowing, pagination, API tuning and map lookups.",
      "Built app-wide “No Internet” handling, including inside the video player.",
    ],
  },
  {
    company: "Delywizz Software Solution",
    role: "Full Stack Developer Intern",
    period: "Aug – Nov 2024",
    stack: "Expo, React Native, TypeScript, Supabase, TanStack Query, PostgreSQL",
    points: [
      "Built community feed and discussion features in React Native on a Supabase backend, using TanStack Query for data fetching.",
    ],
  },
  {
    company: "RedPositive Pvt. Ltd.",
    role: "Mobile App Developer Intern",
    period: "Aug 2023 – Feb 2024",
    stack: "React Native, TypeScript, TailwindCSS, AWS",
    points: [
      "Reworked the app structure for faster load times.",
      "Built custom authentication using AWS Amplify.",
    ],
  },
];

export const education = {
  school: "Echelon Institute of Technology",
  degree: "B.Tech in Computer Science & Engineering",
  period: "2021 – 2025",
  extra:
    "Founded the Open Source Development Club and mentored fellow students through workshops.",
};

export type Project = {
  name: string;
  summary: string;
  stack: string;
  points: string[];
  repo: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "HackerBuzz",
    summary: "A Hacker News mobile client, inspired by the Harmonic HN client.",
    stack: "Expo, React Native, TypeScript, TanStack Query",
    points: [
      "Browse stories, bookmark them, and tune settings, with a short onboarding flow.",
      "TanStack Query caches and refreshes the story feeds.",
      "An in-app browser opens linked articles without leaving the app.",
    ],
    repo: "https://github.com/ajshrmaofficial/HackerBuzz",
  },
  {
    name: "Guftgu",
    summary: "An offline-first chat app.",
    stack: "React Native, Node.js, MongoDB, WatermelonDB, GitHub Actions",
    points: [
      "A monorepo holding the React Native app and a Node.js backend. The old web client is deprecated.",
      "Offline-first using WatermelonDB, with sync between the app and the backend.",
      "Beta-tested with real users. Builds and deployment run through GitHub Actions.",
      "Next up: rewriting the backend from Node.js in Go, which I'm currently learning.",
    ],
    repo: "https://github.com/ajshrmaofficial/Guftgu",
    note: "Backend offline",
  },
  {
    name: "PostBuddy",
    summary: "A Reddit-style app built for a freelance client.",
    stack: "Expo, React Native, TanStack Query, Supabase, PostgreSQL",
    points: [
      "No custom backend: Supabase Auth with row-level security policies on every table.",
      "Posts, comments, likes and dislikes, user profiles and user roles. Publishing is admin-only, for a curated feed.",
      "Database triggers assign a default role and profile to every new user.",
    ],
    repo: "https://github.com/ajshrmaofficial/PostBuddy",
    note: "Backend offline",
  },
];

export const otherWork = [
  {
    name: "Spring Cart",
    text: "E-commerce CRUD with Spring Boot, JWT and React. A learning project.",
    href: "https://github.com/ajshrmaofficial/Spring-Cart",
  },
  {
    name: "crepo",
    text: "A Bash CLI that creates a GitHub repo from the current git folder, via the GitHub REST API.",
    href: "https://github.com/ajshrmaofficial/crepo",
  },
  {
    name: "The Dear Diary",
    text: "A C and GTK desktop app for managing diary entries for multiple users.",
    href: "https://github.com/ajshrmaofficial/The-Dear-Diary",
  },
  {
    name: "Code Pencil",
    text: "A simple CodePen-style web editor in TypeScript.",
    href: "https://github.com/ajshrmaofficial/code-pencil",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Java", "C", "Go (learning)"] },
  { group: "Mobile", items: ["React Native", "Expo", "React Navigation", "Redux", "TanStack Query"] },
  { group: "Web", items: ["React.js", "Next.js", "TailwindCSS", "HTML/CSS"] },
  {
    group: "Backend & Databases",
    items: ["Node.js", "Express.js", "Spring Boot", "Socket.io", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    group: "Tools & Deployment",
    items: ["Git", "Docker", "Linux", "AWS Amplify", "Vite", "Vercel", "DigitalOcean", "Heroku"],
  },
  {
    group: "Domains",
    items: ["Video Playback", "Streaming Quality", "List Performance", "Offline-first Sync", "Native Bridging"],
  },
];

export const recognition = [
  { title: "Core Value Award (Ownership)", detail: "To The New · Townhall Q1FY27", date: "July 2026" },
  {
    title: "Spot Award",
    detail: "To The New · Ownership of UI/UX and performance optimization",
    date: "April 2026",
  },
  {
    title: "Spot Award",
    detail: "To The New · Performance optimization and UI/UX work",
    date: "December 2025",
  },
];

export const contact = [
  { label: "Email", text: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", text: "linkedin.com/in/ajshrma", href: "https://linkedin.com/in/ajshrma" },
  { label: "GitHub", text: "github.com/ajshrmaofficial", href: "https://github.com/ajshrmaofficial" },
  { label: "X", text: "@ajayshrma_", href: "https://x.com/ajayshrma_" },
];
