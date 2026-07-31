import {
  GitBranch,
  Code2,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
const stats = [
    {
        title: "Repositories",
        value: "15+",
        icon: FolderGit2,
    },
    {
        title: "Technologies",
        value: "10+",
        icon: Code2,
    },
    {
        title: "Projects",
        value: "8+",
        icon: GitBranch,
    },
];

const GithubSection = () => {
    return (
        <section
            id="github"
            className="bg-[#08101F] py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <p className="font-semibold uppercase tracking-[4px] text-blue-500">
                        GitHub
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Open Source & Development
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        I enjoy building scalable applications and continuously learning
                        new technologies. Explore my repositories and projects on GitHub.
                    </p>

                </div>

                {/* Main Card */}

                <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 lg:p-10">

                    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

                        {/* Left */}

                        <div>

                            <div className="flex items-center gap-4">

                                <div className="rounded-2xl bg-blue-500/10 p-5">

                                    <FolderGit2
                                        className="text-blue-500"
                                        size={40}
                                    />

                                </div>

                                <div>

                                    <h3 className="text-3xl font-bold text-white">
                                        GitHub Profile
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        Explore my code, projects and development journey.
                                    </p>

                                </div>

                            </div>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
                            >
                                Visit GitHub

                                <ArrowUpRight size={18} />

                            </a>

                        </div>

                        {/* Right */}

                        <div className="grid gap-6 sm:grid-cols-3">

                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-slate-800 bg-[#111827] p-6 text-center"
                                    >
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">

                                            <Icon
                                                size={28}
                                                className="text-blue-500"
                                            />

                                        </div>

                                        <h3 className="mt-5 text-3xl font-bold text-white">
                                            {item.value}
                                        </h3>

                                        <p className="mt-2 text-slate-400">
                                            {item.title}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default GithubSection;