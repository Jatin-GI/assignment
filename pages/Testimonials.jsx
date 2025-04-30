import { Badge } from "@/components/ui/badge";
import CircularGallery from "@/components/ui/CircularGallery";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { useThemeStore } from "@/stores/themeStore";
import { motion } from "framer-motion";
import React from "react";

const Testimonials = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <section
        id="testimonials"
        className={`border-t border-gray-200  py-20 bg-theme text-theme ${theme}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              className={`mb-4 p-1 bg-[var(--primary)] border border-white ${theme}`}
            >
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-body font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--text)] max-w-2xl mx-auto">
              Healthcare professionals trust MediFlow AI to transform their
              front office operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name="Dr. Sarah Johnson"
                role="Medical Director"
                company="Premier Health Clinic"
                image=""
                content="MediFlow AI has completely transformed our front office operations. We've reduced no-shows by 45% and our staff now spends more time on patient care rather than administrative tasks."
                rating={5}
                className="border border-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name="Michael Chen"
                role="Practice Manager"
                company="Family Care Associates"
                image=""
                content="The insurance verification feature alone has saved us countless hours and thousands of dollars. Our billing errors dropped by 60% in the first month of using MediFlow."
                rating={5}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name="Dr. Rebecca Martinez"
                role="Pediatrician"
                company="Kids First Pediatrics"
                image=""
                content="The 24/7 virtual assistant has been a game-changer for our practice. Parents love being able to schedule appointments and ask questions anytime, and our staff appreciates the reduced call volume."
                rating={4}
              />
            </motion.div>
          </div>
          {/* <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-[800px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  name="Dr. Sarah Johnson"
                  role="Medical Director"
                  company="Premier Health Clinic"
                  image="/api/placeholder/100/100"
                  content="MediFlow AI has completely transformed our front office operations. We've reduced no-shows by 45% and our staff now spends more time on patient care rather than administrative tasks."
                  rating={5}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  name="Michael Chen"
                  role="Practice Manager"
                  company="Family Care Associates"
                  image="/api/placeholder/100/100"
                  content="The insurance verification feature alone has saved us countless hours and thousands of dollars. Our billing errors dropped by 60% in the first month of using MediFlow."
                  rating={5}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  name="Dr. Rebecca Martinez"
                  role="Pediatrician"
                  company="Kids First Pediatrics"
                  image="/api/placeholder/100/100"
                  content="The 24/7 virtual assistant has been a game-changer for our practice. Parents love being able to schedule appointments and ask questions anytime, and our staff appreciates the reduced call volume."
                  rating={4}
                />
              </motion.div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
