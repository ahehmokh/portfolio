import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Front-End Development",
      description:
        "Building modern, responsive and interactive user interfaces using React.js and modern frontend technologies.",
      icon: "⌘",
    },
    {
      number: "02",
      title: "React Web Applications",
      description:
        "Developing scalable React applications with reusable components, routing, state management and clean project structure.",
      icon: "⚛",
    },
    {
      number: "03",
      title: "Responsive Web Design",
      description:
        "Creating responsive interfaces that provide a consistent and smooth experience across desktop, tablet and mobile devices.",
      icon: "◫",
    },
    {
      number: "04",
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs and handling asynchronous data, loading states and errors.",
      icon: "↔",
    },
  ];

  return (
    <section
      id="services"
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
            h-[350px] w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute bottom-[-180px] left-[-150px]
            h-[400px] w-[400px]
            rounded-full
            bg-blue-900/10
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            What I Can Do
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            My <span className="text-blue-500">Services</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            I build modern web experiences focused on performance,
            responsiveness and a clean user experience.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2">

          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-7
                backdrop-blur-sm
                transition duration-500
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:bg-blue-500/[0.04]
              "
            >
              {/* Number */}
              <span
                className="
                  absolute right-6 top-5
                  text-5xl font-bold
                  text-white/[0.04]
                  transition duration-500
                  group-hover:text-blue-500/10
                "
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-xl
                  border border-blue-500/20
                  bg-blue-500/10
                  text-2xl
                  text-blue-400
                  transition duration-300
                  group-hover:border-blue-500/50
                  group-hover:bg-blue-500/20
                "
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-7 text-2xl font-bold transition duration-300 group-hover:text-blue-400">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  mt-7 h-[2px] w-10
                  bg-blue-500
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;