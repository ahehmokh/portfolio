import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-10 text-white md:px-10 lg:px-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo / Name */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold"
          >
            Ahmed<span className="text-blue-500"> Ehab</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#services"
              className="transition hover:text-blue-400"
            >
              Services
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition hover:text-blue-400"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/ahehmokh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10
                text-sm text-gray-400
                transition duration-300
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10
                text-sm text-gray-400
                transition duration-300
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              in
            </a>

            <a
              href="mailto:ahehmokh@gmail.com"
              aria-label="Email"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/10
                text-sm text-gray-400
                transition duration-300
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              @
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row md:text-left">

          <p>
            © {currentYear} Ahmed Ehab. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-blue-500">React</span>
            {" "}and{" "}
            <span className="text-blue-500">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;