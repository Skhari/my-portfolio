import emailjs from "emailjs-com";
import { useState } from "react";
// import.meta.env.PUBLIC_KEY;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        e.target,
        import.meta.env.PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops: something went wrong. please try again");
      });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-white via-red-50 to-orange-50"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Contact Card */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-200">
          <form className="space-y-8" onSubmit={(e) => handleSubmit(e)}>
            {/* Name */}
            <div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                value={formData.name}
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-lg border border-neutral-300 
            focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
            outline-none transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                placeholder="example@gmail.com"
                className="w-full px-5 py-4 rounded-lg border border-neutral-300 
            focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
            outline-none transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="message"
                name="message"
                value={formData.message}
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-lg border border-neutral-300 
            focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
            outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-white 
          bg-gradient-to-r from-red-500 to-orange-500 
          hover:from-red-600 hover:to-orange-600 
          hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] 
          transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
