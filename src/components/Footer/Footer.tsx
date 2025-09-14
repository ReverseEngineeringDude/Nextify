import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/next.ify', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-900/50 pt-20 pb-8">

      {/* Main Footer Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <div className="relative">
                  <Zap className="w-8 h-8 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300" />
                  <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold gradient-text font-space-grotesk">
                  Nextify
                </span>
              </Link>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                We're a forward-thinking digital agency that transforms ambitious ideas
                into extraordinary digital experiences through innovation, creativity,
                and technical excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:hello@nextify.com" className="hover:underline">
                    hello@nextify.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+15551234567" className="hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>123 Innovation Street, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="glass-card p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Trends
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for insights, tips, and updates from the
                world of digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="btn-primary px-8 hover-tilt whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-300 mb-2">
                  © {currentYear} Nextify. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 flex items-center justify-center lg:justify-start space-x-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>by the Nextify team</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:border-transparent hover:scale-110 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Back to Top
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button> */}
            </div>
          </div>

          {/* Powered By Section */}
          <div className="text-center mt-8 pt-6 border-t border-white/5">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 animate-pulse-glow">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">
                Powered by cutting-edge technology and creative innovation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;