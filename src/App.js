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
    let scrollTimeout;

    const handleWheel = (e) => {
      // Prevent scrolling while animation is running
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Ignore very small wheel movements
      if (Math.abs(e.deltaY) < 10) {
        return;
      }

      const currentScroll = window.scrollY;

      let currentIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;

        if (
          currentScroll >=
          sectionTop - window.innerHeight / 2
        ) {
          currentIndex = index;
        }
      });

      // Scroll DOWN
      if (
        e.deltaY > 0 &&
        currentIndex < sections.length - 1
      ) {
        isScrolling = true;

        sections[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 900);
      }

      // Scroll UP
      if (
        e.deltaY < 0 &&
        currentIndex > 0
      ) {
        isScrolling = true;

        sections[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 900);
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
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