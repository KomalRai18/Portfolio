import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [current, setCurrent] = useState(0);

  const certs = [
    {
      title: "Advanced Fullstack Development",
      issuer: "Udemy / Meta",
      date: "Nov 2024",
      img: "/certificate_mockup.png",
      desc: "Comprehensive certification covering React, Node.js, and cloud deployment strategies."
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Jan 2025",
      img: "/certificate_mockup.png",
      desc: "Validated expertise in developing, deploying, and maintaining applications on AWS."
    },
    {
      title: "Professional Backend Engineering",
      issuer: "Coursera / IBM",
      date: "Feb 2025",
      img: "/certificate_mockup.png",
      desc: "Deep dive into microservices, Docker, Kubernetes, and scalable database design."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % certs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + certs.length) % certs.length);

  return (
    <section id="certificates" className="section bg-white overflow-hidden">
      <div className="container">
        <h2 className="section-title">Verified Credentials</h2>
        <p className="section-subtitle">A showcase of my professional certifications and continuous learning journey.</p>

        <div className="relative mt-12 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-10 glass p-8 md:p-12 rounded-[3rem]"
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#6366f1] to-[#ec4899] opacity-20 blur-2xl rounded-full"></div>
                  <img 
                    src={certs[current].img} 
                    alt={certs[current].title} 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl hover:rotate-1 transition-transform duration-500" 
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 text-left">
                <div className="flex items-center gap-3 text-[#6366f1] mb-6">
                  <Award size={32} />
                  <span className="text-sm font-bold uppercase tracking-widest">{certs[current].issuer}</span>
                </div>
                <h3 className="text-3xl font-extrabold mb-4 leading-tight">{certs[current].title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                  {certs[current].desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Issued: {certs[current].date}</span>
                  <a href="#" className="flex items-center font-bold text-[#6366f1] hover:underline">
                    Verify Link <ExternalLink size={16} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 p-4 glass rounded-full text-gray-500 hover:text-[#6366f1] hover:scale-110 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 p-4 glass rounded-full text-gray-500 hover:text-[#6366f1] hover:scale-110 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {certs.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === i ? 'w-10 bg-[#6366f1]' : 'bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
