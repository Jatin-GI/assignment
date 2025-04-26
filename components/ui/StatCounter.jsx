"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const StatCounter = ({ icon, label, count, suffix = "" }) => {
  const Counter = ({ from, to, duration }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
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

  return (
    <motion.div
      className="flex flex-col items-center bg-white bg-opacity-5 rounded-xl p-4 backdrop-blur-lg border border-white border-opacity-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-secondary text-3xl mb-2">{icon}</div>
      <h3 className="text-4xl font-bold mb-1">
        <Counter from={0} to={count} duration={2} />
        {suffix}
      </h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
