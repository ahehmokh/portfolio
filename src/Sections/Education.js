import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
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
            absolute bottom-[-150px] right-[-150px]
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
            My Academic Background
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-blue-500">Education</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            My academic background and the foundation that helped me
            build my technical skills.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            relative mx-auto max-w-4xl
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-7
            backdrop-blur-sm
            transition duration-500
            hover:border-blue-500/40
            hover:bg-blue-500/[0.03]
            md:p-10
          "
        >
          {/* Glow */}
          <div
            className="
              absolute -right-20 -top-20
              h-60 w-60
              rounded-full
              bg-blue-600/10
              blur-[90px]
            "
          />

          <div className="relative z-10">

            {/* Date */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

              <span className="text-sm font-medium text-blue-400">
                2017 — 2025
              </span>
            </div>

            {/* University */}
            <h3 className="text-2xl font-bold sm:text-3xl">
              Modern Academy for Engineering & Technology
            </h3>

            <p className="mt-3 text-lg font-medium text-blue-500">
              Computer Engineering
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Bachelor's degree in Computer Engineering with a focus
              on software development, programming, databases and
              computer engineering fundamentals.
            </p>

            {/* Details */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div
                className="
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  p-5
                "
              >
                <p className="text-sm text-gray-500">
                  Degree
                </p>

                <p className="mt-2 font-semibold text-white">
                  Bachelor's Degree
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  p-5
                "
              >
                <p className="text-sm text-gray-500">
                  Major
                </p>

                <p className="mt-2 font-semibold text-white">
                  Computer Engineering
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  p-5
                "
              >
                <p className="text-sm text-gray-500">
                  Graduation
                </p>

                <p className="mt-2 font-semibold text-white">
                  2025
                </p>
              </div>

            </div>

            {/* Academic Project */}
            <div
              className="
                mt-8
                rounded-xl
                border border-blue-500/10
                bg-blue-500/[0.04]
                p-5
              "
            >
              <p className="text-sm font-medium text-blue-400">
                Graduation Project
              </p>

              <h4 className="mt-2 text-lg font-semibold">
                E-Learning Platform
              </h4>

              <p className="mt-2 leading-7 text-gray-400">
                Developed an e-learning platform using React for the
                frontend, Node.js for the backend and SQL for database
                management.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;