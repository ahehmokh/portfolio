import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-5
        py-24
        text-white
        md:px-10
        lg:px-20
      "
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top blue glow - connects with Hero */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[120px]
          "
        />

        {/* Side glow */}
        <div
          className="
            absolute
            right-[-200px]
            top-1/2
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-900/10
            blur-[130px]
          "
        />

        {/* Gradient transition */}
        <div
          className="
            absolute
            left-0
            top-0
            h-32
            w-full
            bg-gradient-to-b
            from-black
            to-transparent
          "
        />

      </div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16 text-center"
        >

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Get To Know Me
          </p>

          <h2
            className="
              text-4xl
              font-bold
              sm:text-5xl
              lg:text-6xl
            "
          >
            About <span className="text-blue-500">Me</span>
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-[2px]
              w-20
              bg-blue-500
            "
          />

        </motion.div>


        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <p className="mb-4 text-lg font-medium text-blue-400">
              Who I am
            </p>

            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
              "
            >
              I'm Ahmed Ehab, a
              <span className="text-blue-500">
                {" "}React Developer.
              </span>
            </h3>

            <p
              className="
                mt-6
                leading-8
                text-gray-400
              "
            >
              I'm a Computer Engineering graduate and a passionate
              Front-End / Full-Stack React Developer focused on
              building modern and responsive web applications.
            </p>

            <p
              className="
                mt-5
                leading-8
                text-gray-400
              "
            >
              I enjoy turning ideas into clean, interactive and
              user-friendly interfaces using React.js, JavaScript
              and modern web technologies.
            </p>

            <p
              className="
                mt-5
                leading-8
                text-gray-400
              "
            >
              I'm continuously improving my skills by building
              real-world projects and exploring modern tools and
              development practices.
            </p>

          </motion.div>


          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="grid grid-cols-2 gap-4"
          >

            {/* Card 1 */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
                transition
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/[0.05]
              "
            >

              <h4 className="text-3xl font-bold text-blue-500">
                React
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Main Technology
              </p>

            </div>


            {/* Card 2 */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
                transition
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/[0.05]
              "
            >

              <h4 className="text-3xl font-bold text-blue-500">
                5+
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                React Projects
              </p>

            </div>


            {/* Card 3 */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
                transition
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/[0.05]
              "
            >

              <h4 className="text-3xl font-bold text-blue-500">
                JS
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Core Language
              </p>

            </div>


            {/* Card 4 */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
                transition
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/[0.05]
              "
            >

              <h4 className="text-3xl font-bold text-blue-500">
                Full-Stack
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Development Goal
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutMe;