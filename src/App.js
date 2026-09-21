import { useEffect } from "react";

import Hero from "./Sections/Hero.js";
import AboutMe from "./Sections/AboutMe.js";
import Skills from "./Sections/Skills.js";
import Services from "./Sections/Services.js";
import FeaturedProjects from "./Sections/FeaturedProjects.js";
import Experience from "./Sections/Experience.js";
import Education from "./Sections/Education.js";
import Contact from "./Sections/Contact.js";
import Footer from "./Sections/Footer.js";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("main > section");

    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      const currentScroll = window.scrollY;

      let currentIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;

        if (currentScroll >= sectionTop - window.innerHeight / 2) {
          currentIndex = index;
        }
      });

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        isScrolling = true;

        sections[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }

      if (e.deltaY < 0 && currentIndex > 0) {
        isScrolling = true;

        sections[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;