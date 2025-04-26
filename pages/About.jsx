"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeamMember from "@/components/ui/TeamMember";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Users, Lightbulb, ShieldCheck } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "@/components/ui/CountUp";

// Counter component
const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let start = from;
    const step = Math.abs(to - from) / (duration * 60);
    const interval = 1000 / 60;

    const timer = setInterval(() => {
      start += step;
      setCount(Math.floor(start));

      if ((to > from && start >= to) || (to < from && start <= to)) {
        setCount(to);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#01052f] text-white">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-[#63559a]">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At MediFlow AI, we're dedicated to transforming healthcare
            administration through artificial intelligence, allowing healthcare
            providers to focus on what matters most — patient care.
          </p>
        </motion.div>

        {/* Story and Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://in.gogetwell.ai/assets/our_mission-nN9YP0Qb.gif"
              alt="Team collaboration"
              className="rounded-lg w-full shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="mb-4 text-gray-300">
              Founded in 2021 by a team of healthcare professionals and AI
              specialists, MediFlow AI was born from a simple observation:
              healthcare providers were spending too much time on administrative
              tasks and not enough time with patients.
            </p>
            <p className="mb-6 text-gray-300">
              We set out to build a solution that would automate the most
              time-consuming front office tasks, reduce errors, and improve the
              patient experience from the first point of contact.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <Counter from={0} to={5000} duration={3} />
                <span className="text-3xl font-bold text-[#63559a]">+</span>
                <p className="text-center text-gray-300 mt-2">
                  Healthcare providers using MediFlow
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Counter from={0} to={2} duration={3} />
                <span className="text-3xl font-bold text-[#63559a]">M+</span>
                <p className="text-center text-gray-300 mt-2">
                  Patients served
                </p>
              </div>
            </div> */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <div className="flex justify-between items-center gap-2">
                  <CountUp
                    from={0}
                    to={5000}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-6xl font-bold text-[#63559a]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold"
                  >
                    +
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-2 text-lg font-medium text-white"
                >
                  Healthcare providers using MediFlow
                </motion.div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex justify-between items-center gap-2">
                  <CountUp
                    from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text text-6xl font-bold text-[#63559a]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold"
                  >
                    M+
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-2 text-lg font-medium text-white"
                >
                  Patients served
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        {/* <h3 className="text-2xl font-bold mb-8 text-center">
          Our Leadership Team
        </h3> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Dr. Elena Cortez"
            role="CEO & Co-founder"
            image="/api/placeholder/200/200"
            bio="Former healthcare administrator with 15+ years of experience in medical practice management."
          />
          <TeamMember
            name="David Zhang"
            role="CTO & Co-founder"
            image="/api/placeholder/200/200"
            bio="AI specialist with a background in developing machine learning solutions for healthcare."
          />
          <TeamMember
            name="Dr. James Wilson"
            role="Chief Medical Officer"
            image="/api/placeholder/200/200"
            bio="Board-certified physician with a passion for healthcare innovation and technology."
          />
          <TeamMember
            name="Sarah Patel"
            role="VP of Customer Success"
            image="/api/placeholder/200/200"
            bio="Healthcare consultant specializing in optimizing clinic operations and patient experience."
          />
        </div> */}

        {/* Our Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white bg-opacity-5 border-white border-opacity-10">
              <CardHeader>
                <div className="text-[#63559a] text-3xl mb-2">
                  <Users size={32} />
                </div>
                <CardTitle>Patient-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We build technology that enhances the human connection in
                  healthcare, never replaces it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-5 border-white border-opacity-10">
              <CardHeader>
                <div className="text-[#63559a] text-3xl mb-2">
                  <Lightbulb size={32} />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We are constantly pushing the boundaries to create smarter,
                  faster solutions for healthcare administration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-5 border-white border-opacity-10">
              <CardHeader>
                <div className="text-[#63559a] text-3xl mb-2">
                  <ShieldCheck size={32} />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We uphold the highest standards of honesty, security, and
                  professionalism in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
