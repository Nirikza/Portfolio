import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Steam Profiles",
    description:
      "A personal web app to explore Steam profiles, owned games and progress statistics.",
    image: "/images/projects/steam-profiles.png",
    technologies: ["Prisma", "TypeScript", "Tailwind"],
    github: "https://github.com/Nirikza/steamProfiles",
    demo: "",
    status: "Featured",
  },
  {
    title: "Portfolio",
    description:
      "A minimal and modern personal portfolio built with Vue, Vite and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    technologies: ["Vue", "TypeScript", "Tailwind"],
    github: "",
    demo: "",
    status: "Personal",
  },
];
