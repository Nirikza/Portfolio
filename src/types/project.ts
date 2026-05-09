export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: "Featured" | "In Progress" | "Personal" | "Work";
}
