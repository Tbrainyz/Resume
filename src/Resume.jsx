import { useState } from "react";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true);

  const phone = "09166197403";
  const whatsappLink = "https://wa.me/2349166197403";

  // ---------------- PDF GENERATOR ----------------
  const generatePDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    let y = 20;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Gbadebo Wale", 20, y);

    y += 6;
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.text("Frontend-Focused Full-Stack Developer", 20, y);

    y += 5;
    pdf.text(`Lagos, Nigeria | ${phone} | gbadebo.wale004@gmail.com`, 20, y);

    y += 5;
    pdf.setTextColor(0, 102, 204);
    pdf.textWithLink("GitHub: https://github.com/Tbrainyz", 20, y, {
      url: "https://github.com/Tbrainyz",
    });

    pdf.setTextColor(0, 0, 0);
    y += 10;

    pdf.setFont("helvetica", "bold");
    pdf.text("PROFESSIONAL SUMMARY", 20, y);

    y += 6;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(
      "Frontend-focused full-stack developer building scalable and responsive web applications using React, Node.js, and MongoDB.",
      20,
      y,
      { maxWidth: 170 },
    );

    y += 14;

    pdf.setFont("helvetica", "bold");
    pdf.text("TECHNICAL SKILLS", 20, y);

    y += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text(
      "React, JavaScript, Tailwind CSS, Node.js, MongoDB, Express",
      20,
      y,
    );

    y += 12;

    pdf.setFont("helvetica", "bold");
    pdf.text("PROJECTS", 20, y);

    y += 6;
    pdf.setFont("helvetica", "bold");
    pdf.text("Task Manager Web Application", 20, y);

    y += 5;
    pdf.setFont("helvetica", "normal");

    const projectPoints = [
      "Built full-stack task manager with authentication (JWT)",
      "Created REST APIs for CRUD operations",
      "Designed responsive UI with React + Tailwind",
      "Integrated frontend and backend seamlessly",
    ];

    projectPoints.forEach((point) => {
      pdf.text(`• ${point}`, 20, y);
      y += 5;
    });

    y += 10;

    pdf.setFont("helvetica", "bold");
    pdf.text("EXPERIENCE", 20, y);

    y += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text(
      "Freelance Developer building responsive web apps, API integration, and UI optimization.",
      20,
      y,
      { maxWidth: 170 },
    );

    pdf.save("Gbadebo_Wale_Resume.pdf");
  };

  // ---------------- UI ----------------
  return (
    <div
      className={
        darkMode
          ? "bg-[#050816] text-white min-h-screen"
          : "bg-gray-50 text-gray-900 min-h-screen"
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* NAV */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-sm tracking-widest opacity-60">
            WALE • DEV PORTFOLIO
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 text-xs border rounded-lg"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <button
              onClick={generatePDF}
              className="px-4 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 shadow-2xl"
        >
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Gbadebo Wale</h1>
            <p className="text-lg opacity-90 mt-2">
              Frontend-Focused Full-Stack Developer
            </p>
            <p className="text-sm opacity-80 mt-1">Lagos, Nigeria • {phone}</p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://github.com/Tbrainyz"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold"
              >
                GitHub
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
              >
                WhatsApp Me
              </a>

              <a
                href="#contact"
                className="border border-white px-4 py-2 rounded-xl text-sm"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/20 blur-3xl rounded-full"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* ABOUT */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">About Me</h2>
            <p className="text-sm opacity-80">
              I build modern, scalable and high-performance web applications
              with strong focus on frontend experience, clean architecture, and
              user-centered design.
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Tailwind",
                "Node.js",
                "MongoDB",
                "Express",
              ].map((s) => (
                <span
                  key={s}
                  className="bg-white/10 px-3 py-1 rounded-full text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* SERVICES (SUBTLE INCOME BOOST) */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Services</h2>
            <ul className="text-sm opacity-80 space-y-2">
              <li>• Frontend Development</li>
              <li>• Full-Stack Web Apps</li>
              <li>• API Integration</li>
              <li>• Responsive UI Design</li>
            </ul>
          </div>

          {/* PROJECT */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Featured Project</h2>
            <h3 className="font-semibold">Task Manager App</h3>
            <p className="text-sm opacity-80 mt-1">
              Full-stack app with authentication, CRUD operations, and task
              tracking.
            </p>

            <div className="flex gap-4 mt-3 text-sm">
              <a
                href="https://fony-frontend-767q.vercel.app/"
                target="_blank"
                className="text-blue-400"
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/Tbrainyz"
                target="_blank"
                className="text-gray-400"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* CONTACT (BOOSTED CONVERSION) */}
          <div
            id="contact"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-3">Hire Me</h2>

            <p className="text-sm opacity-80 mb-4">
              Let’s build your website or web app today.
            </p>

            <a
              href={`mailto:gbadebo.wale004@gmail.com`}
              className="block bg-blue-600 text-white px-4 py-2 rounded-xl text-sm text-center mb-2"
            >
              Send Email
            </a>

            <a
              href={whatsappLink}
              className="block bg-green-500 text-white px-4 py-2 rounded-xl text-sm text-center"
            >
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* FOOTER (NEW - TRUST BOOSTER) */}
        <div className="text-center text-xs opacity-50 mt-10">
          © {new Date().getFullYear()} Gbadebo Wale • Built for freelance &
          full-time opportunities
        </div>
      </div>
    </div>
  );
}
