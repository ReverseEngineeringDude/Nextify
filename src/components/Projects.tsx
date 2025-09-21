import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
        whileHover={{ 
          y: -10,
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"
            animate={{
              background: isHovered 
                ? 'linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)' 
                : 'linear-gradient(135deg, #1E40AF, #7C3AED)'
            }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
            {project.title.charAt(0)}
          </div>
          
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.featured && (
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-700/50 text-blue-400 rounded-lg border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)'
              : '0 0 0px rgba(59, 130, 246, 0), 0 0 0px rgba(139, 92, 246, 0)'
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'none' }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory, payment processing, and advanced analytics dashboard.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, message encryption, and multimedia support.',
      image: '/api/placeholder/400/300',
      tech: ['Next.js', 'Socket.io', 'OpenAI', 'Redis', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with real-time updates, file sharing, and team analytics.',
      image: '/api/placeholder/400/300',
      tech: ['Vue.js', 'Express', 'MongoDB', 'WebSocket', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data visualization with real-time updates and customizable charts.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout tracking, nutrition planning, and social features.',
      image: '/api/placeholder/400/300',
      tech: ['React Native', 'Firebase', 'Redux', 'Charts', 'Push Notifications'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-chain support, staking features, and DeFi integrations.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Web3.js', 'Solidity', 'MetaMask', 'IPFS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my most impactful and innovative work
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          className="border-t border-gray-700/50 pt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;