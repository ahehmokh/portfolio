import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
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
            absolute bottom-[-180px] right-[-150px]
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
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's <span className="text-blue-500">Talk</span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Have a project, opportunity, or idea in mind?
            Feel free to get in touch.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center text-lg font-medium text-blue-400">
              Let's work together
            </p>

            <h3 className="mt-3 text-center text-3xl font-bold leading-tight sm:text-4xl">
              Have an idea?
              <span className="block text-blue-500">
                Let's build it.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-lg text-center leading-8 text-gray-400">
              I'm always open to discussing new projects, frontend
              opportunities, collaborations and interesting ideas.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Email */}
              <a
                href="mailto:ahehmokh@gmail.com"
                className="
                  group flex flex-col items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl text-blue-400
                    transition duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  @
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  ahehmokh@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+201067387852"
                className="
                  group flex flex-col items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl text-blue-400
                    transition duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  ☎
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Phone
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  +20 106 738 7852
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ahehmokh"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex flex-col items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl text-blue-400
                    transition duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <FontAwesomeIcon icon={faGithub} />
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  GitHub
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  github.com/ahehmokh
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmed-ehab-bd270898"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex flex-col items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl text-blue-400
                    transition duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  LinkedIn Profile
                </p>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;