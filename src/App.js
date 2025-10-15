import { useState, useRef, useEffect} from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate  } from "react-router-dom";
import Notes from "./Notes";

function Home() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "team") {
      setTimeout(() => {
        teamRef.current.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
    }
  }, [location, navigate]);

  const members = [
    { 
      name: "Matúš Koleják", 
      role: "Team Leader", 
      img: "https://picsum.photos/200?random=1", 
      desc: "Je vývojár so skúsenosťami s Java Spring Boot, integráciou API a spracovaním dát v podnikových riešeniach. V bakalárskej práci pracoval s Wolfram Mathematica na generátore úloh pre lineárne transformácie. Venoval sa aj vývoju softvéru pre MeltFlex (riadenie robotického ramena a neplánárna 3D tlač) a má prax s Node.js a SAP CAP pri práci so SAP Datasphere. Úspešne sa zúčastnil viacerých hackathonov." 
    },
    { 
      name: "Sebastián Lener", 
      role: "Frontend Developer", 
      img: "https://picsum.photos/200?random=2", 
      desc: "Pracuje s PL/SQL, Javou (Groovy) a má skúsenosti s Business Intelligence riešeniami v Oracle databázach. Počas štúdia absolvoval viacero predmetov zameraných na počítačové a komunikačné siete, čo využil aj pri návrhu serverového riešenia vo svojej bakalárskej práci, v ktorej vyvinul systém v Pythone pre analýzu jazyka Lua, ktorý komunikoval s grafovou databázou ArangoDB." 
    },
    { 
      name: "Dominik Zaťovič", 
      role: "UI/UX Designer", 
      img: "https://picsum.photos/200?random=3", 
      desc: "Má skúsenosti s webovými technológiami a tvorbou neurónových sietí na analýzu údajov. V rámci štúdia riešil aj viacero algoritmických úloh a projektov v jazykoch Python a C++. Vo svojej bakalárskej práci pracoval s Wolfram Mathematica, kde vytvoril generátor úloh pre oblasť teórie grafov." 
    },
    { 
      name: "Ľudovít Vitárius", 
      role: "QA Engineer", 
      img: "https://picsum.photos/200?random=4", 
      desc: "Vo svojej bakalárskej práci sa zaujímal o neurónové siete a má skúsenosti s Pytorch, kde implementoval vlastnú konvolučnú WGAN. Vie trénovať siete cez Google Colab a Microsoft Azure. Taktiež má skúsenosti s Wandb a jazykom Python a aj s knižnicami na analýzu dát: pandas a scikit-learn. Na fakulte FIIT nabral znalosti v Laraveli z predmetu WTECH a znalosti o analýze dát z predmetu IAU." 
    },
    { 
      name: "Branislav Trstenský", 
      role: "DevOps", 
      img: "https://picsum.photos/200?random=5", 
      desc: "Má rozsiahle skúsenosti s jazykom Python, ktorý využil aj vo svojej bakalárskej práci. Pracoval s knižnicami numpy, pandas, gymnasium a keras (klasifikácia obrázkov). Okrem toho má skúsenosti s vývojom backendu v JavaScripte/TypeScripte (databázy, autentifikácia, websockety) aj s frontendom vo Vue.js. Zručnosti má aj v C# a Jave." 
    },
    { 
      name: "Martin Hlaváč", 
      role: "Project Manager", 
      img: "https://picsum.photos/200?random=6", 
      desc: "Vo svojej bakalárskej práci analyzoval dôveryhodnosť veľkých jazykových modelov. Okrem toho má znalosti v jazyku Python a knižnicami pandas a scikit-learn. Ďalej dokáže pracovať v jazykoch C a C++, v jazyku Bash a aj s technológiami Git a Docker. Z predmetu OS má hlbšie znalosti o interakcii dát so softvérom a vďaka predmetu IAU dokáže vhodne spracovať, analyzovať a vizualizovať dáta." 
    },
    { 
      name: "Roman Košík", 
      role: "Data Engineer", 
      img: "https://picsum.photos/200?random=7", 
      desc: "Vo svojej bakalárskej práci pracoval s veľkými jazykovými modelmi, implementoval a porovnával presnosť textového vyhľadávania pomocou vektorov a vektorovej databázy, má skúsenosti s frameworkom Pytorch, cloudovým prostredím Google a virtuálnymi strojmi. Taktiež má skúsenosti s vývojom webových aplikácií vo frameworkoch Vue.js alebo React.js." 
    },
  ];


  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
  const prevMember = () => setIndex((index - 1 + members.length) % members.length);
  const nextMember = () => setIndex((index + 1) % members.length);

  return (
    <div className="font-sans text-gray-100 bg-gradient-to-b from-indigo-700 via-slate-800 to-gray-900">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center p-8">
        <img src={process.env.PUBLIC_URL + "/dataForgeLogo.svg"} alt="DataForge logo" />
        <button
          onClick={() => scrollTo(aboutRef)}
          className="mt-10 px-8 py-3 bg-white/90 text-blue-700 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          O nás ↓
        </button>
      </section>

      {/* ABOUT US SECTION */}
      <section
        ref={aboutRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-8"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-300">O nás</h2>
        <p className="max-w-3xl text-gray-200 text-lg leading-relaxed">
          Náš tím pozostáva zo siedmich študentov inžinierskeho štúdia na Fakulte informatiky a informačných technológií STU: Dominik Zaťovič, Sebastián Lener, Branislav Trstenský, Martin Hlaváč, Roman Košík, Matúš Koleják a Ľudovít Vitárius. Aj keď máme rozličné skúsenosti a študujeme rôzne odbory, máme aj mnohé spoločné záujmy a skúsenosti a veríme že sme silne kompatibilný a všestranný tím pre témy tímových projektov, ktoré sme si vybrali. Mnohí z nás majú zručnosti nielen zo štúdia ale aj z práce, rôznych mimoškolských aktivít alebo z technických aktivít o ktoré sa zaujímame vo voľnom čase.        </p>
        <button
          onClick={() => scrollTo(teamRef)}
          className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Spoznaj náš tím ↓
        </button>
      </section>

      {/* MEET THE TEAM SECTION */}
      <section
        ref={teamRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Spoznaj náš tím</h2>

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

        <div className="mt-12 flex gap-6">
          <button
            onClick={() => scrollTo(contactRef)}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Kontakt ↓
          </button>
          <Link
            to="/notes"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Poznámky →
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        ref={contactRef}
        className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Kontakt</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          Neváhajte nás kontaktovať v prípade akýchkoľvek otázok.
        </p>
        <div className="space-y-3 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-400" /> team22@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-transparent py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DataForge — TEAM 22 FIIT
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}