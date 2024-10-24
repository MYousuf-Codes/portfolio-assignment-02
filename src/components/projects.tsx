// components/Projects.tsx
import Link from 'next/link';
import Image from 'next/image';
import '../styles/projects.css'; // Import the custom CSS

type Project = {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Share Sphere",
    imageUrl: "/SocialApp.png",
    link: "https://next-share-sphere.vercel.app/",
    description: "Landing Page for a Mobile App | Figma Design to responsive Website",
  },
  {
    title: "Dynamic Resume Builder",
    imageUrl: "/Resume.png",
    link: "https://static-interactive-resmue.vercel.app/",
    description: "Build Your Editable and Customizable Resume with just one click",
  },
  {
    title: "Project 3",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/project3",
    description: "Another project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div>
                  <div className="project-image-container">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="project-image"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
