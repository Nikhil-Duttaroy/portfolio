import {
  personalProjectDetails,
  professionalProjectDetails,
} from "./projectsDetails";

const projectDetails = [
  ...personalProjectDetails,
  ...professionalProjectDetails,
];

const projectList = projectDetails
  .map(
    (project, index) => `${index + 1}. ${project.name}: ${project.description}`
  )
  .join("\n\n");

export const AVAILABLE_COMMANDS = {
  help: "Available commands:\n  - about: Show information about me\n  - skills: List technical skills\n  - projects: Show portfolio projects\n  - contact: Display contact information\n  - clear: Clear terminal\n  - help: Show this help message\n - secret : Root users only..",
  about:
    "Hi! I'm Nikhil Duttaroy, a front end developer based in India currently working at Reliance Jio.",
  skills:
    "- HTML\n  - CSS\n  - JavaScript\n  - TypeScript\n  - React JS\n  - Next JS\n  - Solid JS\n  - React Native\n  - Tailwind CSS\n  - Redux\n  - Figma\n  - Docker",
  projects: `Recent Projects:\n${projectList}`,
  contact:
    "Contact Information:\n  - Schedule Call\n  - Email: nsdr2000@gmail.com\n\nSocial Links:\n  - Github\n  - LinkedIn\n  - Instagram\n  - Email",
  secret: "Oh no, You don't have root access...",
};
