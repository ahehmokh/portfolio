import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "React Router",
        "Redux",
        "Tailwind CSS",
        "Bootstrap CSS",
        "Next.js"
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "SQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Figma",
        "Postman",
        "JSON Server",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative min-h-screen overflow-hidden
        bg-black px-5 py-24 text-white
        md:px-10 lg:px-20
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-1/2 top-0
            h-[350px] w-[600px]
            -translate-x-1/2
            rounded-full bg-blue-600/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute bottom-[-150px] left-[-150px]
            h-[400px] w-[400px]
            rounded-full bg-blue-900/10
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Technologies and tools I use to build modern, responsive
            and scalable web applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid gap-6 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-7
                backdrop-blur-sm
                transition duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/[0.04]
              "
            >
              {/* Category */}
              <h3 className="mb-6 text-2xl font-bold">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border border-white/10
                      bg-white/[0.04]
                      px-4 py-2
                      text-sm text-gray-300
                      transition duration-300
                      hover:border-blue-500/50
                      hover:bg-blue-500/10
                      hover:text-white
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;