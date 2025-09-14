import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(buttonsRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 },
        "-=0.6"
      );

    // Floating animation for decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              Next-Gen Digital Solutions
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-space-grotesk"
          >
            <span className="gradient-text block">
              Digital Dreams
            </span>
            <span className="text-white block">
              Made Reality
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We craft cutting-edge digital experiences that push boundaries and
            transform your vision into stunning, interactive reality.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary flex items-center space-x-2 hover-tilt group text-lg px-8 py-4">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="btn-secondary flex items-center space-x-2 hover-tilt group text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '30+', label: 'Projects Completed' },
              { number: '5+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 hover-tilt">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-40 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-20 blur-xl" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;