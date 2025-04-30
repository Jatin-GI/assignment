// import { Button } from "@/components/ui/button";
// import CountUp from "@/components/ui/CountUp";
// import { useThemeStore } from "@/stores/themeStore";
// import { motion } from "framer-motion";
// import React from "react";

// const Hero = () => {
//   const theme = useThemeStore((state) => state.theme);

//   // Conditional text content based on the theme
//   const getHeroText = (theme) => {
//     switch (theme) {
//       case "theme-organ":
//         return (
//           <>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6">
//               Transform Your{" "}
//               <span className="text-[var(--primary)]">
//                 Healthcare Front Office
//               </span>{" "}
//               with AI
//             </h1>
//             <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-lg mx-auto lg:mx-0">
//               Streamline patient scheduling, automate insurance verification,
//               and enhance the patient experience with our intelligent assistant.
//             </p>
//           </>
//         );
//       case "theme-cosmetic":
//         return (
//           <>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6">
//               Revolutionize Your{" "}
//               <span className="text-[var(--primary)]">
//                 Healthcare Operations
//               </span>{" "}
//               with AI
//             </h1>
//             <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-lg mx-auto lg:mx-0">
//               Simplify patient management, accelerate insurance processes, and
//               boost patient satisfaction with our next-gen AI assistant.
//             </p>
//           </>
//         );
//       case "theme-ai":
//         return (
//           <>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6">
//               Enhance Your{" "}
//               <span className="text-[var(--primary)]">
//                 Healthcare Experience
//               </span>{" "}
//               with AI
//             </h1>
//             <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-lg mx-auto lg:mx-0">
//               Our AI assistant takes your patient experience to the next level
//               with intelligent automation and personalized care solutions.
//             </p>
//           </>
//         );
//       default:
//         return (
//           <>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6">
//               Empower Your{" "}
//               <span className="text-[var(--primary)]">
//                 Healthcare Workforce
//               </span>{" "}
//               with AI
//             </h1>
//             <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-lg mx-auto lg:mx-0">
//               Automate workflows and improve operational efficiency with our
//               AI-driven solutions tailored for healthcare providers.
//             </p>
//           </>
//         );
//     }
//   };

//   return (
//     <div className={`${theme} h-screen transition-colors duration-500`}>
//       <section className="pt-[250px] pb-16 bg-[var(--bg)] text-[var(--text)] font-body">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center">
//             <motion.div
//               className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {getHeroText(theme)}
//               <div className="flex flex-col sm:flex-row gap-4 p-9 justify-center lg:justify-start">
//                 <Button
//                   size="lg"
//                   className="bg-[var(--primary)] text-white hover:opacity-90 px-8"
//                 >
//                   Start Free Trial
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)] hover:bg-opacity-20 px-8"
//                 >
//                   Watch Demo
//                 </Button>
//               </div>
//             </motion.div>

//             <motion.div
//               className="lg:w-1/2"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <div className="bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 ">
//                 <div className="flex flex-wrap justify-center gap-[100px]">
//                   <div className="flex flex-col items-center">
//                     <div className="flex justify-between items-center gap-2">
//                       <CountUp
//                         from={0}
//                         to={2100}
//                         separator=","
//                         direction="up"
//                         duration={1}
//                         className="count-up-text text-6xl font-bold text-[var(--primary)]"
//                       />
//                       <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-5xl font-bold text-[var(--primary)]"
//                       >
//                         +
//                       </motion.div>
//                     </div>
//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6 }}
//                       viewport={{ once: true }}
//                       className="mt-2 text-lg font-medium text-[var(--text)]"
//                     >
//                       Qualified Doctors
//                     </motion.div>
//                   </div>

//                   <div className="flex flex-col items-center">
//                     <div className="flex justify-between items-center gap-2">
//                       <CountUp
//                         from={0}
//                         to={1000}
//                         separator=","
//                         direction="up"
//                         duration={1}
//                         className="count-up-text text-6xl font-bold text-[var(--primary)]"
//                       />
//                       <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-5xl font-bold text-[var(--primary)]"
//                       >
//                         +
//                       </motion.div>
//                     </div>
//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6 }}
//                       viewport={{ once: true }}
//                       className="mt-2 text-lg font-medium text-[var(--text)]"
//                     >
//                       Hospitals
//                     </motion.div>
//                   </div>

//                   <div className="flex flex-col items-center">
//                     <div className="flex justify-between items-center gap-2">
//                       <CountUp
//                         from={0}
//                         to={800}
//                         separator=","
//                         direction="up"
//                         duration={1}
//                         className="count-up-text text-6xl font-bold text-[var(--primary)]"
//                       />
//                       <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-5xl font-bold text-[var(--primary)]"
//                       >
//                         +
//                       </motion.div>
//                     </div>
//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6 }}
//                       viewport={{ once: true }}
//                       className="mt-2 text-lg font-medium text-[var(--text)]"
//                     >
//                       Treatment Plans
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;
"use client";

import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/CountUp";
import { useThemeStore } from "@/stores/themeStore";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const theme = useThemeStore((state) => state.theme);

  const getHeroText = (theme) => {
    switch (theme) {
      case "theme-organ":
        return (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6 leading-tight">
              Transform Your{" "}
              <span className="text-[var(--primary)]">
                Healthcare Front Office
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-xl mx-auto lg:mx-0">
              Streamline patient scheduling, automate insurance verification,
              and enhance the patient experience with our intelligent assistant.
            </p>
          </>
        );
      case "theme-cosmetic":
        return (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6 leading-tight">
              Revolutionize Your{" "}
              <span className="text-[var(--primary)]">
                Healthcare Operations
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-xl mx-auto lg:mx-0">
              Simplify patient management, accelerate insurance processes, and
              boost patient satisfaction with our next-gen AI assistant.
            </p>
          </>
        );
      case "theme-ai":
        return (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6 leading-tight">
              Enhance Your{" "}
              <span className="text-[var(--primary)]">
                Healthcare Experience
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-xl mx-auto lg:mx-0">
              Our AI assistant takes your patient experience to the next level
              with intelligent automation and personalized care solutions.
            </p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold mb-6 leading-tight">
              Empower Your{" "}
              <span className="text-[var(--primary)]">
                Healthcare Workforce
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl text-[var(--text)] opacity-80 mb-8 max-w-xl mx-auto lg:mx-0">
              Automate workflows and improve operational efficiency with our
              AI-driven solutions tailored for healthcare providers.
            </p>
          </>
        );
    }
  };

  const stats = [
    { label: "Qualified Doctors", value: 2100 },
    { label: "Hospitals", value: 1000 },
    { label: "Treatment Plans", value: 800 },
  ];

  return (
    <div className={`${theme}  h-screen transition-colors duration-500`}>
      <section className="relative pt-[250px] pb-16 bg-[var(--bg)] text-[var(--text)] font-body overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--primary)]/10 to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getHeroText(theme)}

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[var(--primary)] text-white hover:opacity-90 px-8"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)] hover:bg-opacity-20 px-8"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center bg-white/5 rounded-xl p-4 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <CountUp
                          from={0}
                          to={stat.value}
                          separator=","
                          direction="up"
                          duration={1}
                          className="text-6xl font-bold text-[var(--primary)]"
                        />
                        <span className="text-5xl font-bold text-[var(--primary)]">
                          +
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-medium text-[var(--text)] opacity-90">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
