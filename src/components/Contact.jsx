import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-transparent to-white/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left !mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Have a project in mind or just want to chat about full-stack development? I'm always open to new opportunities and interesting conversations.
            </p>
            
            <div className="space-y-6 mb-10">
              <a href="mailto:raikomal984@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/50 transition-colors group">
                <div className="p-3 bg-indigo-50 text-[#6366f1] rounded-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">Email</h4>
                  <p className="text-gray-500">raikomal984@gmail.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/komal-rai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/50 transition-colors group">
                <div className="p-3 bg-indigo-50 text-[#6366f1] rounded-xl group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">LinkedIn</h4>
                  <p className="text-gray-500">linkedin.com/in/komal-rai</p>
                </div>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/KomalRai18" className="p-4 glass rounded-2xl text-gray-400 hover:text-[#6366f1] transition-all"><Github size={24} /></a>
              <a href="#" className="p-4 glass rounded-2xl text-gray-400 hover:text-indigo-400 transition-all"><Twitter size={24} /></a>
              <a href="#" className="p-4 glass rounded-2xl text-gray-400 hover:text-emerald-400 transition-all"><MessageSquare size={24} /></a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#6366f1] to-[#ec4899] opacity-20 blur-3xl rounded-full"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-4 bg-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-4 bg-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full p-4 bg-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all" placeholder="Project Inquiry" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full p-4 bg-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all" placeholder="How can I help you today?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full py-5 text-xl">
                Send Message <Send size={20} className="ml-3" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
