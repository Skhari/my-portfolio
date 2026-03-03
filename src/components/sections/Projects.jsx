export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="bg-gray-900 py-10 sm:py-20 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Projects
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 pt-6 lg:max-w-none lg:grid-cols-3">
            {/* Project 1 */}
            <article className="flex max-w-xl flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src="/usePopcorn.png"
                  alt="Movie App Screenshot"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <span className="rounded-full bg-gray-800/60 mt-5  px-3 py-1 text-xs text-gray-300 w-fit">
                Front-End
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                <a href="www.google.com" target="_blank">
                  {" "}
                  UsePopcorn – Movie Rating App{" "}
                </a>
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                React-based movie search app using IMDb API with dynamic search,
                detailed views, rating system, and localStorage persistence.
              </p>
            </article>

            {/* Project 2 */}
            <article className="flex max-w-xl flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src="/Ecommerce.png"
                  alt="Movie App Screenshot"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <span className="rounded-full bg-gray-800/60 px-3 py-1 text-xs text-gray-300 w-fit mt-5">
                Back-End
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                E-commerce Platform
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                SSR e-commerce app using Node.js, Express, MongoDB, and EJS with
                session auth, CSRF protection, RBAC, and cart management.
              </p>
            </article>

            {/* Project 3 */}
            <article className="flex max-w-xl flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src="/ChatApp.png"
                  alt="Movie App Screenshot"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <span className="rounded-full bg-gray-800/60 px-3 mt-5 py-1 text-xs text-gray-300 w-fit">
                MERN Stack
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Real-Time Chat Application
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                MERN chat app with JWT authentication, Socket.io real-time
                messaging, and Cloudinary image uploads.
              </p>
            </article>

            {/* Project 4 */}
            <article className="flex max-w-xl flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src="/web_tracker.png"
                  alt="Movie App Screenshot"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <span className="rounded-full bg-gray-800/60 mt-5 px-3 py-1 text-xs text-gray-300 w-fit">
                MERN Stack
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Time-Spent – Chrome Extension
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                MERN-based Chrome extension that tracks website usage time and
                // visualizes user-specific activity insights.
              </p>
            </article>
            <article className="flex max-w-xl flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src="/upcoming.jpg"
                  alt="Movie App Screenshot"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <span className="rounded-full bg-gray-800/60 mt-5 px-3 py-1 text-xs text-gray-300 w-fit">
                MERN Stack
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Live Collaborative Code Editor (Currently Building)
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                Developing a real-time collaborative code editor using the MERN
                stack. Implementing multi-user synchronization with Socket.io,
                live code editing, and real-time communication. Integrating a
                code execution API to support multiple programming languages and
                interactive collaboration.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

// // MERN Stack
//               </span>

//               <h3 className="mt-3 text-lg font-semibold text-white">
//
//               </h3>

//               <p className="mt-4 text-sm text-gray-400">
//
