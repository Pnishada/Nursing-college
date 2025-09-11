import React from "react";
import Hero from "../components/homepageComponents/Hero";
import Navbar from "../components/homepageComponents/Navbar";
import Highlights from "../components/homepageComponents/Highlights";
import Program from "../components/homepageComponents/Programs";
import About from "../components/homepageComponents/About";
import Testimonials from "../components/homepageComponents/Testimonials";
import News from "../components/homepageComponents/News";
import Footer from "../components/homepageComponents/Footer";

export default function Home() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Highlights/>
            <Program/>
            <About/>
            <Testimonials/>
            <News/>
            <Footer/>
        </div>
    );
}