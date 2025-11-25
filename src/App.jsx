import React from "react";
import "./Portfolio.css";
// --- Mock data ---
const profile = {
  name: "Maddimsetti Bhuvaneswari",
  title: "Full Stack Developer",
  intro:
    "I build accessible web apps and mobile-first with a focus on performance and delightful UX. I love working with Angular, React, React Native, and modern web tooling.",
  location: "Amalapuram,Andhrapradesh, India",
  presentWorkLocation: "Vizag, Andhrapadesh",
  email: "mbhuvana0108@gmail.com",
  linkedin: "linkedin.com/in/maddimsetti-bhuvaneswari-94a71825b",
  github: "https://github.com/maddimsettybhuvaneswari/responsive.git ",
};

const skills = [
  { ProgrammingLanguages: ["JavaScript", "TypeScript", "Python"] },
  {
    FrontEndTechnologies: [
      "Angular",
      "ReactJs",
      "React",
      "ReactNative",
      "HTML5",
      "CSS3",
      "CSSBootStrap",
      "TailwindCSS",
    ],
  },

  { BackEndTechnologies: ["Node.js", "ExpressJs"] },

  { DataBase: ["MYSQL"] },
  { ToolsAndPlatforms: ["Git", "VScode"] },
];

const projects = [
  {
    title: "QR Video Overlay App",
    description:
      "React Native app that overlays QR codes onto videos and merges multiple clips using FFmpegKit.",
    tech: ["React Native", "FFmpegKit", "react-native-qrcode-svg"],
    repo: "#",
  },
  {
    title: "Image Compressor & Uploader",
    description:
      "Web app to capture, compress and upload images to S3 with previews and EXIF handling.",
    tech: ["React", "AWS S3", "@aws-sdk/client-s3"],
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio built with React and Tailwind CSS — minimal, responsive, and accessible.",
    tech: ["React", "Tailwind"],
    repo: "#",
  },
];

function Container({ children }) {
  return <div className="w-screen px-4">{children}</div>;
}

function Badge({ children }) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}

// --- Navbar ---
function Navbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-40 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              BM
            </div>
            <div>
              <a href="#home" className="text-lg font-semibold">
                {profile.name}
              </a>
              <div className="text-xs text-gray-500">{profile.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a
              href={profile.github}
              className="ml-2 inline-block px-4 py-2 rounded-md bg-indigo-600 text-white text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

// --- Hero / Home ---
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m {profile.name}.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              {profile.intro}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-5 py-3 bg-indigo-600 text-white rounded-md"
              >
                See projects
              </a>
              <a href="#contact" className="px-5 py-3 border rounded-md">
                Contact me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div>{profile.location}</div>
              <div>·</div>
              <div>Email: {profile.email}</div>
            </div>
          </div>

          <div className="order-first md:order-last flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-50 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">BM</div>
                <div className="mt-2 text-sm text-gray-500">
                  React • React Native • UI/UX
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Skills ---
function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Tools, libraries and technologies I use frequently.
        </p>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillObj, index) => {
              const category = Object.keys(skillObj)[0];
              const items = skillObj[category];

              return (
                <div key={index} className="p-4 shadow rounded bg-white cards">
                  <h3 className="text-xl font-semibold mb-3">{category}</h3>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      // <Badge
                      //   key={i}
                      //   className="!bg-blue-500 !text-white px-3 py-1"
                      // >
                      //   {item}
                      // </Badge>
                      <div
                        key={i}
                        className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm font-medium items"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Projects ---
function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-4">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={project.repo} className="text-sm text-indigo-600">
          Repository
        </a>
        <a href="#" className="text-sm text-gray-500">
          Live demo
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- About ---
function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-2 text-gray-700">
            <p className="mb-4">
              I’m a developer building beautiful experiences on web and mobile.
              I’ve worked on projects involving video processing, QR code
              generation and scanning, cloud uploads, and performant user
              interfaces.
            </p>
            <p>
              I enjoy turning complex problems into simple, elegant solutions.
              Outside work I like photography, reading, and tinkering with side
              projects.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600">Contact</div>
            <div className="mt-3 font-medium">{profile.name}</div>
            <div className="text-sm text-gray-500">{profile.title}</div>
            <div className="mt-2 text-sm">{profile.email}</div>
            <div className="mt-1 text-sm">{profile.location}</div>
            <div className="mt-3 flex gap-2">
              <a href={profile.github} className="text-sm text-indigo-600">
                GitHub
              </a>
              <a href={profile.linkedin} className="text-sm text-gray-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Contact ---
function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks — this demo form does not send emails. Replace with your form handler."
                );
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700">Name</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  rows={5}
                  required
                />
              </div>

              <div>
                <button className="px-5 py-3 bg-indigo-600 text-white rounded-md">
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              Prefer email? Send a message to <strong>{profile.email}</strong>.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Quick links</h4>
              <ul className="space-y-2">
                <li>
                  <a href={profile.github} className="text-indigo-600">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} className="text-indigo-600">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="py-8 bg-white border-t mt-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-sm text-gray-600">
            Built with React • Tailwind
          </div>
        </div>
      </Container>
    </footer>
  );
}

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased leading-relaxed">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
