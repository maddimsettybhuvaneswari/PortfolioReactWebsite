import React from "react";
import "./Portfolio.css";
import { useState } from "react";

// --- Mock data ---
const profile = {
  name: "Maddimsetti Bhuvaneswari",
  title: "Full Stack Developer",
  intro:
    "I build fast, accessible, and user-friendly web and mobile applications with a strong focus on clean UI and smooth user experience. I work with Angular, React, React Native, Express.js, and MySQL to create robust full-stack solutions with solid backend development. I’ve also worked on a Human Detection project where I developed the frontend and connected it to a FastAPI backend.",
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
    title: "Employees Task Calendar",
    description:
      "The Employee Task Calendar is a full-stack task management system developed using Angular, Express.js, and MySQL that helps companies organize employees, departments, and daily work schedules in a clean and intuitive way. The platform includes a Google-Calendar–style interface with Day, Week, and Month views, allowing users to easily navigate and visualize their tasks. Employees can select their department, instantly view all assigned tasks, and start a task by choosing the required time duration. Once the work is completed, the user can end the task, and the system automatically records it in the daily task history The application supports multiple departments, enabling users to switch between teams and track department-wise work schedules. It also keeps complete logs of started and completed tasks, making it easier for companies to monitor productivity and daily activity. This solution combines a responsive Angular UI with powerful backend logic in Express.js and efficient data storage in MySQL to deliver a smooth and reliable task-tracking experience.",
    tech: ["Angular", "ExpressJs", "MySQL", "CSS BootStrap"],
    repo: "#",
    period: "January 2024-June 2024",
  },
  {
    title: "Telecallers Call Assignment",
    description:
      "The Telecaller Calls Assignment System is a streamlined solution designed to manage and distribute incoming customer calls across multiple departments. The platform allows users to filter call records by department and custom date ranges, making it easy to locate the exact set of calls that need assignment. Once filtered, managers can quickly allocate calls to telecallers based on their workload, availability, and assigned region, ensuring a balanced and organized workflow.The system supports multiple telecaller teams and provides an efficient interface to assign call lists directly to each telecaller. A detailed assignment history is maintained, capturing who assigned the calls, to whom they were assigned, and how many calls were distributed. This helps improve transparency, performance tracking, and operational efficiency.",
    tech: ["Angular", "ExpressJs", "MySQL", "CSS BootStrap"],
    repo: "#",
    period: "August 2024-November 2024",
  },
  {
    title: "GPS Camera",
    description:
      "The GPS Attendance System is a location-enabled attendance module designed to capture employee presence with accuracy and transparency. The application uses the device camera to capture the employee’s face and automatically fetches GPS coordinates (latitude and longitude) along with the current date and time. This ensures that every attendance entry is verified with both visual proof and precise location data.The system is primarily used by companies to validate employee check-ins and track attendance authenticity. I developed the complete frontend interface, including the camera module, UI flow, and GPS data capture functionality. The frontend ensures a smooth user experience while interacting with the camera, retrieving location details, and preparing the attendance entry for backend processing.",
    tech: ["React", "CSS Bootstrap"],
    repo: "#",
    period: "December 2024 2025-January 2025",
  },
  {
    title: "Ticket Management Daily Report",
    description:
      "The Ticket Management System helps organizations handle employee issues in a structured and trackable way. Employees can create tickets, which move through statuses such as Created, Assigned, In-Progress, and Closed. The system also provides an Accepted / Unaccepted view so managers can instantly see which tickets have been acknowledged and which still need attention. With separate tables for ticket status, assignment details, and date-range filtering, managers can easily monitor workloads, track unresolved issues, and review ticket history. I developed both the frontend and backend, including MySQL database integration, ensuring smooth ticket creation, assignment, tracking, and reporting.",
    tech: ["Angular", "Expressjs", "MySQL"],
    repo: "#",
    period: "January 2025-March 2025",
  },
  {
    title: "Coupon Slot Management System",
    description:
      "The Coupon Slot Management System allows users to create and manage time-based and date-based coupon slots. Users can generate coupons by selecting a specific start date, end date, and time duration, and the system automatically determines whether the coupon is active, upcoming, or expired. Each coupon is stored with complete scheduling details, enabling easy tracking and management. I developed both the frontend and backend along with MySQL integration, ensuring accurate time validation, automatic expiration checks, and a smooth user experience for creating and monitoring coupon slots.",
    tech: ["Angular", "Expressjs", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "March 2025-April 2025",
  },
  {
    title: "Video Merging in React Native",
    description:
      "The Video Merging Module is a mobile application feature developed in React Native that enables users to seamlessly merge multiple videos into a single output file. Using FFmpegKit, the system combines video clips with smooth transitions while maintaining high quality. The module supports selecting remote or local videos, processing them in sequence, and generating a single merged video ready for sharing. I implemented the complete logic, including video fetching, FFmpeg command execution, file handling, and output rendering, ensuring fast processing and an intuitive user experience for video merging on mobile devices.",
    tech: ["React Native", "CSS Bootstrap"],
    repo: "#",
    period: "April 2025-May 2025",
  },
  {
    title: "QR Code Generator in Angular",
    description:
      "The QR Code Generator module allows users to create and store QR codes with associated metadata in a database. Each QR code is generated dynamically in Angular and saved with its creation date and day for easy tracking and reference. Users can view generated QR codes along with their timestamps, enabling better organization and monitoring. I developed the complete frontend and backend logic, including database integration, QR code generation, storage, and display functionality, ensuring a smooth and reliable user experience.",
    tech: ["Angular", "ExpressJs", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "May 2025-June 2025",
  },
  {
    title: "Video QR Overlay in React",
    description:
      "The Video QR Overlay module allows users to upload a video and automatically overlay a dynamically generated QR code onto it. The QR code is clearly positioned on the video, and users can easily download the final output. I developed the complete frontend interface, including video upload handling, QR code generation, overlay display, and download functionality, ensuring a smooth and intuitive user experience.",
    tech: ["React", "CSS Bootstrap"],
    repo: "#",
    period: "June 2025-July 2025",
  },
  {
    title: "Human Detection using React & FastAPI",
    description:
      "The Human Detection module is a web application that captures a person’s face using the device camera and applies a machine learning model via FastAPI to detect whether the captured subject is human. The system provides real-time feedback, indicating if a human face is detected or not. I developed the complete frontend interface in React, handling camera access, live video feed, and real-time interaction with the backend API, ensuring a smooth and responsive user experience.",
    tech: ["React", "Machine Learnig FastApi.js", "CSS Bootstrap"],
    repo: "#",
    period: "July 2025-August 2025",
  },
  {
    title: "Batch Image Compression Using React",
    description:
      "The Batch Image Compression module allows users to upload an entire folder containing multiple images and automatically compresses all of them without reducing visual quality. Built using React.js, this project focuses on efficient client-side processing, reducing file sizes while preserving image clarity. The system reads every image inside the folder, compresses them using optimized algorithms, and provides users with a downloadable version of the compressed images. I developed the complete frontend, including folder upload handling, batch processing workflow, and a clean, user-friendly interface.",
    tech: ["React", "Tailwind CSS"],
    repo: "#",
    period: "August 2025 - September 2025",
  },
  {
    title: "Barcode Creation System",
    description:
      "The Barcode Creation System allows users to generate unique barcodes based on selected dates and store them securely in a database. Built with Angular for the frontend and Express.js with MySQL for the backend, the module provides a smooth workflow for creating, viewing, and downloading barcodes. Users select a date, click the generate button, and a new barcode is created automatically and saved in the system. All generated barcodes are listed in the UI with options to preview and download.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "September 2025 - November 2025",
  },
  {
    title: "QR Code Creation System (Angular + Express.js + MySQL)",
    description:
      "This module allows users to generate unique QR codes based on a selected date. When the user chooses a date and clicks the generate button, the system creates a QR code and stores it in a MySQL database. The interface displays all previously generated QR codes along with their created date. Each QR code can also be downloaded directly from the UI. I developed both the frontend in Angular and the backend using Express.js, ensuring smooth generation, storage, and display of all QR codes.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "November 2025 - December 2025",
  },
  {
    title: "News Management Module",
    description:
      "This module allows users to create, edit, and delete news articles through a simple and user-friendly interface. When a user submits the news form, the data is stored in MySQL and instantly displayed in the UI. Each news item includes edit and delete options, enabling easy updates and content management. I developed the full frontend in Angular and built the backend APIs using Express.js for smooth CRUD operations.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "December 2025 - January 2026",
  },
  {
    title: "Ticket Management System",
    description:
      "This module is designed to manage employee tickets efficiently. Each ticket contains user details, images, and an associated count value. When a user enters the count, the system updates the coins for that employee using their unique employee ID. The module includes powerful filters to help users quickly search and sort tickets based on different parameters. I developed the entire frontend in Angular and built the backend using Express.js, ensuring accurate updates and seamless data flow between UI and database.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "January 2026 - February 2026",
  },
  {
    title: "Users Dashboard & Coins Management System",
    description:
      "This module provides a complete dashboard for managing users and tracking their coin-related activities. The main dashboard lists all users, and when a user is selected, their detailed profile opens with two sections: Dashboard and Coins History. In the Dashboard section, the system shows a circular progress view representing the user’s presence or activity performance.In the Coins History section, the system displays full transaction details including total coins, credited coins, debited coins, transaction images, and the remaining balance for every transaction—similar to digital wallet apps like PhonePe. The system also includes powerful filters such as date range and transaction type for easy sorting. Admins can debit coins using a dedicated form, and all debited transactions are stored and displayed in a separate Debited History section.I developed both the frontend (Angular) and backend (Express.js + MySQL), ensuring smooth data flow and accurate coin calculations.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "February 2026 - March 2026",
  },
  {
    title: "Login Page",
    description:
      "I developed a secure login module using Angular for the frontend and Express.js for the backend.The login page supports two authentication options: Mobile number login, Email login. The frontend includes form validation, error messages, and a clean UI. On the backend, Express.js handles: User verification, Request validation , API response handling. This module ensures safe authentication and smooth user experience.",
    tech: ["Angular", "Express Js", "MySQL", "CSS Bootstrap"],
    repo: "#",
    period: "June 2024 - August 2024",
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
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-40 shadow-sm navbarport">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              MB
            </div>
            <div>
              <a href="#home" className="text-lg font-semibold phover">
                {profile.name}
              </a>
              <div className="text-xs text-gray-500 phover">
                {profile.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 phover"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 phover"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 phover"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 phover"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 phover"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 phover"
            >
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
    <section id="home" className="min-h-screen flex items-center headsection">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m {profile.name}.
            </h1>
            <h5 className="fullstack">Full Stack Developer</h5>
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
              <div className="tool">{profile.location}</div>
              <div>·</div>
              <div className="tool">Email: {profile.email}</div>
              <div className="tool">
                Present Work Location: {profile.presentWorkLocation}
              </div>
            </div>
          </div>

          <div className="order-first md:order-last flex justify-center md:justify-end boxes">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-50 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">BM</div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • Full Stack Developer
                </div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • Angular
                </div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • React
                </div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • React Native
                </div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • Express.js
                </div>
                <div className="mt-2 text-sm text-gray-500 menubox">
                  • MySQL
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
        <h2 className="text-3xl font-bold mb-6 text-center">
          Technical Skills
        </h2>
        <p className="mb-6 text-center tools">
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
      <h3 className="text-xl font-semibold projecttitle">{project.title}</h3>
      <p className="mt-2 text-gray-600 projectperiod">{project.period}</p>
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
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projects : projects.slice(0, 4);
  // return (
  //   <section id="projects" className="py-16">
  //     <Container>
  //       <h2 className="text-3xl font-bold mb-6">Projects</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //         {projects.map((p) => (
  //           <ProjectCard project={p} key={p.title} />
  //         ))}
  //       </div>
  //     </Container>
  //   </section>
  // );
  return (
    <section id="projects" className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>

        <div className="text-center mt-6">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md"
            >
              More
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded-md"
            >
              Show Less
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}

// --- About ---
function About() {
  return (
    <section id="about" className="py-16 bg-white aboutsection">
      <Container>
        <h2 className="text-3xl font-bold mb-6 text-center">About</h2>
        <h4 className="text-center aboutheading">
          Passionate about creating innovative solutions
        </h4>
        <div class="para">
          <p className="mb-4 text-center">
            I’m a Full Stack Developer who builds fast, responsive, and
            user-friendly web and mobile applications. I work with Angular,
            React, React Native on the frontend, and Express.js with MySQL on
            the backend to create complete end-to-end solutions. I focus on
            clean UI, smooth user experiences, and performance. I’ve also worked
            on a Human Detection project where I built the frontend and
            connected it to a FastAPI backend.
          </p>
          <p className="text-center">
            I enjoy turning complex problems into simple, elegant solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-2 text-gray-700 text-center"></div>
        </div>
        {/* <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
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
        </div> */}
      </Container>
    </section>
  );
}
function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <h2 className="text-3xl mb-6 text-center">Academic Background</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="p-6 rounded-lg shadow bg-gray-50">
          <h3 className="text-xl font-semibold text-center">
            Bachelor of Technology in Computer Science & Engineering
          </h3>
          <p className="text-gray-600 text-center clg">
            Bonam Venkata Chalamayya Institute of Technology and Science,
            Amalapuram
          </p>
          <p className="text-center">2019-2023</p>
          <p className="text-center">CGPA: 7.8/10</p>
        </div>
      </div>
    </section>
  );
}
function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 achievements">
      <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">
            🌟 Certification in Frontend Development
          </h3>
          <p className="text-gray-600">
            Certification on Introduction to Front End Development Course from
            Simplilearn Platform
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">
            🌟 Certification in Python Programming
          </h3>
          <p className="text-gray-600">
            Certification on Python Programming from Cisco Networking Academy
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">
            🌟 Certification in Java Programming
          </h3>
          <p className="text-gray-600">
            Certification on Java Programming from Oracle Academy.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">🌟 Certification in SQL</h3>
          <p className="text-gray-600">
            Certification on SQL from IBM Cognitive Classes.
          </p>
        </div>

        {/* <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">🥇 Hackathon Participation</h3>
          <p className="text-gray-600">
            Participated in college-level hackathon and built a working frontend
            project in 24 hours.
          </p>
        </div> */}

        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">🚀 Human Detection Project</h3>
          <p className="text-gray-600">
            Built the complete frontend UI and integrated it with Machine
            Learning Package FastApi.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center"> */}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thanks — this demo form does not send emails. Replace with your form handler.",
              );
            }}
            className="space-y-4 text-center mb-4"
          >
            <div>
              <label className="block text-gray-700 text-center tool">
                Name
              </label>
              <div className="flex justify-center">
                <input
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 inputfield"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-center tool">
                Email
              </label>
              <div className="flex justify-center">
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 text-center inputfield flex justify-center"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-center tool">
                Message
              </label>
              <div className="flex justify-center">
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 inputfield flex justify-center"
                  rows={5}
                  required
                />{" "}
              </div>
            </div>

            <div>
              <button className="px-5 py-3 bg-indigo-600 text-white rounded-md text-center">
                Send message
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
        <div className="text-sm text-gray-600 text-center tools">
          <div classname="mb-4">
            <p>
              Prefer email? Send a message to <strong>{profile.email}</strong>
            </p>
          </div>
          <div className="tools mobile">Mobile +91-9398857451</div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2 tools">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <a href={profile.github} className="text-indigo-600 tools">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className="text-indigo-600 tools">
                  LinkedIn
                </a>
              </li>
            </ul>
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
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4"> */}
        <div className="tools text-gray-600 text-center">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="tools text-gray-600 text-center">
          Built with passion for innovation and excellence.
        </div>
        {/* </div> */}
      </Container>
    </footer>
  );
}
function Workexperience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Potlam Retail Concepts and Private Limited",
      year: "January 2024 – Present",
      description:
        "Worked on building responsive UIs, reusable components, API integration, and performance improvements using Angular and React.",
    },
    // {
    //   role: "React Developer Intern",
    //   company: "Human Detection Project",
    //   year: "2024",
    //   description:
    //     "Developed the complete frontend interface and integrated it with a FastAPI backend.",
    // },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50" id="experience">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl border border-gray-100"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 company">{exp.company}</p>•
            <span className="font-medium">{exp.year}</span>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
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

        <Projects projects={projects} />

        <Workexperience />
        <About />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
