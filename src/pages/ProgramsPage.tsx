// src/pages/ProgramsPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";

interface Program {
  id: string;
  title: string;
  duration: string;
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
    title: "Bachelor of Nursing",
    duration: "4 Years",
    level: "Undergraduate",
    mode: "Full-time",
    price: "Rs.12,000",
    image: "https://images.unsplash.com/photo-1588776814546-d6d0d1f95a48?auto=format&fit=crop&w=800&q=80",
    short: "A comprehensive nursing degree that prepares students for professional healthcare roles.",
    highlights: ["Hands-on clinical practice", "Internationally recognized degree", "State-of-the-art labs"],
  },
  {
    id: "p2",
    title: "Diploma in Medical Laboratory Technology",
    duration: "2 Years",
    level: "Diploma",
    mode: "Full-time",
    price: "Rs. 5,500",
    image: "https://images.unsplash.com/photo-1581092580492-496c9d8c76ff?auto=format&fit=crop&w=800&q=80",
    short: "Gain practical skills in laboratory diagnostics and medical testing techniques.",
    highlights: ["Practical lab experience", "Certified instructors", "Industry placements"],
  },
  {
    id: "p3",
    title: "Postgraduate Certificate in Infection Control",
    duration: "6 Months",
    level: "Postgraduate",
    mode: "Online",
    price: "Rs. 2,000",
    image: "https://images.unsplash.com/photo-1588776814391-8b7a87f6e1b2?auto=format&fit=crop&w=800&q=80",
    short: "Specialized training in infection prevention and control for healthcare professionals.",
    highlights: ["Flexible online learning", "Expert faculty", "Certification upon completion"],
  },
  {
    id: "p4",
    title: "Bachelor of Physiotherapy",
    duration: "4 Years",
    level: "Undergraduate",
    mode: "Full-time",
    price: "Rs.13,500",
    image: "https://images.unsplash.com/photo-1581091870626-23388e02e7df?auto=format&fit=crop&w=800&q=80",
    short: "Prepare for a career in physical therapy and rehabilitation with hands-on clinical training.",
    highlights: ["Patient-centered learning", "Advanced rehab labs", "Internships in hospitals"],
  },
  {
    id: "p5",
    title: "Certificate in Mental Health Counseling",
    duration: "1 Year",
    level: "Certificate",
    mode: "Online",
    price: "Rs.1,800",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
    short: "Develop foundational skills to provide counseling and support for mental health.",
    highlights: ["Online flexible learning", "Expert mentors", "Practical case studies"],
  },
  {
    id: "p6",
    title: "Diploma in Emergency Medical Services",
    duration: "2 Years",
    level: "Diploma",
    mode: "Full-time",
    price: "Rs.6,000",
    image: "https://images.unsplash.com/photo-1581090468565-7987a6f8c41f?auto=format&fit=crop&w=800&q=80",
    short: "Train to become an emergency medical technician with hands-on emergency care skills.",
    highlights: ["Ambulance simulation training", "Certified instructors", "Field practice experience"],
  },
  {
    id: "p7",
    title: "Advanced Diploma in Radiology",
    duration: "1.5 Years",
    level: "Diploma",
    mode: "Blended",
    price: "Rs.7,500",
    image: "https://images.unsplash.com/photo-1581092580493-4f3a5a0f4b3f?auto=format&fit=crop&w=800&q=80",
    short: "Learn advanced diagnostic imaging techniques with modern radiology equipment.",
    highlights: ["Hands-on radiography labs", "Blended learning format", "Professional certification"],
  },
  {
    id: "p8",
    title: "Master of Public Health (MPH)",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "Full-time",
    price: "Rs.15,000",
    image: "https://images.unsplash.com/photo-1581092578240-3e2b2d2d0f1b?auto=format&fit=crop&w=800&q=80",
    short: "Advanced studies in public health management, epidemiology, and health policy.",
    highlights: ["Research-focused curriculum", "Global health exposure", "Capstone projects"],
  },
  {
    id: "p9",
    title: "Short Course in Medical Ethics",
    duration: "3 Months",
    level: "Certificate",
    mode: "Online",
    price: "Rs.900",
    image: "https://images.unsplash.com/photo-1581092580497-dad85f4d10e6?auto=format&fit=crop&w=800&q=80",
    short: "Understand ethical principles in medical practice and patient care.",
    highlights: ["Flexible schedule", "Case study analysis", "Certification included"],
  }
];

// ---------- Badge ----------
function Badge({ children, color = "from-blue-400 to-blue-600" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color}`}>
      {children}
    </span>
  );
}

// ---------- Program Card ----------
function ProgramCard({ p, onOpen }: { p: Program; onOpen: (program: Program) => void }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div onClick={() => setFlipped(!flipped)} className="relative w-full h-64 md:h-72 perspective cursor-pointer">
      <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }} className="relative w-full h-full">
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img src={p.image} alt={p.title} className="w-full h-32 md:h-36 object-cover" />
          <div className="p-4 flex flex-col justify-between h-full">
            <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge>{p.duration}</Badge>
              <Badge>{p.level}</Badge>
              <Badge>{p.mode}</Badge>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotateY-180 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-4 flex flex-col justify-between">
          <p className="text-gray-700 text-sm line-clamp-3">{p.short}</p>
          <ul className="mt-2 space-y-1 text-gray-700 text-sm">
            {p.highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full inline-block" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <div className="font-semibold text-slate-800">{p.price}</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => onOpen(p)}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-blue-700 transition"
            >
              View <ChevronRight size={14} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------- Program Modal ----------
function ProgramModal({ program, onClose }: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <img src={program.image} alt={program.title} className="w-full md:w-1/2 h-64 md:h-full object-cover" />
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-2xl md:text-3xl font-bold">{program.title}</h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">✕</button>
              </div>
              <p className="mt-2 text-gray-500 text-sm">{program.level} • {program.mode} • {program.duration}</p>
              <p className="mt-4 text-gray-700">{program.short}</p>
              <ul className="mt-4 space-y-1 text-gray-700 text-sm">
                {program.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full inline-block" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
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
            <div className="mt-4 text-sm text-gray-500">
              Price: <span className="font-semibold text-slate-800">{program.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  const levels = ["All", "Undergraduate", "Diploma", "Postgraduate", "Certificate"];
  const modes = ["All", "Full-time", "Part-time", "Online", "Blended"];

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
    <Navbar/>
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
            <div className="flex items-center gap-2 flex-1 bg-gray-50 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition">
              <Search size={18} className="text-gray-400" />
              <label htmlFor="search-programs" className="sr-only">Search Programs</label>
              <input
                id="search-programs"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs..."
                className="w-full outline-none text-sm md:text-base bg-transparent placeholder-gray-400"
              />
            </div>

            {/* Level */}
            <div className="flex flex-col">
              <label htmlFor="level-select" className="sr-only">Filter by Level</label>
              <select
                id="level-select"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="text-sm md:text-base px-3 py-2 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                {levels.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {/* Mode */}
            <div className="flex flex-col">
              <label htmlFor="mode-select" className="sr-only">Filter by Mode</label>
              <select
                id="mode-select"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="text-sm md:text-base px-3 py-2 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                {modes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            {/* Sort */}
            <div className="flex flex-col">
              <label htmlFor="sort-select" className="sr-only">Sort Programs</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm md:text-base px-3 py-2 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No programs found</div>
          ) : (
            filtered.map((p) => <ProgramCard key={p.id} p={p} onOpen={setSelectedProgram} />)
          )}
        </div>
      </section>

      <ProgramModal program={selectedProgram} onClose={handleCloseModal} />
    </main>
    <Footer/>
    </>
  );
}
