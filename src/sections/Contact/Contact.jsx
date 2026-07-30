import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#050816] py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          <div className="grid gap-10 p-8 lg:grid-cols-3 lg:p-12">
            
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
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
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
                <p className="text-sm font-medium text-slate-300">
                  abinraj207@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-slate-400" size={20} />
                <p className="text-sm font-medium text-slate-300">
                  +91 6380653297
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-slate-400" size={20} />
                <p className="text-sm font-medium text-slate-300">
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Column 3: Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <textarea
                rows={3}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-slate-800 bg-[#050816] px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-600"
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
              >
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;