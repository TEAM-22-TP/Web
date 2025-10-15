import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const [markdown, setMarkdown] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/notes.md")
      .then((res) => res.text())
      .then((data) => setMarkdown(data))
      .catch(() => setMarkdown("Failed to load notes."));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-slate-800 to-gray-900 text-gray-100 flex flex-col justify-center items-center px-8 py-12">
      <h1 className="text-5xl font-bold text-blue-400 mb-8">Poznámky</h1>

      <div className="prose prose-invert max-w-4xl text-gray-200 text-left">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <button
        onClick={() => navigate("/", { state: { scrollTo: "team" } })}
        className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:scale-105 transition"
      >
        ← Späť na domovskú stránku
      </button>
    </div>
  );
}
