// components/Skills.tsx
import Image from "next/image";
import '../styles/skills.css'; // Import the custom CSS

export default function Skills() {
  const skills = [
    { name: 'HTML5', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png' },
    { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png' },
    { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
    { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' },
    { name: 'Bootstrap', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png' },
    { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Next.js', logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <Image src={skill.logo} alt={`${skill.name} logo`} width={40} height={40} className="skill-logo" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
