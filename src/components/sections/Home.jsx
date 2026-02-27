export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right bg-gradient-to-r from-red-500  to-orange-500 bg-clip-text text-transparent ">
          Hi, I'm S K Harihara Prakash
        </h1>
        <p className="text-neutral-800 text-lg mb-8 max-w-lg mx-auto">
          Full-Stack Developer specializing in the MERN stack (MongoDB,
          Express.js, React.js, Node.js). I build scalable web applications with
          clean architecture, secure APIs, and intuitive user interfaces.
          Focused on strong fundamentals and problem-solving.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-red-500/50 text-red-600 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] hover:bg-red-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
