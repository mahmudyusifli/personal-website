"use client";

export default function Work() {
  return (
    <section id="work" className="px-12 md:px-32 py-24">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-normal mb-8">Technologies</h2>

        <div className="space-y-8 text-base leading-relaxed text-black/80">
          <div>
            <p className="mb-2">Frontend</p>
            <p>JavaScript, TypeScript, Angular, Next.js, React, HTML, CSS</p>
          </div>

          <div>
            <p className="mb-2">Backend</p>
            <p>Node.js, .NET, ASP.NET, Python, REST APIs, SQL-based systems</p>
          </div>

          <div>
            <p className="mb-2">Data & Tools</p>
            <p>
              SQL, Tableau, PyTorch, Git, Jira, Visual Studio Code, Oracle SQL
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
