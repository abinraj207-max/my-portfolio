import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="bg-[#08101F] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-[#0F172A] to-[#111827] p-12">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div>

              <p className="font-semibold uppercase tracking-[4px] text-blue-500">
                Ready to Work Together?
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
                Let's Build Something Amazing Together.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I'm available for freelance projects,
                full-time opportunities, and startup collaborations.
                Let's turn your ideas into reality.
              </p>

            </div>

            {/* Right */}

            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-lg font-semibold text-white transition hover:bg-blue-500"
            >
              Start a Project

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterCTA;