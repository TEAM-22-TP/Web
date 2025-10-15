import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";

export default function App() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
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
          // className="w-[320px] sm:w-[420px] md:w-[500px] drop-shadow-2xl select-none"
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
          Náš tím pozostáva zo siedmich študentov inžinierskeho štúdia na Fakulte informatiky a informačných technológií STU: Dominik Zaťovič, Sebastián Lener, Branislav Trstenský, Martin Hlaváč, Roman Košík, Matúš Koleják a Ľudovít Vitárius. Aj keď máme rozličné skúsenosti a študujeme rôzne odbory, máme aj mnohé spoločné záujmy a skúsenosti a veríme že sme silne kompatibilný a všestranný tím pre témy tímových projektov, ktoré sme si vybrali. Mnohí z nás majú zručnosti nielen zo štúdia ale aj z práce, rôznych mimoškolských aktivít alebo z technických aktivít o ktoré sa zaujímame vo voľnom čase.
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
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> contact@team22.dev
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> support@team22.dev
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
