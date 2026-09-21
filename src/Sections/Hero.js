import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Main blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        {/* Top-left glow */}
        <div
          className="
            absolute
            left-[-150px]
            top-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-900/20
            blur-[120px]
          "
        />

        {/* Bottom-right glow */}
        <div
          className="
            absolute
            bottom-[-150px]
            right-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-800/20
            blur-[120px]
          "
        />

        {/* ================================================= */}
        {/* ================= LEFT LIGHTNING ================= */}
        {/* ================================================= */}

        <motion.svg
          className="absolute left-0 top-0 h-full w-1/2"
          viewBox="0 0 500 800"
          fill="none"
        >
          <motion.path
            d="
              M50 750
              L120 650
              L80 610
              L180 500
              L140 460
              L250 340
              L210 300
              L330 170
              L290 130
              L390 20
            "
            stroke="rgba(59,130,246,0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* ================================================= */}
        {/* ================= RIGHT LIGHTNING =============== */}
        {/* ================================================= */}

        <motion.svg
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 500 800"
          fill="none"
        >
          <motion.path
            d="
              M450 750
              L380 650
              L420 610
              L320 500
              L360 460
              L250 340
              L290 300
              L170 170
              L210 130
              L110 20
            "
            stroke="rgba(59,130,246,0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.svg>

        {/* Bottom black fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-40
            w-full
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* ================================================= */}
      {/* ================= MOBILE LAYOUT ================== */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          md:hidden
        "
      >
        {/* ================= MOBILE PHOTO ================= */}

        <div
          className="
            flex
            h-[48vh]
            items-end
            justify-center
            px-5
            pb-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[300px]"
          >
            <img
              src="/Ahmed.png"
              alt="Ahmed Ehab"
              className="
                w-full
                rounded-[20px]
                border
                border-white/10
                object-cover
                shadow-[0_0_45px_rgba(59,130,246,0.3)]
              "
            />
          </motion.div>
        </div>

        {/* ================= MOBILE INTRO ================= */}

        <div
          className="
            flex
            min-h-[52vh]
            flex-1
            items-center
            justify-center
            px-5
            pb-10
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[500px]"
          >
            <p className="text-lg text-blue-400">Hello, I'm</p>

            <h1
              className="
                mt-2
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
              "
            >
              Ahmed Ehab
            </h1>

            <h2
              className="
                mt-4
                text-xl
                font-semibold
                leading-relaxed
                text-gray-300
              "
            >
              Front-End / Full-Stack
              <span className="block text-blue-500">React Developer</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[420px]
                text-sm
                leading-7
                text-gray-400
              "
            >
              I build modern, responsive and scalable web applications using
              React.js and modern frontend technologies.
            </p>

            {/* Mobile Buttons */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                sm:justify-center
              "
            >
              <a
                href="#projects"
                className="
                  w-full
                  max-w-[220px]
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-medium
                  transition
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                "
              >
                View My Projects
              </a>

              <a
                href="/Ahmed_Ehab_Mokhtar_CV_Complete.pdf"
                download
                className="
                  w-full
                  max-w-[220px]
                  rounded-xl
                  border
                  border-white/20
                  px-6
                  py-3
                  font-medium
                  text-gray-300
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:text-white
                "
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= DESKTOP LAYOUT ================= */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          hidden
          min-h-screen
          md:block
        "
      >
        {/* ================= DESKTOP PHOTO ================= */}

        <motion.div
          initial={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            left: "27%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            w-[400px]
            lg:w-[470px]
          "
        >
          <img
            src="/Ahmed.png"
            alt="Ahmed Ehab"
            className="
              w-full
              rounded-[20px]
              border
              border-white/10
              object-cover
              shadow-[0_0_50px_rgba(59,130,246,0.35)]
            "
          />
        </motion.div>

        {/* ================= DESKTOP INTRO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[52%]
            top-1/2
            z-20
            w-[42%]
            -translate-y-1/2
          "
        >
          <p className="text-xl text-blue-400">Hello, I'm</p>

          <h1
            className="
              mt-2
              text-5xl
              font-bold
              tracking-tight
              lg:text-7xl
            "
          >
            Ahmed Ehab
          </h1>

          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              text-gray-300
              lg:text-3xl
            "
          >
            Front-End / Full-Stack
            <span className="block text-blue-500">React Developer</span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-gray-400
            "
          >
            I build modern, responsive and scalable web applications using
            React.js, JavaScript and modern frontend technologies.
          </p>

          {/* Desktop Buttons */}

          <div className="mt-7 flex gap-4">
            <a
              href="#projects"
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-medium
                transition
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
              "
            >
              View My Projects
            </a>

            <a
              href="/Ahmed_Ehab_Mokhtar_CV.pdf"
              download="Ahmed_Ehab_Mokhtar_CV.pdf"
              className="
    rounded-xl
    border
    border-white/20
    px-6
    py-3
    font-medium
    text-gray-300
    transition
    duration-300
    hover:border-blue-500
    hover:text-white
  "
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
