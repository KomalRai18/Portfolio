
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExpItem = ({ role, company, period, loc, desc, delay }) => (
  <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay }}
  viewport={{ once: true }}
  className="relative px-6 py-10"
>
  <div className="absolute left-[11px] top-[24px] bottom-0 w-0.5 bg-indigo-200 group-last:bg-transparent"></div>

  <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-white border-4 border-[#6366f1] z-10 group-hover:scale-125 transition-transform duration-300"></div>

  <div className="glass p-6 md:p-10 rounded-2xl group-hover:translate-x-2 transition-transform duration-300 shadow-sm hover:shadow-md flex flex-col gap-5">
    
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <h3 className="text-xl font-bold text-gray-800">{role}</h3>
      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full flex items-center">
        <Calendar size={14} className="mr-1.5" /> {period}
      </span>
    </div>

    <div className="flex items-center text-gray-500 text-sm">
      <Briefcase size={14} className="mr-1.5" /> {company}
      <span className="mx-2">•</span>
      <MapPin size={14} className="mr-1.5" /> {loc}
    </div>

    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line pt-2">
      {desc}
    </p>
  </div>
</motion.div>
);

const Experience = () => {
  const experiences = [
  {
    role: "FullStack Developer",
    company: "TFG Solutions",
    period: "Nov 2025 - Feb 2026",
    loc: "Karachi, PK",
    desc: "• Developed an event-driven backend notification system using Ejabberd (XMPP) to publish visitor activity updates enabling real-time alerts with low latency and reliable delivery.\n• Implemented real-time frontend notification handling via XMPP connections to receive live backend events.\n• Built frontend dashboard, notification modal, and visitor data tables using React.js and Tailwind CSS.\n• Integrated interactive world maps using Leaflet.js and OpenStreetMap to visualize visitor geolocation data.",
    delay: 0.1
  },
  {
    role: "Backend Developer",
    company: "BlocShip",
    period: "May 2025 - Nov 2025",
    loc: "Karachi, PK",
    desc: "• Implemented modular backend architecture with authentication, middleware layers, and event-driven communication.\n• Built a real-time chat system using NestJS, TypeScript, Socket.io, and Mongoose aggregation pipelines with private/public groups and admin-controlled access.\n• Designed scalable RESTful APIs with advanced aggregations and geospatial queries, improving performance by 30%.\n• Developed automated workflows using cron jobs and integrated AWS S3 and RabbitMQ for file uploading and message logging.",
    delay: 0.3
  },
  {
    role: "MERN Stack Developer",
    company: "DigiTechInfra Associates",
    period: "Jul 2024 - Mar 2025",
    loc: "Karachi, PK",
    desc: "• Contributed to backend development of CRM platforms using NestJS, TypeORM, PostgreSQL, and TypeScript.\n• Developed meeting scheduling and survey modules with strong validation and transactional consistency.\n• Built franchise, lead, and quotation management workflows for ATS India mobile application.\n• Created API documentation with Swagger and designed migration/seed strategies for smooth deployment.",
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
