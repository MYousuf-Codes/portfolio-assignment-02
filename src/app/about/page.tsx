// components/About.tsx
import Image from "next/image";
import Skills from "@/components/skills";
import '../../styles/about.css'; // Import the custom CSS

export default function About() {
  return (
    <main>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          {/* The card div */}
          <div className="about-card">
            {/* Image with shadow */}
            <div className="about-image-wrapper">
              <Image
                src="https://static-interactive-resmue.vercel.app/assests/PROFILE.png"
                alt="Profile Picture"
                className="about-image"
                width={192} 
                height={192}
              />
            </div>
            <p className="about-description">
              Hi there! <br />
              I&apos;m a passionate{" "}
              <span className="highlight-text">
                Front-End Developer
              </span>{" "}
              👨‍💻 and{" "}
              <span className="highlight-text">
                Template Designer
              </span>{" "}
              🎨, currently mastering React.js, Next.js, and Tailwind CSS. I
              specialize in building user-friendly websites 🌐 with HTML5, CSS,
              Bootstrap 5, and JavaScript/TypeScript. 💻✨
              <br /> <br />
              I focus on clean, efficient code, and responsive designs that
              enhance user experience. From sleek templates to dynamic components,
              I&apos;m driven by the challenge of turning creative ideas into
              impactful digital experiences and powerful digital solutions. ✨💻
            </p>
            <p className="about-description">
              I also have a keen interest in{" "}
              <span className="highlight-text">UX/UI design</span>,
              striving to enhance user experience through intuitive designs.
              I&apos;m always open to connecting with developers, designers, and
              like-minded professionals who are passionate about innovation and
              building great digital products. 🌟
              <br /> <br />
              Are you looking for a front-end developer to create visually
              stunning websites or interfaces? Let&apos;s collaborate and bring
              your ideas to life! 🚀
            </p>
          </div>
        </div>
      </section>
      <Skills/>
    </main>
  );
}
