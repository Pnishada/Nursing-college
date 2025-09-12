import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProgramsPage from "./pages/ProgramsPage";
import ApplyPage from "./pages/ApplyPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsPage from "./pages/NewsPage";
import FacultyPage from "./pages/FacultyPage";
import EventsPage from "./pages/EventsPage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Contact from "./pages/contact";
import AboutPage from "./pages/AboutPage";
import DownloadsPage from "./pages/DownloadsPage";
import BlogPage from "./pages/BlogPage";
import StudentLifeDashboard from "./pages/StudentLifePage";
import CareersPage from "./pages/CareersPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<DownloadsPage />} />
         <Route path="/blog" element={<BlogPage />} /> 
         <Route path="/student-life" element={<StudentLifeDashboard />} />
         <Route path="/careers" element={<CareersPage />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
