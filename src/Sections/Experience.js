import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      period: "2023",
      role: "Web Development Trainee",
      company: "NTI - National Technology Institute",
      description:
        "Started my web development journey at NTI, building a strong foundation in web technologies and learning the fundamentals of creating modern websites and applications.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Web Development",
      ],
    },
    {
      period: "2024",
      role: "React.js Developer",
      company: "Self-Learning & Practice",
      description:
        "Focused on learning React.js and modern frontend development concepts, including components, state management, hooks, routing, API integration, and building reusable user interfaces.",
      skills: [
        "React.js",
        "JavaScript",
        "React Router",
        "Hooks",
        "REST APIs",
      ],
    },
    {
      period: "2025",
      role: "Freelance Frontend Developer",
      company: "Freelance",
      description:
        "Worked as a freelance frontend developer, gaining practical experience by working on client-based projects, understanding requirements, building user interfaces, and delivering solutions based on client needs.",
      skills: [
        "React.js",
        "JavaScript",
        "Responsive Design",
        "Client Communication",
        "UI Development",
      ],
    },
    {
      period: "2025 - Present",
      role: "Frontend Developer",
      company: "Personal Projects",
      description:
        "Started building complete web applications to strengthen my development skills, including e-commerce platforms, learning platforms, task management applications, form validation systems, and interactive games.",
      skills: [
        "React.js",
        "Context API",
        "JSON Server",
        "Framer Motion",
        "Git & GitHub",
      ],
    },
  ];

  return (
    <section
      id="experience"
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

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            My Professional Journey
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            My <span className="text-blue-500">Experience</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            My journey from learning web development to working with clients
            and building complete frontend applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
              absolute left-[9px] top-0
              h-full w-[2px]
              bg-gradient-to-b
              from-blue-500
              via-blue-500/40
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="
                relative mb-12
                pl-10
                md:flex md:items-center md:justify-between
                md:pl-0
              "
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute left-0 top-8
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  border-4 border-black
                  bg-blue-500
                  shadow-[0_0_20px_rgba(59,130,246,0.7)]
                  md:left-1/2
                  md:-translate-x-1/2
                "
              />

              {/* Date - Desktop */}
              <div
                className="
                  hidden
                  md:block
                  md:w-[42%]
                  md:pr-12
                  md:text-right
                "
              >
                <span className="text-sm font-medium text-blue-400">
                  {experience.period}
                </span>
              </div>

              {/* Experience Card */}
              <div
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-sm
                  transition duration-300
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                  md:w-[42%]
                "
              >

                {/* Date - Mobile */}
                <span className="text-sm font-medium text-blue-400 md:hidden">
                  {experience.period}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-500">
                  {experience.company}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-md
                        border border-blue-500/20
                        bg-blue-500/5
                        px-3 py-1
                        text-xs text-blue-400
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;