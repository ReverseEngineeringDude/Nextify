import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const FloatingLabel = ({ label, value, focused }: { label: string; value: string; focused: boolean }) => (
  <motion.label
    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
      focused || value
        ? 'text-blue-400 text-sm -top-2 bg-gray-800 px-2'
        : 'text-gray-400 top-4'
    }`}
    animate={{
      y: focused || value ? -8 : 0,
      scale: focused || value ? 0.85 : 1,
    }}
    transition={{ duration: 0.2 }}
  >
    {label}
  </motion.label>
);

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'alex@example.com', href: 'mailto:alex@example.com' },
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'San Francisco, CA', href: '#' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-blue-600/20 transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: '0 10px 25px -3px rgba(59, 130, 246, 0.3)' 
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                  <FloatingLabel
                    label="Your Name"
                    value={formData.name}
                    focused={focusedField === 'name'}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                  <FloatingLabel
                    label="Your Email"
                    value={formData.email}
                    focused={focusedField === 'email'}
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="Subject"
                  required
                />
                <FloatingLabel
                  label="Subject"
                  value={formData.subject}
                  focused={focusedField === 'subject'}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none resize-none transition-all duration-300"
                  placeholder="Your Message"
                  required
                />
                <FloatingLabel
                  label="Your Message"
                  value={formData.message}
                  focused={focusedField === 'message'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;