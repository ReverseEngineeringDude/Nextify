import React from 'react';
import '../profile.css'; // Make sure this file is in src or adjust the path

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
  const teamMembers: TeamMember[] = [
    {
      name: 'Praveen MT',
      role: 'Lead, Technical Operations',
      bio: 'Passionate about building scalable tech solutions.',
      image: '/team/praveen.jpeg', // Local image in public/team/
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
      image:
        '/team/krishnapriya.jpeg', // Local image in public/team/
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
      image:
        '/team/prarthana.jpeg', // Local image in public/team/
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
      image:
        '/team/abhinav.jpeg', // Local image in public/team/
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
      image:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#',
        instagram: 'https://www.instagram.com/mrudhhll',
      },
    },
  ];

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="card">
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
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1 .8 2v3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.7 2.2 5 5 5h14c2.7 0 5-2.3 5-5v-14c0-2.8-2.3-5-5-5zM8 19h-3v-9h3v9zM6.5 8.5c-1 0-1.7-.8-1.7-1.8s.8-1.7 1.7-1.7c1 0 1.8.7 1.8 1.7s-.8 1.8-1.8 1.8zM20 19h-3v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.2-1.9 2.5V19h-3v-9h2.8v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2.1 3.7 4.8V19z" />
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M23 2.9a10.5 10.5 0 0 1-3 .8 5.2 5.2 0 0 0 2.3-2.9c-1 .6-2.1 1-3.2 1.2a5.3 5.3 0 0 0-9 4.8 15 15 0 0 1-11-5.6 5.2 5.2 0 0 0 1.6 7 5.2 5.2 0 0 1-2.4-.6v.1a5.3 5.3 0 0 0 4.3 5.1 5.5 5.5 0 0 1-2.4.1 5.3 5.3 0 0 0 5 3.7 10.7 10.7 0 0 1-6.6 2.3A11 11 0 0 1 1 19a15 15 0 0 0 8.2 2.4c9.8 0 15.2-8.2 15.2-15.2v-.7A10.7 10.7 0 0 0 23 2.9z" />
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="currentColor"
                        >
                          <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.88a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76Z" />
                        </svg>
                      </a>
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
