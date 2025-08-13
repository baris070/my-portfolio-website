import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const fullText = "Hi, I'm Mehmet Ali 👋";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 8500);
    }
    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto text-center md:text-left">
        {/* Profil Resmi - Sol taraf */}
        <img
          src="/projects/profile.jpg"
          alt="Mehmet Ali"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-lg"
        />

        {/* Yazılar - Sağ taraf */}
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-muted-foreground">
              {displayedText}
              <span className="typing-cursor" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            I'm a junior computer engineer working on web development and artificial intelligence projects focused on solving real-world problems.
            I actively improve myself by learning new technologies, experimenting with practical applications, and building innovative solutions.
          </p>

          <a href="#projects" className="cosmic-button inline-block mt-2">
            See My Projects
          </a>
        </div>
      </div>

      {/* Aşağı ok */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    <style jsx>{`
      .typing-cursor {
        display: inline-block;
        margin-left: 2px;
        width: 1px; /* İnce çizgi */
        height: 1.2em;
        background-color: currentColor;
        animation: blink 1s step-start infinite;
      }

      @keyframes blink {
        0%, 50% {
          opacity: 1;
        }
        50.01%, 100% {
          opacity: 0;
        }
      }
    `}</style>
    </section>
  );
};
