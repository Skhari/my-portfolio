export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Axios",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "GraphQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-white via-red-50 to-orange-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-neutral-900 text-lg leading-relaxed">
            MERN Stack Developer focused on clean architecture, scalable backend
            systems, and performant web applications. Passionate about building
            real-world products with strong fundamentals and maintainable code.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-neutral-900">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium 
                    hover:bg-red-500/20 hover:shadow-[0_2px_12px_rgba(239,68,68,0.25)] 
                    transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-neutral-900">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium 
                    hover:bg-red-500/20 hover:shadow-[0_2px_12px_rgba(239,68,68,0.25)] 
                    transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        {/* Education & Experience */}
        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-neutral-900">
              Education
            </h3>

            <div className="space-y-10">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900">
                  Master of Computer Applications (Online)
                </h4>
                <p className="text-red-600 text-sm mt-1">
                  SASTRA University • Present
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neutral-900">
                  B.Com Business Analytics
                </h4>
                <p className="text-red-600 text-sm mt-1">
                  Bishop Heber College • 2022 – 2025
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neutral-900">HSC</h4>
                <p className="text-red-600 text-sm mt-1">
                  Carmel's Higher Secondary School • 2022
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neutral-900">SSLC</h4>
                <p className="text-red-600 text-sm mt-1">
                  Vasavi Vidhayala Matriculation School • 2020
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-neutral-900">
              Work Experience
            </h3>

            <div>
              <h4 className="text-lg font-semibold text-neutral-900">
                Full Stack Developer Intern
              </h4>

              <p className="text-red-600 text-sm mt-1">
                VDART • Jan 2025 – Mar 2025
              </p>

              <p className="mt-4 text-neutral-800 leading-relaxed">
                Collaborated with a development team to build a role-based
                Document Management System. Implemented authentication, user
                management, document approval workflows, and analytics
                dashboards using the MERN stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
