import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call or email service integration
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section id="contact" className="bg-[#050816] py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-3 lg:p-12">
            
            {/* Column 1: Header and Socials */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mb-4 flex items-center gap-3 text-3xl font-bold text-white md:text-4xl">
                  Let's Build Something <br />
                  Amazing Together!
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-slate-300">
                  Have a project in mind or want to work together? Let's connect!
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/abinraj207-max"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abinraj02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://wa.me/916380653297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col justify-center space-y-8 lg:pl-10 lg:border-l lg:border-slate-800">
              <div className="flex items-center gap-4">
                <Mail className="text-slate-400" size={20} />
                <a href="mailto:abinraj207@gmail.com" className="text-sm font-medium text-slate-300 hover:text-blue-500 transition-colors">
                  abinraj207@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-slate-400" size={20} />
                <a href="tel:+916380653297" className="text-sm font-medium text-slate-300 hover:text-blue-500 transition-colors">
                  +91 6380653297
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-slate-400" size={20} />
                <p className="text-sm font-medium text-slate-300">
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Column 3: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </button>
            </form>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;