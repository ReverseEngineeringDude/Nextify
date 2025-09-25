import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Instagram,
  Heart,
  Facebook
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'E-Commerce',
    'Digital Marketing',
    'SEO Optimization',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NextifyTech', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/nextify_s3', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/share/1FYScvAStm', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/next.ify', label: 'Instagram' },
  ];

  const handleSubscribe = () => {
    if (!email) return;
    setSubmitted(true);
    setConfetti(true);
    setTimeout(() => setSubmitted(false), 3000);
    setTimeout(() => setConfetti(false), 1500);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-900/50 pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-6 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <img
                  src="/public/logo.png"
                  alt="Nextify Logo"
                  className="w-full h-full object-contain group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text font-space-grotesk">
                Nextify
              </span>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base max-w-md">
              We're a forward-thinking digital agency transforming ideas into extraordinary digital experiences.
            </p>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <a href="mailto:hello@nextify.com" className="hover:underline break-words">
                  TheNextifyTech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <a href="tel:+918590319003" className="hover:underline">
                  +918590319003
                </a>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 text-gray-300 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="break-words">Seethi Sahib Memorial Polytechnic College, Tirur, Malappuram</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-card p-4 md:p-8 mb-8 md:mb-12">
          <div className="text-center max-w-2xl mx-auto relative">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Stay Updated with Latest Trends
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Subscribe to our newsletter for insights, tips, and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm md:text-base"
              />
              <button
                onClick={handleSubscribe}
                className={`btn-primary px-4 md:px-8 py-2 md:py-3 relative overflow-hidden whitespace-nowrap transition-all duration-300 transform text-sm md:text-base ${submitted ? 'bg-green-500 scale-105' : 'hover:scale-105 hover-tilt'
                  }`}
              >
                {!submitted && 'Subscribe'}
                {submitted && (
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base md:text-lg animate-bounce">
                    ✔ Subscribed!
                  </span>
                )}

                {/* Confetti */}
                {confetti && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <span
                        key={i}
                        className={`absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti`}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 0.5}s`,
                        }}
                      ></span>
                    ))}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                © {currentYear} Nextify. All rights reserved.
              </p>
              <p className="text-xs md:text-sm text-gray-400 flex items-center justify-center lg:justify-start space-x-1 md:space-x-2">
                <span>Made with</span>
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-400 animate-pulse" />
                <span>by the Nextify team</span>
              </p>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:border-transparent hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-2xl md:blur-3xl animate-float"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Confetti CSS */}
      <style>
        {`
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }
          .animate-confetti {
            animation: confetti 1s ease-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;