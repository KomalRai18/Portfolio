import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ title, desc, img, tags, live, git, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative glass p-4 rounded-[2.5rem] hover:rotate-1 transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
  >
    <div className="relative overflow-hidden rounded-[2rem] h-64 mb-6">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div className="flex gap-4">
          <a href={live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
            <ExternalLink size={20} />
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
    
    <div className="px-2 pb-4 flex-grow flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6366f1] transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {desc}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#6366f1] flex items-center hover:translate-x-1 transition-transform">
          Live Demo <ExternalLink size={14} className="ml-1.5" />
        </a>
        <a href={git} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 flex items-center hover:text-gray-800 transition-colors">
          Source <Github size={14} className="ml-1.5" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Campaign Dashboard",
      desc: "A full-stack enterprise resource management platform built with NestJS, React, and PostgreSQL. Features real-time inventory tracking and AI-driven sales forecasting.",
      img: "/dashboard-img.png",
      tags: ["NestJS", "React", "PostgreSQL", "RabbitMQ"],
      live: "https://campaign-dashboard-delta-eight.vercel.app/",
      git: "https://github.com/KomalRai18/campaign-dashboard",
      delay: 0.1
    },
    {
      title: "Products Display Dashboard",
      desc: "A React-based product dashboard using Axios for API integration, React Hook Form + Zod for validation, Tailwind CSS for responsive UI, featuring search, sorting, and optimized state management with hooks.",
      img: "/ecommerce-dashboard.png",
      tags: ["Node.js", "React", "TanStack Query", "React-router-dom"],
      live: "https://product-dashboard-eight-rouge.vercel.app",
      git: "https://github.com/KomalRai18/Product-Dashboard",
      delay: 0.3
    },
    {
      title: "Weather-Forecast-Bot",
      desc: "An intelligent weather forecasting chatbot that delivers real-time, location-based weather insights and multi-day predictions through natural conversational interaction",
      img: "/Forecast-bot-img.png",
      tags: ["Google Dialogflow", "openweatherapi 3.0", "React", "TypeScript", "Node.js"],
      live: "https://bot-weather-forecasta.vercel.app/",
      git: "https://github.com/KomalRai18/Bot-Weather-Forecasta",
      delay: 0.5
    }
  ];

  return (
    <section id="projects" className="section bg-indigo-50/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="mb-3 md:mb-0">
            <h2 className="section-title text-left">Featured Projects</h2>
            <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
              Explore some of my most challenging and impactful full-stack applications, designed with scalability and performance in mind.
            </p>
          </div>
          <a href="https://github.com/KomalRai18" target="_blank" rel="noopener noreferrer" className="btn btn-outline whitespace-nowrap px-8 py-4">
            View All GitHub <Github className="ml-3" size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
