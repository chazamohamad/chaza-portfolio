import Navbar from "./component/navbar";
export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website built with Next.js and Tailwind CSS.",
      link: "https://github.com/chazamohamad/chaza-portfolio",
    },
    {
      title: "E-commerce Website",
      description:
        "Worked in team on an e-commerce site, focusing on frontend development and integrating APIs to fetch data from the database for dynamic product display with cart functionality.",
      link: "https://github.com/ahmadmabd/Ecommerce",
    },
    {
      title: "SohatiCare Health & Personal Care Website",
      description:
        "SohatiCare is a front-end e-commerce website for health products that includes product listings, discount handling, and a dynamic shopping cart with real-time total price calculation using JavaScript.",
      link: "https://github.com/chazamohamad/SohatiCare-Ecommerce",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[var(--background)] to-slate-100 text-[var(--foreground)]">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-medium text-[var(--foreground-secondary)]">
            Hello, I'm
          </p>
          <h1 className="mt-2 text-5xl font-bold">Chaza Mohamad</h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--foreground-secondary)]">
            I’m a Computer Science student focused on building a strong
            foundation in frontend development. I enjoy turning ideas into
            simple and functional web interfaces, and I’m constantly working on
            improving my problem-solving skills and understanding of modern web
            technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-[var(--primary)] px-5 py-3 text-white shadow-lg transition-colors hover:bg-[var(--primary-hover)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[var(--border)] px-5 py-3 bg-[var(--surface)] transition-colors hover:bg-[var(--background)]"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 max-w-3xl text-[var(--foreground-secondary)]">
            I’m currently a third-year Computer Science student at Lebanese
            University (LU) with a strong interest in frontend development. I
            enjoy creating fast, clean, and responsive web applications using
            modern technologies like React, Next.js, and Tailwind CSS. I’m
            always eager to learn new skills and improve my development
            workflow.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Html",
              "Css",
              "JavaScript",
              "Tailwind CSS",
              "React",
              "Next.js",
              "NodeJs",
              "Python",
              "MySQL",
              "Git",
              "GitHub",
              "Jira",
              "C",
              "C#",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm transition-colors hover:bg-[var(--background)]"
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
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-[var(--foreground-secondary)]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-[var(--foreground-secondary)] cursor-pointer transition-colors hover:text-[var(--accent)]">
            Email me at :{" "}
            <a
              className="underline text-[var(--accent)] hover:text-[var(--accent-hover)]"
              href="mailto:chazamohamad6@gmail.com"
            >
              chazamohamad6@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
