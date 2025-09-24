// src/pages/ProgramsPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";
import Programimg3 from "../assets/images/_DPP3330.jpg";
import Programimg2 from "../assets/images/_DPP3379.jpg";
import Programimg1 from "../assets/images/_DPP3300.jpg";
import { Link } from "react-router-dom";

interface Program {
  id: string;
  title: string;
  duration: string;
  medium: string;
  level: string;
  mode: string;
  price: string;
  image: string;
  short: string;
  highlights: string[];
}

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
}

// ---------- Sample Data ----------
const programs: Program[] = [
  {
    id: "p1",
    title: "Nurse NVQ Level 06 (Higher Diploma in Nursing)",
    duration: "03 Years",
    medium: "English",
    level: "NVQ Level 06",
    mode: "Full-time",
    price: "Rs.12,000",
    image: Programimg1,
    short: "Nurse NVQ Level 06 (Higher Diploma in Nursing).",
    highlights: ["Batch Size: 30 students per batch ", "Curriculum: Attached (Version 0 & Version 1) "],
  },
  {
    id: "p2",
    title: "Caregiver NVQ Level 03",
    duration: "06 months",
    medium: "English",
    level: "NVQ Level 03",
    mode: "Full-time",
    price: "Rs. 5,500",
    image: Programimg2,
    short: "Caregiver NVQ Level 03",
    highlights: ["Batch Size: 30 students per batch ", "Curriculum: Attached (Version 0 & Version 1) "],
  },
  {
    id: "p3",
    title: "Caregiver NVQ Level 04",
    duration: "12 months (including 3 months On-the-Job Training)",
    medium: "English",
    level: "NVQ Level 04",
    mode: "Full-time",
    price: "Rs. 6,500",
    image: Programimg3,
    short: "Caregiver NVQ Level 04.",
    highlights: ["Batch Size: 30 students per batch ", "Curriculum: Attached (Version 0 & Version 1)"],
  },
  {
    id: "p4",
    title: "INDUSTRY COLLABORATIVE APPRENTICESHIP TRAINING CENTER (ICATC) ",
    duration: "18 months (06 Months – Institute Training, 12 Months - OJT)",
    medium: "English",
    level: "NVQ Level 04",
    mode: "Full-time",
    price: "Rs.12,000",
    image: Programimg1,
    short: "Telecommunication Technician NVQ Level 04 ",
    highlights: ["Batch Size: 25 students per batch ", "Curriculum: Attached (Version 1)  "],
  },
];

// ---------- Badge ----------
function Badge({ children, color = "from-pink-500 to-purple-600" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color} shadow`}>
      {children}
    </span>
  );
}

// ---------- Program Card ----------
function ProgramCard({ p, onOpen }: { p: Program; onOpen: (program: Program) => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full h-72 group cursor-pointer"
      onClick={() => onOpen(p)}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
      <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
        <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2">{p.title}</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge>{p.duration}</Badge>
            <Badge color="from-indigo-400 to-indigo-600">{p.level}</Badge>
            <Badge color="from-green-400 to-emerald-600">{p.mode}</Badge>
            <Badge>{p.medium}</Badge>
          </div>
          <div className="mt-3 font-semibold text-blue-600">{p.price}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------- Program Modal ----------
function ProgramModal({ program, onClose }: ProgramModalProps) {
  if (!program) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Left Side Image */}
            <img src={program.image} alt={program.title} className="w-full md:w-1/2 h-64 md:h-full object-cover" />

            {/* Right Side */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl md:text-3xl font-extrabold">{program.title}</h2>
                  <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">✕</button>
                </div>

                <p className="mt-2 text-gray-500 text-sm">
                  {program.level} • {program.mode} • {program.duration}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {program.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full inline-block" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Version Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {program.id !== "p4" ? (
                    <>
                      <Link
                        to={`/downloads/${program.id}/version0`}
                        className="flex-1 flex items-center justify-center gap-2 
                                  bg-gradient-to-r from-indigo-500 to-blue-600 
                                  text-white px-5 py-3 rounded-xl font-semibold shadow-lg"
                      >
                        Version 0 <ChevronRight size={16} />
                      </Link>

                      <Link
                        to={`/downloads/${program.id}/version1`}
                        className="flex-1 flex items-center justify-center gap-2 
                                  bg-gradient-to-r from-green-400 to-emerald-600 
                                  text-white px-5 py-3 rounded-xl font-semibold shadow-lg"
                      >
                        Version 1 <ChevronRight size={16} />
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={`/downloads/${program.id}/version1`}
                      className="w-full flex items-center justify-center gap-2 
                                bg-gradient-to-r from-green-400 to-emerald-600 
                                text-white px-5 py-3 rounded-xl font-semibold shadow-lg"
                    >
                      Version 1 <ChevronRight size={16} />
                    </Link>
                  )}
                </div>


                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`/apply?program=${encodeURIComponent(program.title)}`}
                    className="flex-1 flex items-center justify-center bg-red-500 text-white px-4 py-3 rounded-xl font-semibold shadow hover:bg-red-600 transition"
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 flex items-center justify-center border border-gray-200 px-4 py-3 rounded-xl hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                </div>

                {/* Price */}
                <div className="mt-4 text-sm text-gray-600">
                  Price: <span className="font-semibold text-slate-900">{program.price}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------- Main Page ----------
export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const programTitle = searchParams.get("program");
    if (programTitle) {
      const found = programs.find((p) => p.title === programTitle);
      if (found) setSelectedProgram(found);
    }
  }, [searchParams]);

  const levels = ["All", "NVQ Level 03", "NVQ Level 04", "NVQ Level 06"];
  const modes = ["All", "Full-time", "Part-time"];

  const filtered = useMemo(() => {
    let list = programs.filter((p) => {
      const matchesQuery = [p.title, p.short, p.level].join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesLevel = level === "All" ? true : p.level === level;
      const matchesMode = mode === "All" ? true : p.mode === mode;
      return matchesQuery && matchesLevel && matchesMode;
    });

    if (sortBy === "price-asc") list.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
    else if (sortBy === "price-desc") list.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));

    return list;
  }, [query, level, mode, sortBy]);

  const handleCloseModal = () => {
    setSelectedProgram(null);
    const params = new URLSearchParams(searchParams);
    params.delete("program");
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-12 py-12">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Explore Programs</h1>
              <p className="text-gray-600 mt-2 max-w-xl">Choose from degree, diploma, and short courses designed for modern healthcare professionals.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search programs..."
                  className="w-full outline-none text-sm md:text-base bg-transparent placeholder-gray-400"
                />
              </div>

              {/* Level */}
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="text-sm md:text-base px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                {levels.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>

              {/* Mode */}
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="text-sm md:text-base px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                {modes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-500">No programs found</div>
            ) : (
              filtered.map((p) => <ProgramCard key={p.id} p={p} onOpen={setSelectedProgram} />)
            )}
          </div>
        </section>

        <ProgramModal program={selectedProgram} onClose={handleCloseModal} />
      </main>
      <Footer />
    </>
  );
}
