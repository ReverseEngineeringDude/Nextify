import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const teamMembers: TeamMember[] = [
    {
      name: 'Praveen MT',
      role: 'Lead, Technical Operations',
      bio: 'Passionate about building scalable tech solutions.',
      image: 'https://avatars.githubusercontent.com/u/70425782?v=4',
      social: {
        github: 'https://github.com/ReverseEngineeringDude',
        linkedin: 'https://www.linkedin.com/in/redbytesec',
        twitter: 'https://github.com/ReverseEngineeringDude'
      }
    },
    {
      name: 'Krishna Priya',
      role: 'Design Lead',
      bio: 'Creating beautiful and functional user experiences.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Prarthana',
      role: 'Documentation engineer',
      bio: 'Creating and maintaining clear and concise documentation',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Abhinav Krishna',
      role: 'Financial Strategist',
      bio: 'Driving growth through data-driven financial strategies.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Mrudul Dev',
      role: 'Marketing and Finance',
      bio: 'Driving growth through data-driven marketing strategies.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#'
      }
    }
  ];

  useEffect(() => {
    if (inView && sectionRef.current) {
      const tl = gsap.timeline();

      tl.fromTo('.team-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo('.team-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo('.team-card',
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        );
    }
  }, [inView]);

  return (
    <section id="team" ref={sectionRef} className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="team-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
              Meet Our Team
            </h2>
            <p className="team-subtitle text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A diverse group of passionate professionals dedicated to delivering
              exceptional digital experiences and driving innovation forward.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card glass-card p-8 hover-tilt hover-glow group">

                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {member.social.github && (
                      <a href={member.social.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="text-center">
            <div className="glass-card p-8 hover-glow">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for
                innovation and excellence in digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary hover-tilt">
                  View Open Positions
                </button>
                <button className="btn-secondary hover-tilt">
                  Send Us Your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Team;