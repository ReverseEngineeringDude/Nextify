import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['thenextifytech@gmail.com'],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['918590319003'],
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Seethi sahib memorial polytechnic college, Tirurangadi, Kerala, India'],
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-Commerce Solutions',
    'Digital Marketing',
    'SEO Optimization',
    'Consulting',
    'Other'
  ];

  useEffect(() => {
    if (inView && sectionRef.current) {
      const tl = gsap.timeline();

      tl.fromTo('.contact-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo('.contact-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo('.contact-card',
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        )
        .fromTo('.contact-form',
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
    }
  }, [inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
              Get In Touch
            </h2>
            <p className="contact-subtitle text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your digital vision to life? Let's start a conversation
              about your project and explore how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card glass-card p-6 hover-tilt hover-glow group text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="contact-form">
              <div className="glass-card p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Praveen MT"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="rea@gmail.com"
                        />
                      </div>
                    </div>

                    {/* Company and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="+91 12345 67890"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      >
                        <option value="" className="bg-gray-900">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-gray-900">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* Success Message */
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Thank you for reaching out! We've received your message and will
                      get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">

              {/* Quick Contact */}
              <div className="contact-card glass-card p-8 hover-glow">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Schedule a Meeting</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Prefer to talk directly? Schedule a free 30-minute consultation
                  to discuss your project in detail.
                </p>
                <button className="btn-secondary w-full hover-tilt">
                  Book a Call
                </button>
              </div>

              {/* FAQ */}
              <div className="contact-card glass-card p-8 hover-glow">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      What's your typical project timeline?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Project timelines vary based on complexity, but most web projects
                      take 4-8 weeks from start to launch.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      Do you provide ongoing support?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Yes, we offer comprehensive maintenance and support packages
                      to keep your project running smoothly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      What's included in your pricing?
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Our quotes include design, development, testing, launch support,
                      and basic training for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Contact;