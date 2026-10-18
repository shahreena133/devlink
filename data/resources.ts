type Resource = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  docsUrl: string;
  pricing: string;
  installCommand: string;
  relatedTools: string[];
};

const resurces: Resource[] = [
  {
    id: 1,
    title: "Daisy UI",
    description:
      "A library of ready-to-use UI components for Tailwind CSS.",
    category: "UI Component Libraries",
    tags: ["Tailwind", "UI"],
    url: "https://daisyui.com",
docsUrl: "https://daisyui.com/docs/",
pricing: "Free and open source",
installCommand: "npm install daisyui",
relatedTools: ["Tailwind CSS", "Material UI"],
  },

  {
    id: 2,
    title: "Material UI",
    description:
      "A collection of customizable React components following Google Material Design principles.",
    category: "UI Component Libraries",
    tags: ["React", "UI"],
  url: "https://mui.com",
docsUrl: "https://mui.com/material-ui/getting-started/",
pricing: "Free and open source",
installCommand: "npm install @mui/material @emotion/react @emotion/styled",
relatedTools: ["DaisyUI", "Aceternity UI"],
  },

  {
    id: 3,
    title: "Aceternity UI",
    description:
      "A UI component library for building modern websites with interactive effects and animations.",
    category: "UI Component Libraries",
    tags: ["React", "Animations"],
   url: "https://ui.aceternity.com",
docsUrl: "https://ui.aceternity.com/components",
pricing: "Free components; some premium products available",
installCommand: "npm install motion clsx tailwind-merge",
relatedTools: ["DaisyUI", "Material UI"],
  },

  {
    id: 4,
    title: "Firebase",
    description:
      "A collection of tools for adding authentication, data storage, and other features to applications.",
    category: "Backend / APIs",
    tags: ["Backend", "Cloud"],
    url: "https://firebase.google.com",
docsUrl: "https://firebase.google.com/docs",
pricing: "Free tier available; paid usage plans",
installCommand: "npm install firebase",
relatedTools: ["Appwrite", "JSONPlaceholder"],
  },

  {
    id: 5,
    title: "Appwrite",
    description:
      "A backend platform that helps developers build applications with ready-to-use services and APIs.",
    category: "Backend / APIs",
    tags: ["Backend", "Authentication", "Database"],
    url: "https://appwrite.io",
    docsUrl: "https://appwrite.io/docs",
    pricing: "Free tier available; paid usage plans",
    installCommand: "npm install appwrite",
    relatedTools: ["Firebase", "JSONPlaceholder"],
  },

  {
    id: 6,
    title: "JSONPlaceholder",
    description:
      "A testing API that helps developers practice fetching and handling data in applications.",
    category: "Backend / APIs",
    tags: ["REST API", "Testing"],
    url: "https://jsonplaceholder.typicode.com",
docsUrl: "https://jsonplaceholder.typicode.com/guide/",
pricing: "Free",
installCommand: "No installation required — use the API directly",
relatedTools: ["Firebase", "Appwrite"],
  },

  {
    id: 7,
    title: "Lucide",
    description:
      "A collection of lightweight, consistent icons for modern websites and applications.",
    category: "Icons & Assets",
    tags: ["Icons", "Open Source"],
url: "https://lucide.dev",
docsUrl: "https://lucide.dev/guide/",
pricing: "Free and open source",
installCommand: "npm install lucide-react",
relatedTools: ["Iconify", "Google Fonts"],
  },

  {
    id: 8,
    title: "Iconify",
    description:
      "A collection of icons from multiple libraries, making it easy to find icons for your projects.",
    category: "Icons & Assets",
    tags: ["Icons", "Design"],
    url: "https://iconify.design",
    docsUrl: "https://iconify.design/docs/",
    pricing: "Free and open source",
    installCommand: "npm install @iconify/react",
    relatedTools: ["Lucide", "Google Fonts"],
  },

  {
    id: 9,
    title: "GoogleFonts",
    description:
      "A library of open-source fonts for styling text on websites and applications.",
    category: "Icons & Assets",
    tags: ["Fonts", "Typography"],
   url: "https://fonts.google.com",
docsUrl: "https://developers.google.com/fonts/docs",
pricing: "Free and open source fonts",
installCommand: "No installation required — fonts can be added through CSS",
relatedTools: ["Lucide", "Iconify"],
  },

  {
    id: 10,
    title: "Claude",
    description:
      "An AI assistant designed to support tasks such as coding, writing, and data analysis.",
    category: "AI Tools",
    tags: ["AI", "Assistant"],
    url: "https://claude.ai",
docsUrl: "https://docs.anthropic.com/",
pricing: "Free plan available; paid plans available",
installCommand: "No installation required — use Claude in your browser",
relatedTools: ["ChatGPT", "GitHub Copilot"],
  },

  {
    id: 11,
    title: "ChatGPT",
    description:
      "An AI assistant for exploring ideas and understanding code.",
    category: "AI Tools",
    tags: ["AI", "Productivity"],
url: "https://chatgpt.com",
docsUrl: "https://help.openai.com/",
pricing: "Free plan available; paid plans available",
installCommand: "No installation required — use ChatGPT in your browser",
relatedTools: ["Claude", "GitHub Copilot"],
  },

  {
    id: 12,
    title: "GitHub Copilot",
    description:
      "An AI coding assistant that helps developers write code.",
    category: "AI Tools",
    tags: ["AI", "Coding"],
   url: "https://github.com/features/copilot",
docsUrl: "https://docs.github.com/en/copilot",
pricing: "Free plan available; paid plans available",
installCommand: "Install the GitHub Copilot extension in your code editor",
relatedTools: ["ChatGPT", "Claude"],
  },

];

export default resurces;