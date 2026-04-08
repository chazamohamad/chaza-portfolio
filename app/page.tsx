import Navbar from "./component/navbar";
export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website built with Next.js and Tailwind CSS.",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-commerce App",
      description: "An online store with product pages and cart functionality.",
      link: "https://github.com/yourusername/ecommerce-app",
    },
    {
      title: "Blog Platform",
      description: "A blog app with posts, categories, and search.",
      link: "https://github.com/yourusername/blog-platform",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-medium text-gray-500">Hello, I’m</p>
          <h1 className="mt-2 text-5xl font-bold">Chaza Mohammad</h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            I’m a frontend developer who builds fast, clean, and responsive web
            applications using Next.js, React, and Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-black px-5 py-3 text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-300 px-5 py-3"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            I enjoy building modern web interfaces and turning ideas into useful
            digital products. I focus on performance, clean design, and good
            user experience.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-sm font-medium underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-600">
            Email me at{" "}
            <a className="underline" href="mailto:you@example.com">
              you@example.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
