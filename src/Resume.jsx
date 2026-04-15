import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  const resumeRef = useRef(null);

  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 }
  ];

  const projects = [
    {
      title: "Task Manager Web App",
      desc: "Full-stack task manager with JWT auth, REST APIs, and responsive UI built for real productivity use.",
      stack: "React • Node.js • MongoDB • Tailwind",
      github: "https://github.com/Tbrainyz",
      live: "#"
    }
  ];

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Gbadebo_Wale_Resume.pdf");
  };

  return (
    <div className={darkMode ? "bg-[#0f172a] text-white min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* NAV */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-sm tracking-widest opacity-60">WALE • PORTFOLIO</h1>

          <div className="flex gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 text-xs border rounded-lg"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            <button
              onClick={downloadPDF}
              className="px-4 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* MAIN CARD */}
        <div
          ref={resumeRef}
          className={darkMode ? "bg-[#020617] rounded-3xl p-8 shadow-xl" : "bg-white rounded-3xl p-8 shadow-xl"}
        >

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Gbadebo Wale
              </h1>

              <p className="text-lg opacity-70">
                Frontend-Focused Full-Stack Developer
              </p>

              <p className="text-sm opacity-60">
                Lagos, Nigeria • gbadebo.wale004@gmail.com
              </p>

              <div className="flex gap-4 text-sm text-blue-500">
                <a href="https://github.com/Tbrainyz" target="_blank">GitHub</a>
                <a href="#">Portfolio</a>
                <a href="#">LinkedIn</a>
              </div>

              <p className="text-sm opacity-80">
                I specialize in building clean, responsive, and scalable web
                applications with strong frontend focus. I turn ideas into
                real-world products with performance and usability in mind.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/public/profile.jpeg"
                alt="profile"
                className="w-64 h-70 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* SKILLS */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm opacity-70 mb-2">
                    {project.desc}
                  </p>

                  <p className="text-xs opacity-50 mb-4">
                    {project.stack}
                  </p>

                  <div className="flex gap-4 text-sm text-blue-500">
                    <a href={project.github} target="_blank">GitHub</a>
                    <a href={project.live}>Live</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>

            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="font-semibold">Freelance Developer</p>
              <p className="text-sm opacity-70">
                Built and delivered full-stack applications, improved UI
                performance, and integrated APIs for real-world use cases.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-sm opacity-70">
              Full-Stack Development Program @ Tech Studio Academy• 2025
            </p>
          </section>
        </div>

        <footer className="text-center text-xs opacity-50 mt-10">
          © 2026 Gbadebo Wale • Built with React
        </footer>
      </div>
    </div>
  );
}
