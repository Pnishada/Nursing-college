import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProgramsPage from "./pages/ProgramsPage";
import About from "./components/homepageComponents/About";
import ApplyPage from "./pages/ApplyPage"
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsPage from "./pages/NewsPage";
import FacultyPage from "./pages/FacultyPage";
import StudentLifePage from "./pages/StudentLifePage";
import EventsPage from "./pages/EventsPage";
import CareersPage from "./pages/CareersPage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/apply" element={<ApplyPage/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/student-life" element={<StudentLifePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
