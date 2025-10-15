import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";

export default function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [index, setIndex] = useState(0);

  const members = [
    { name: "Member 1", role: "Backend Developer", img: "https://picsum.photos/200?random=1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { name: "Member 2", role: "Frontend Developer", img: "https://picsum.photos/200?random=2", desc: "Eius incidunt dolore corporis vel repudiandae asperiores." },
    { name: "Member 3", role: "UI/UX Designer", img: "https://picsum.photos/200?random=3", desc: "Vitae repellendus dolorum quisquam, aspernatur cupiditate!" },
    { name: "Member 4", role: "QA Engineer", img: "https://picsum.photos/200?random=4", desc: "Temporibus eveniet aliquid consequuntur distinctio dignissimos." },
    { name: "Member 5", role: "DevOps", img: "https://picsum.photos/200?random=5", desc: "Similique voluptate minus cumque corporis laborum est." },
    { name: "Member 6", role: "Project Manager", img: "https://picsum.photos/200?random=6", desc: "Reiciendis beatae at adipisci porro laboriosam nulla." },
    { name: "Member 7", role: "Data Engineer", img: "https://picsum.photos/200?random=7", desc: "Consequatur earum nesciunt accusantium itaque numquam quas." },
  ];

  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

  const prevMember = () => setIndex((index - 1 + members.length) % members.length);
  const nextMember = () => setIndex((index + 1) % members.length);

  return (
    <div className="font-sans text-gray-100">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 to-slate-800 text-white text-center p-8">
        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Team 22
        </motion.h1>
        <p className="text-lg mb-8 max-w-xl opacity-90">
          We are seven passionate software engineering students who love creating, solving, and building together.
        </p>
        <button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-white/90 text-blue-700 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Meet Us ↓
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 to-gray-900 text-center px-6"
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
            className="bg-gray-800 rounded-2xl shadow-xl p-8 text-center w-80 mx-6"
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

        {/* Move contact button here */}
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
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-900 to-slate-800 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Contact Us</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          Feel free to reach out to any of us for project collaboration or questions!
        </p>
        <div className="space-y-3 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> team22@example.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> contact@team22.dev
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> support@team22.dev
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Team 22 — Software Engineering Students
      </footer>

    </div>
  );
}
