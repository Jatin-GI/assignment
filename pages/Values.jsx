import { motion } from "framer-motion";
import React from "react";

const Values = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#01052f] to-[#080d3a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare providers who are streamlining
              operations and improving patient experience with MediFlow AI.
            </p>
            <motion.button
              className="bg-[#63559a] hover:bg-opacity-80 px-8 py-4 rounded-lg font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your 14-Day Free Trial
            </motion.button>
            <p className="mt-4 text-gray-400">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Values;
