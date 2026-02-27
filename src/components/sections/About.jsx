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

        <section className="mt-32 py-24 bg-gradient-to-b from-white to-red-50 rounded">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {/* Education */}
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight mb-14 text-black">
                  Education
                </h3>

                <div className="space-y-14">
                  <div>
                    <h4 className="text-xl font-semibold text-black">
                      Master of Computer Applications (Online)
                    </h4>
                    <p className="mt-2 text-base text-neutral-600">
                      SASTRA University
                    </p>
                    <span className="mt-1 inline-block text-sm font-medium text-red-600">
                      Present
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black">
                      B.Com Business Analytics
                    </h4>
                    <p className="mt-2 text-base text-neutral-600">
                      Bishop Heber College
                    </p>
                    <span className="mt-1 inline-block text-sm font-medium text-red-600">
                      2022 – 2025
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black">HSC</h4>
                    <p className="mt-2 text-base text-neutral-600">
                      Carmel's Higher Secondary School
                    </p>
                    <span className="mt-1 inline-block text-sm font-medium text-red-600">
                      2022
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black">SSLC</h4>
                    <p className="mt-2 text-base text-neutral-600">
                      Vasavi Vidhayala Matriculation School
                    </p>
                    <span className="mt-1 inline-block text-sm font-medium text-red-600">
                      2020
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight mb-14 text-black">
                  Work Experience
                </h3>

                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Full Stack Developer Intern
                  </h4>

                  <p className="mt-2 text-base text-neutral-600">
                    VDART – Trichy
                  </p>

                  <span className="mt-1 inline-block text-sm font-medium text-red-600">
                    Jan 2025 – Mar 2025
                  </span>

                  <p className="mt-6 text-base leading-relaxed text-neutral-700">
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
      </div>
    </section>
  );
};
