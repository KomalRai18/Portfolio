import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs for extra visual aesthetic */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6366f1] opacity-5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ec4899] opacity-5 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        {/* <Certificates /> */}
        <GithubSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
