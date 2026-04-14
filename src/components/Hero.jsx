import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github } from 'lucide-react';
// Profile image is located in the public directory
const profileAvatar = "/komal_profile_avatar.png";

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        
        {/* Text Content (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-3/5 text-left z-10"
        >
          <span className="inline-block px-3 py-0.5 mb-8 text-md font-bold tracking-[0.2em] text-[#6366f1] uppercase bg-[#6366f1]/10 rounded-lg border border-[#6366f1]/20 w-fit">
            Full Stack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Hi, I'm <span style={{
              background: 'linear-gradient(to right, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Komal Rai</span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
            Architecting robust, scalable, and visually stunning digital experiences using modern cloud technologies and full-stack frameworks.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary px-8 py-2 text-lg shadow-xl shadow-indigo-200">
              Explore Projects <ArrowRight className="ml-3" size={20} />
            </a>
            <a href="https://github.com/KomalRai18" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-5 py-2 text-lg">
              Check GitHub <Github className="ml-3" size={20} />
            </a>
          </div>
        </motion.div>

        {/* Visual Content (Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-2/5 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1] to-[#ec4899] opacity-10 blur-3xl rounded-full scale-150"></div>
          
          <div className="relative w-56 h-56 md:w-80 md:h-80 z-10">
            <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/50 shadow-2xl -rotate-6"></div>
            <img 
              src="/komal_profile_avatar.png" 
              alt="Komal Rai Profile" 
              className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
