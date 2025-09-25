// hooks/useScrollAnimations.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
    useEffect(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".fade-up, .fade-left, .fade-right, .fade-scale");

        elements.forEach((el) => {
            const animationType = el.classList.contains("fade-left")
                ? { x: -50 }
                : el.classList.contains("fade-right")
                    ? { x: 50 }
                    : el.classList.contains("fade-scale")
                        ? { scale: 0.8 }
                        : { y: 50 }; // default fade-up

            gsap.fromTo(
                el,
                { opacity: 0, ...animationType },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
};
