import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExpItem = ({ role, company, period, loc, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-[11px] top-[24px] bottom-0 w-0.5 bg-indigo-200 group-last:bg-transparent"></div>
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-white border-4 border-[#6366f1] z-10 group-hover:scale-125 transition-transform duration-300"></div>
    
    <div className="glass p-6 rounded-2xl group-hover:translate-x-2 transition-transform duration-300 shadow-sm hover:shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-800">{role}</h3>
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full flex items-center mt-2 md:mt-0">
          <Calendar size={14} className="mr-1.5" /> {period}
        </span>
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <Briefcase size={14} className="mr-1.5" /> {company}
        <span className="mx-2">•</span>
        <MapPin size={14} className="mr-1.5" /> {loc}
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "TechNexus Innovators",
      period: "2023 - Present",
      loc: "San Francisco, CA (Remote)",
      desc: "• Spearheading the development of a microservices architecture using NestJS and RabbitMQ.\n• Leading a team of 4 to deliver a real-time analytics platform using Socket.io and GraphQL.\n• Optimized PostgreSQL queries, resulting in a 40% reduction in API response times.",
      delay: 0.1
    },
    {
      role: "Full Stack Developer",
      company: "Velocity Software Sudios",
      period: "2021 - 2023",
      loc: "New York, NY",
      desc: "• Designed and implemented full-stack web applications using React.js and Node.js.\n• Integrated Stripe for automated subscription billing and handling high-volume transactions.\n• Managed AWS cloud infrastructure, specializing in S3 for media storage and EC2 for deployments.",
      delay: 0.3
    },
    {
      role: "Junior Web Developer",
      company: "CloudSync Solutions",
      period: "2019 - 2021",
      loc: "Austin, TX",
      desc: "• Developed responsive UI components using Tailwind CSS and React hooks.\n• Built RESTful APIs and managed MongoDB schemas for diverse client projects.\n• Implemented secure JWT and OAuth authentication flows.",
      delay: 0.5
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container max-w-5xl">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">A professional timeline of my technical contributions and architectural achievements.</p>
        
        <div className="mt-20 space-y-4">
          {experiences.map((exp, index) => (
            <ExpItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
