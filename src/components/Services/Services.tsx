import React, { useRef, useState } from "react";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  Search,
  BarChart3,
  X,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimations(sectionRef); // 👈 activate animations

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Design",
        "API Integration",
        "Performance Optimization",
      ],
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native",
        "Flutter Development",
        "Native iOS/Android",
        "App Store Optimization",
        "Push Notifications",
      ],
      gradient: "from-cyan-400 to-blue-400",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Complete e-commerce solutions with secure payment processing.",
      features: [
        "Shopify Development",
        "WooCommerce",
        "Payment Integration",
        "Inventory Management",
        "Analytics Dashboard",
      ],
      gradient: "from-green-400 to-emerald-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging and intuitive experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototype Design",
        "Design Systems",
        "Usability Testing",
      ],
      gradient: "from-orange-400 to-red-400",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your online visibility.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy",
        "Performance Tracking",
      ],
      gradient: "from-indigo-400 to-purple-400",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns that deliver measurable results.",
      features: [
        "Social Media Marketing",
        "PPC Campaigns",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Reporting",
      ],
      gradient: "from-pink-400 to-rose-400",
    },
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="services" ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk">
                Our Services
              </h2>
              <p className="fade-up text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to elevate your business
                and create exceptional user experiences across all platforms.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="fade-up glass-card p-8 hover-tilt hover-glow group cursor-pointer"
                  onClick={() => openModal(service)}
                >
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="fade-up text-center mt-16">
              <div className="glass-card p-8 hover-glow">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with our
                  comprehensive digital solutions.
                </p>
                <button className="btn-primary hover-tilt">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl animate-float"></div>
          <div
            className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}
                >
                  <selectedService.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {selectedService.description}
            </p>

            <h4 className="text-xl font-semibold text-white mb-4">
              What's Included:
            </h4>
            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1">Get Started</button>
              <button onClick={closeModal} className="btn-secondary flex-1">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
