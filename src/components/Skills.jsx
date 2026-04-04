import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Layers } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
      <Icon className="text-white" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-white bg-opacity-50 text-indigo-700 text-sm font-semibold rounded-lg border border-indigo-100"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "OOP", "HTML5/CSS"],
      delay: 0.1
    },
    {
      title: "Frameworks & Libs",
      icon: Layout,
      skills: ["React.js", "Node.js", "Express.js", "NestJS", "Tailwind CSS"],
      delay: 0.2
    },
    {
      title: "Databases & ORM",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "TypeORM", "Redis"],
      delay: 0.3
    },
    {
      title: "Backend & Messaging",
      icon: Server,
      skills: ["REST API", "GraphQL", "Socket.io", "Rabbit MQ", "gRPC"],
      delay: 0.4
    },
    {
      title: "Cloud & DevOps",
      icon: Cpu,
      skills: ["AWS (S3, EC2)", "Docker", "Git", "Cloudinary", "Multer"],
      delay: 0.5
    },
    {
      title: "Extra Tools",
      icon: Layers,
      skills: ["JWT", "OAuth", "Stripe", "Postman", "Webhooks"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="section bg-white/40 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive collection of tools and technologies I use to build high-performance full-stack applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {skillData.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              icon={category.icon} 
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
