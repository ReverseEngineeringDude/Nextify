import React, { useRef, useState } from 'react';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import { ExternalLink, Github, X, ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  useScrollAnimations(sectionRef);

  const projects: Project[] = [
    {
      id: 1,
      title: 'The Tea Story - Digital Transformation',
      category: 'Mobile App',
      description:
        'Complete digital transformation for a local tea cafe including digital menu, online ordering system, and promotional campaigns.Results: +35% orders, +50% social engagement, free delivery within 5km radius.',
      longDescription:
        'The Tea Story - Digital Transformation \n Client: The Tea Story - local tea cafe \n  \n Challenge: Needed a digital presence to compete with larger chains and reach more customers \n  \n Solution: Comprehensive digital transformation including: \n  \n Interactive digital menu with online ordering system \n Custom delivery management for 5km radius \n Loyalty program integration \n Social media marketing campaigns \n Results: \n  \n 35% increase in orders \n 50% growth in social media engagement \n Successful implementation of free delivery service \n Improved customer retention through loyalty program',
      image:
        'https://content.jdmagicbox.com/v2/comp/chennai/b6/044pxx44.xx44.240527200455.m3b6/catalogue/the-tea-story-iyyappanthangal-chennai-tea-stalls-78sdqi22ie.jpg',
      technologies: ['Flutter', 'LottieFiles', 'Dart', 'Kotlin', 'Swift'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      category: 'Mobile App',
      description:
        'Full-featured e-commerce mobile application with payment integration.',
      longDescription:
        'A cross-platform mobile application that provides a seamless shopping experience with features including user authentication, product catalog, shopping cart, secure payment processing, and order tracking.',
      image:
        'https://lilacinfotech.com/lilac_assets/images/blog/How-to-Create-a-Shopping-App-for-Your-Business:Features-Cost-and-More.jpg',
      technologies: ['Flutter', 'LottieFiles', 'Dart', 'Kotlin', 'Swift'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'GateWayResort',
      category: 'Web Development',
      description:
        'Comprehensive restaurant management platform with POS integration.',
      longDescription:
        'A Simple Frontend design for a resort website, showcasing services, amenities, and booking options with a modern and responsive layout.',
      image:
        'https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/66/584/691/TGR_Damdama_-_Facade_Day_O/The-Gateway-Resort-Damdama-Lake-Gurgaon-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ReverseEngineeringDude/GateWayResort.git',
      featured: false,
    },
    {
      id: 4,
      title: 'Blind Assist App',
      category: 'Mobile App',
      description: 'A simple flutter app to assist visually disabled person ',
      longDescription:
        'A mobile application designed to assist visually impaired individuals by providing features such as object recognition, text-to-speech conversion, and navigation assistance using Flutter and TensorFlow.',
      image: 'https://i.ytimg.com/vi/3ViGM4Sz7n4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjfYT2LklahoCNux57rl30NiQ5qw',
      technologies: ['Flutter', 'Firebase', 'Call Assist', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ReverseEngineeringDude/Blind-assist.git',
      featured: true,
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
              Our Projects
            </h2>
            <p className="fade-up text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing our latest work and innovative solutions that demonstrate our expertise.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`fade-up filter-button px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category
                    ? 'bg-gradient-to-r from-purple-400 to-cyan-400 text-white'
                    : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card fade-scale glass-card group hover-tilt hover-glow cursor-pointer overflow-hidden"
                onClick={() => openModal(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-sm text-cyan-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-400 to-cyan-400 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={prevProject} className="p-2 text-gray-400 hover:text-white">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextProject} className="p-2 text-gray-400 hover:text-white">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={closeModal} className="p-2 text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 fade-up">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 fade-up">
                  <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                  <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="fade-up">
                  <h4 className="text-xl font-semibold text-white mb-4">Project Links</h4>
                  <div className="space-y-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        className="flex items-center space-x-2 p-3 glass-card hover-glow text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/20">
                <button className="btn-primary flex-1">Start Similar Project</button>
                <button onClick={closeModal} className="btn-secondary flex-1">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
