import { useState } from "react";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "All",
    "React",
    "JavaScript",
    "Node.js",
    "CSS",
    "API",
  ];

  const projects = [
    {
      title: "Full E-Commerce App",
      description:
        "A modern e-commerce application with product browsing, shopping cart functionality, responsive UI, and a complete frontend shopping experience.",
      technologies: ["React", "JavaScript", "CSS", "API"],
      github: "https://github.com/ahehmokh/Full-Ecommerce-App",
      live: "https://full-ecommerce-app-nu.vercel.app/",
    },

    {
      title: "Task Management App",
      description:
        "A task management application for creating, organizing and managing tasks with categories, priorities and completion status.",
      technologies: ["React", "JavaScript", "API"],
      github: "https://github.com/ahehmokh/Task-Management-App",
      live: "https://taskmanagenetapp.vercel.app/",
    },

    {
      title: "Learning Platform",
      description:
        "A responsive e-learning platform designed to provide users with a structured and interactive learning experience.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      live: "#",
    },

    {
      title: "Memory Game",
      description:
        "An interactive memory card game built with React, focusing on state management, user interaction and game logic.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  const handleFilter = (filter) => {
    if (filter === "All") {
      setSelectedFilters([]);
      return;
    }

    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const filteredProjects =
    selectedFilters.length === 0
      ? projects
      : projects.filter((project) =>
          selectedFilters.some((filter) =>
            project.technologies.includes(filter)
          )
        );

  return (
    <section
      id="projects"
      className="
        relative min-h-screen overflow-hidden
        bg-black px-5 py-24 text-white
        md:px-10 lg:px-20
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-1/2 top-0
            h-[350px] w-[650px]
            -translate-x-1/2
            rounded-full bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute bottom-[-200px] right-[-150px]
            h-[450px] w-[450px]
            rounded-full bg-blue-900/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            A selection of projects I have built using modern
            frontend technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => {
            const isActive =
              filter === "All"
                ? selectedFilters.length === 0
                : selectedFilters.includes(filter);

            return (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`
                  rounded-xl border px-5 py-2.5
                  text-sm font-medium
                  transition duration-300

                  ${
                    isActive
                      ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-blue-500/50 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}

        </div>

        {/* Selected Filters */}
        {selectedFilters.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">

            <span className="mr-2 text-sm text-gray-500">
              Selected:
            </span>

            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="
                  rounded-lg
                  bg-blue-500/10
                  px-3 py-1
                  text-xs
                  text-blue-400
                "
              >
                {filter}
              </span>
            ))}

            <button
              onClick={() => setSelectedFilters([])}
              className="
                ml-2 text-xs
                text-gray-500
                transition
                hover:text-white
              "
            >
              Clear
            </button>

          </div>
        )}

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">

          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="
                group overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                transition duration-500
                hover:-translate-y-2
                hover:border-blue-500/40
              "
            >

              {/* Preview */}
              <div
                className="
                  relative flex h-56
                  items-center justify-center
                  overflow-hidden
                  bg-gradient-to-br
                  from-blue-950
                  via-black
                  to-gray-950
                "
              >
                <div
                  className="
                    absolute h-40 w-40
                    rounded-full
                    bg-blue-600/20
                    blur-[70px]
                    transition duration-500
                    group-hover:bg-blue-500/30
                  "
                />

                <span
                  className="
                    relative z-10
                    text-5xl font-bold
                    text-white/10
                    transition duration-500
                    group-hover:text-blue-500/30
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold transition duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border border-blue-500/20
                        bg-blue-500/5
                        px-3 py-1
                        text-xs
                        text-blue-400
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex gap-3">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-lg
                        border border-white/10
                        px-5 py-2.5
                        text-sm font-medium
                        text-gray-300
                        transition
                        hover:border-blue-500
                        hover:text-white
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-lg
                        bg-blue-600
                        px-5 py-2.5
                        text-sm font-medium
                        transition
                        hover:bg-blue-500
                      "
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              </div>

            </motion.article>
          ))}

        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              No projects match the selected technologies.
            </p>
          </div>
        )}

        {/* GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/ahehmokh"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block rounded-xl
              border border-white/10
              px-7 py-3
              font-medium text-gray-300
              transition duration-300
              hover:border-blue-500
              hover:text-white
            "
          >
            View More Projects on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;