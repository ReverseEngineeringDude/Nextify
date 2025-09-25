import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import '../profile.css'; // Make sure this file exists

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [teamMembers] = useState<TeamMember[]>([
    {
      name: 'Praveen MT',
      role: 'Lead, Technical Operations',
      bio: 'Passionate about building scalable tech solutions.',
      image: '/team/praveen.jpeg',
      social: {
        github: 'https://github.com/ReverseEngineeringDude',
        linkedin: 'https://www.linkedin.com/in/redbytesec',
        twitter: 'https://x.com/RedByteSec',
        instagram: 'https://instagram.com/red_byte.sec',
      },
    },
    {
      name: 'Krishna Priya',
      role: 'Design Lead',
      bio: 'Creating beautiful and functional user experiences.',
      image: '/team/krishnapriya.jpeg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: 'https://www.instagram.com/krshna_pria',
      },
    },
    {
      name: 'Prarthana',
      role: 'Documentation Engineer',
      bio: 'Creating and maintaining clear and concise documentation.',
      image: '/team/prarthana.jpeg',
      social: {
        github: '#',
        linkedin: '#',
        instagram: 'https://www.instagram.com/prarthanaa_a___',
      },
    },
    {
      name: 'Abhinav Krishna',
      role: 'Financial Strategist',
      bio: 'Driving growth through data-driven financial strategies.',
      image: '/team/abhinav.jpeg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: 'https://www.instagram.com/ab.hinv',
      },
    },
    {
      name: 'Mrudul Dev',
      role: 'Marketing and Finance',
      bio: 'Driving growth through data-driven marketing strategies.',
      image: '/team/mruduldev.jpeg',
      social: {
        github: '#',
        linkedin: '#',
        instagram: 'https://www.instagram.com/mrudhhll',
      },
    },
  ]);

  useEffect(() => {
    if (inView && sectionRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        '.team-card',
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
      );
    }
  }, [inView]);

  return (
    <section id="team" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the passionate professionals driving innovation and delivering
            excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-start">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card card">
              {/* Profile Pic */}
              <div className="profile-pic">
                <img src={member.image} alt={member.name} />
                <span className="name">{member.name}</span>
              </div>

              {/* Bottom Content */}
              <div className="bottom">
                <div className="content">
                  <span className="about-me">{member.role}</span>
                  <p className="about-me">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    {Object.entries(member.social).map(([platform, url]) =>
                      url ? (
                        <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                          <span className="social-icon">{platform}</span>
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating background blobs */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-rose-200/40 blur-3xl rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default Team;
