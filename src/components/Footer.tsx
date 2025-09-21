import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Alex Johnson
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, Three.js & Framer Motion
            </p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
};

export default Footer;