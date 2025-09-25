import React, { useRef, useState } from 'react';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
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

  useScrollAnimations(sectionRef);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['thenextifytech@gmail.com'],
      gradient: 'from-purple-400 to-pink-400',
      action: () => window.open('mailto:thenextifytech@gmail.com')
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+918590319003'],
      gradient: 'from-cyan-400 to-blue-400',
      action: () => window.open('tel:+918590319003')
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

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

  // WhatsApp button handler
  const handleBookCall = () => {
    const phoneNumber = '918590319003';
    const message = encodeURIComponent(
      `Hi! I would like to schedule a call regarding my ${formData.service || 'project'}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="fade-up contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
              Get In Touch
            </h2>
            <p className="fade-up contact-subtitle text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your digital vision to life? Let's start a conversation
              about your project and explore how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="fade-scale contact-card glass-card p-6 hover-tilt hover-glow group text-center cursor-pointer"
                onClick={info.action ? info.action : undefined}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="fade-up contact-form">
              <div className="glass-card p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ...form fields remain unchanged */}
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
                  <div className="text-center py-12 fade-up">
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
            <div className="space-y-8 fade-up">

              {/* Schedule */}
              <div className="contact-card glass-card p-8 hover-glow">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Schedule a Meeting</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Prefer to talk directly? Schedule a free 30-minute consultation
                  to discuss your project in detail.
                </p>
                <button
                  className="btn-secondary w-full hover-tilt"
                  onClick={handleBookCall}
                >
                  Book a Call
                </button>
              </div>

              {/* FAQ */}
              <div className="contact-card glass-card p-8 hover-glow">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
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

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Contact;
