"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Projects from '@/components/projects';
import Services from '@/components/services';
import '../../styles/home.css'; // Import the custom CSS

const texts = [
    "A passionate Front-End Developer",
    "A passionate UX/UI Designer",
    " and Website Template Designer" // Escape the ampersand character
];

export default function Home() {
    const [displayText, setDisplayText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // Start fade out
            setTimeout(() => {
                setDisplayText(texts[index]);
                setFade(false); // Start fade in
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 500); // seconds of fade out before changing text
        }, 1500); // Change after every 3 seconds

        return () => clearInterval(interval);
    }, [index]);

    return (
        <main>
            <section id="home" className="home-section">
                <div className="home-container">
                    <h1 className="home-title">I&apos;m Muhammad Yousuf,</h1> {/* Use &apos; for single quote */}
                    <p className={`home-subtitle ${fade ? 'fade-out' : 'fade-in'}`}>
                        {displayText}
                    </p>
                    <div className="button-container"> {/* Add margin for spacing */}
                        <button className="resume-button" type='submit'>
                            <Link href="https://static-interactive-resmue.vercel.app" target='blank'>My Resume</Link>
                        </button>
                    </div>
                </div>
            </section>

            <Services />
            <Projects />
        </main>
    );
}
