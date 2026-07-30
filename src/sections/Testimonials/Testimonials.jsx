import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Future Client",
    role: "Business Owner",
    review:
      "Your next successful project could be featured here. Let's build something amazing together.",
  },
  {
    name: "Future Recruiter",
    role: "Hiring Manager",
    review:
      "Professional, passionate, and focused on building scalable software solutions.",
  },
  {
    name: "Future Startup",
    role: "Founder",
    review:
      "Looking forward to collaborating on innovative products and modern applications.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[4px] text-blue-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            What People Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm continuously learning and building products.
            This section will showcase real feedback from clients,
            recruiters, and collaborators.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-blue-500"
            >
              <div className="flex gap-1">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-400">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;