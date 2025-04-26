import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/CountUp";
import StatCounter from "@/components/ui/StatCounter";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  Plus,
} from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="pt-32 pb-16  hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your
                <span className="gradient-text">Healthcare Front Office</span>
                with AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Streamline patient scheduling, automate insurance verification,
                and enhance the patient experience with our intelligent
                assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 p-9 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#63559a] cursor-pointer hover:scale-105 transition-all hover:bg-opacity-80 text-white px-8"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white cursor-pointer border-opacity-20 text-black hover:scale-105 transition-all hover:bg-white hover:bg-opacity-10 px-8"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className=" bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 ">
                {/* <img
                  src="https://s5.ezgif.com/tmp/ezgif-589f9ec0220376.gif"
                  alt="AI Healthcare Assistant Interface"
                  className="rounded-lg w-full"
                /> */}
                <div className="  flex flex-wrap justify-center gap-[100px] ">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between items-center gap-2">
                      <CountUp
                        from={0}
                        to={2100}
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
                      Qualified Doctors
                    </motion.div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex justify-between items-center gap-2">
                      <CountUp
                        from={0}
                        to={1000}
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
                      Hospitals
                    </motion.div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex justify-between items-center gap-2">
                      <CountUp
                        from={0}
                        to={800}
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
                      Treatment Plans
                    </motion.div>
                  </div>
                  {/* <StatCounter
              icon={<Calendar />}
              count={90}
              suffix="%"
              label="Scheduling Efficiency"
            />
            <StatCounter
              icon={<Clock />}
              count={75}
              suffix="%"
              label="Time Saved"
            />
            <StatCounter
              icon={<MessageSquare />}
              count={24}
              suffix="/7"
              label="Patient Support"
            />
            <StatCounter
              icon={<CheckCircle />}
              count={99}
              suffix="%"
              label="Patient Satisfaction"
            /> */}
                </div>
              </div>
            </motion.div>
          </div>

          {/* <div className="  flex flex-wrap justify-center gap-[200px] ">
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center gap-2">
                <CountUp
                  from={0}
                  to={100}
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
                Qualified Doctors
              </motion.div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center gap-2">
                <CountUp
                  from={0}
                  to={100}
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
                Qualified Doctors
              </motion.div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center gap-2">
                <CountUp
                  from={0}
                  to={100}
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
                Qualified Doctors
              </motion.div>
            </div> */}
          {/* <StatCounter
              icon={<Calendar />}
              count={90}
              suffix="%"
              label="Scheduling Efficiency"
            />
            <StatCounter
              icon={<Clock />}
              count={75}
              suffix="%"
              label="Time Saved"
            />
            <StatCounter
              icon={<MessageSquare />}
              count={24}
              suffix="/7"
              label="Patient Support"
            />
            <StatCounter
              icon={<CheckCircle />}
              count={99}
              suffix="%"
              label="Patient Satisfaction"
            /> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
