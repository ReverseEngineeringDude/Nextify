import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Rocket, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && sectionRef.current) {
      const tl = gsap.timeline();

      tl.fromTo('.about-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo('.about-text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.2 },
          "-=0.4"
        )
        .fromTo('.about-card',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 },
          "-=0.3"
        );
    }
  }, [inView]);

  const features = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We align digital solutions with your business objectives for maximum impact.',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Cutting-edge technology and creative thinking drive every project we deliver.',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Your success is our success. We work as an extension of your team.',
    },
    {
      icon: Award,
      title: 'Excellence Delivered',
      description: 'Award-winning designs and development that exceed industry standards.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="about-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
              About Nextify
            </h2>
            <p className="about-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a forward-thinking digital agency that transforms ambitious ideas into
              extraordinary digital experiences through innovation, creativity, and technical excellence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="about-text">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Pioneering Digital Excellence Since 2019
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded with a vision to revolutionize digital experiences, Nextify has grown from
                  a passionate startup to a recognized leader in cutting-edge web development and
                  digital strategy.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our team of creative designers, skilled developers, and strategic thinkers work
                  collaboratively to deliver solutions that not only meet today's needs but
                  anticipate tomorrow's opportunities.
                </p>
              </div>

              {/* Key Stats */}
              <div className="about-text grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="about-text relative">
              <div className="glass-card p-8 hover-tilt">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                    </div>
                  </div>
                  <ul className="text-gray-300 leading-relaxed list-disc list-inside">
                    <li>Provide digital solutions that help small businesses thrive</li>
                    <li>Bridge students' skills with real business needs</li>
                    <li>Create hands-on learning and product innovation</li>
                    <li>Deliver technology with social responsibility</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="about-card glass-card p-8 hover-tilt hover-glow group">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default About;