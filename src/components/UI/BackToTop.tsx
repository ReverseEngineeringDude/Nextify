import React, { useState, useEffect } from "react";
import { PlusIcon, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";

const SocialMediaMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsExpanded(!isExpanded);

  const socialMediaAccounts = [
    { icon: Facebook, url: "https://facebook.com/share/1FYScvAStm", color: "#1877F2" },
    { icon: Twitter, url: "https://x.com/nextify_s3", color: "#1DA1F2" },
    { icon: Instagram, url: "https://instagram.com/next.ify", color: "#E4405F" },
    { icon: Github, url: "https://github.com/NextifyTech", color: "#000000ff" },
    { icon: Youtube, url: "https://youtube.com/@thenextifytech", color: "#FF0000" },
  ];

  // Only use a left-upper quadrant (arced layout)
  const radius = 150; // distance from button
  const arcAngles = [0, 22.5, 45, 67.5, 90]; // angles in degrees

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative w-14 h-14">
            {socialMediaAccounts.map((account, index) => {
              const angle = (arcAngles[index] * Math.PI) / 180;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const Icon = account.icon;

              return (
                <a
                  key={index}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={account.label}
                  className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: isExpanded
                      ? `translate(${-x}px, ${-y}px) scale(1)`
                      : "translate(0,0) scale(0)",
                    transitionDelay: `${isExpanded ? index * 50 : 0}ms`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: account.color }} />
                </a>
              );
            })}

            {/* Main button */}
            <button
              onClick={toggleMenu}
              className="absolute w-14 h-14 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <PlusIcon
                className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialMediaMenu;
