import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";

export default function App() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const [index, setIndex] = useState(0);

  const members = [
  {
    name: "Matúš Koleják",
    role: "Team Leader",
    img: "https://picsum.photos/200?random=1",
    desc: "He is a developer with experience in Java Spring Boot, API integration, and data processing in enterprise solutions. In his bachelor's thesis, he worked with Wolfram Mathematica on a task generator for linear transformations. He also contributed to software development for MeltFlex (robotic arm control and non-planar 3D printing) and has practical experience with Node.js and SAP CAP while working with SAP Datasphere. He has successfully participated in several hackathons."
  },
  {
    name: "Sebastián Lener",
    role: "Frontend Developer",
    img: "https://picsum.photos/200?random=2",
    desc: "He works with PL/SQL and Java (Groovy) and has experience with Business Intelligence solutions in Oracle databases. During his studies, he completed several courses focused on computer and communication networks, which he also utilized when designing a server-side solution for his bachelor's thesis. In that project, he developed a Python-based system for analyzing the Lua programming language, which communicated with the ArangoDB graph database."
  },
  {
    name: "Dominik Zaťovič",
    role: "UI/UX Designer",
    img: "https://picsum.photos/200?random=3",
    desc: "He has experience with web technologies and developing neural networks for data analysis. During his studies, he solved multiple algorithmic tasks and projects in Python and C++. In his bachelor's thesis, he worked with Wolfram Mathematica, where he created a task generator focused on graph theory."
  },
  {
    name: "Ľudovít Vitárius",
    role: "QA Engineer",
    img: "https://picsum.photos/200?random=4",
    desc: "In his bachelor's thesis, he focused on neural networks and has experience with PyTorch, where he implemented his own convolutional WGAN. He can train models using Google Colab and Microsoft Azure and has experience with Wandb and Python, as well as with data analysis libraries such as pandas and scikit-learn. At FIIT, he gained knowledge of Laravel through the WTECH course and experience in data analysis from the IAU course."
  },
  {
    name: "Branislav Trstenský",
    role: "DevOps",
    img: "https://picsum.photos/200?random=5",
    desc: "He has extensive experience with Python, which he also used in his bachelor's thesis. He worked with libraries such as numpy, pandas, gymnasium, and keras (image classification). In addition, he has experience with backend development in JavaScript/TypeScript (databases, authentication, WebSockets) and frontend in Vue.js. He is also skilled in C# and Java."
  },
  {
    name: "Martin Hlaváč",
    role: "Project Manager",
    img: "https://picsum.photos/200?random=6",
    desc: "In his bachelor's thesis, he analyzed the reliability of large language models. He also has knowledge of Python and libraries like pandas and scikit-learn. Furthermore, he can work with C and C++, Bash, and technologies such as Git and Docker. From the OS course, he gained deeper insight into data interaction with software, and thanks to the IAU course, he can effectively process, analyze, and visualize data."
  },
  {
    name: "Roman Košík",
    role: "Data Engineer",
    img: "https://picsum.photos/200?random=7",
    desc: "In his bachelor's thesis, he worked with large language models, implementing and comparing the accuracy of text search using vectors and a vector database. He has experience with the PyTorch framework, Google Cloud, and virtual machines. He also has experience developing web applications using frameworks like Vue.js and React.js."
  },
];

  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () => teamRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

  const prevMember = () => setIndex((index - 1 + members.length) % members.length);
  const nextMember = () => setIndex((index + 1) % members.length);

  return (
    <div className="font-sans text-gray-100 bg-gradient-to-b from-indigo-700 via-slate-800 to-gray-900">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center p-8">
        <img
          src="/dataForgeLogo.svg"
          alt="DataForge Logo"
        />
        <button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-white/90 text-blue-700 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          About Us ↓
        </button>
      </section>

      {/* ABOUT US SECTION */}
      <section
        ref={aboutRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-8"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-300">About Us</h2>
        <p className="max-w-3xl text-gray-200 text-lg leading-relaxed">
          Our team consists of seven master’s students at the Faculty of Informatics and Information Technologies of the Slovak University of Technology: Dominik Zaťovič, Sebastián Lener, Branislav Trstenský, Martin Hlaváč, Roman Košík, Matúš Koleják, and Ľudovít Vitárius. Although we have different backgrounds and study various specializations, we share many common interests and experiences. We believe that we form a highly compatible and versatile team for the group project topics we have chosen. Many of us have skills not only from our studies but also from work experience, extracurricular activities, and technical projects we pursue in our free time.
        </p>
        <button
          onClick={scrollToTeam}
          className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Meet the Team →
        </button>
      </section>

      {/* MEET THE TEAM SECTION */}
      <section
        ref={teamRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Meet the Team</h2>

        <div className="flex items-center">
          <button onClick={prevMember} className="p-3 hover:scale-110 transition">
            <ChevronLeft size={36} />
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center w-80 mx-6"
          >
            <img
              src={members[index].img}
              alt=""
              className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold text-white">{members[index].name}</h3>
            <p className="text-blue-400 font-medium">{members[index].role}</p>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{members[index].desc}</p>
          </motion.div>

          <button onClick={nextMember} className="p-3 hover:scale-110 transition">
            <ChevronRight size={36} />
          </button>
        </div>

        <button
          onClick={scrollToContact}
          className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Contact Us →
        </button>
      </section>

      {/* CONTACT SECTION */}
      <section
        ref={contactRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Contact Us</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          Feel free to reach out to any of us for project collaboration or questions!
        </p>
        <div className="space-y-3 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> team22@example.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-transparent py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Team 22 — Software Engineering Students
      </footer>
    </div>
  );
}
