import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://github.com/Xabhi0811/Oline-Taxi-App">
              <img src="/images/bookmy.png" alt="Ryde App Interface" /></a>
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly Web-App
                called Bookmy 
              </h2>
              <p className="text-white-50 md:text-xl">
                <a href="https://github.com/Xabhi0811/Oline-Taxi-App">An app built with Mern Stack & TailwindCSS for a fast,
                user-friendly experience.</a>
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://github.com/Xabhi0811/Chat-App"a>
                <img 
                 href="https://github.com/Xabhi0811/Chat-App"
                  src="/images/chatapp.png"
                  alt="Library Management Platform"
                /> </a>
              </div>
              <h2><a href="https://github.com/Xabhi0811/Chat-App"a>Grouper</a></h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/payment.png" alt="YC Directory App" />
              </div>
              <h2> <a href=""> Mypay</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
