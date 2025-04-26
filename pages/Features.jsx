import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Calendar size={24} />,
    title: "Smart Scheduling",
    description:
      "AI-powered scheduling that reduces no-shows by intelligently suggesting optimal appointment times based on patient history.",
    hoverText:
      "Get intelligent appointment suggestions personalized to each patient.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "24/7 Virtual Assistant",
    description:
      "Round-the-clock virtual assistant for patient inquiries, appointment requests, and basic medical guidance.",
    hoverText: "Always available to assist patients, even after-hours.",
  },
  {
    icon: <FileText size={24} />,
    title: "Automated Documentation",
    description:
      "Automatically generate and process patient intake forms, reducing errors and administrative burden.",
    hoverText: "Spend less time on paperwork and more on patient care.",
  },
  {
    icon: <Clock size={24} />,
    title: "Wait Time Reduction",
    description:
      "Optimize patient flow and reduce wait times by predicting busy periods and adjusting scheduling accordingly.",
    hoverText: "Improve clinic efficiency with predictive scheduling.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Insurance Verification",
    description:
      "Automatic verification of insurance coverage before appointments, reducing billing issues and surprises.",
    hoverText: "No more surprises during billing for you or your patients.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Multilingual Support",
    description:
      "Eliminate language barriers with our AI assistant that can communicate with patients in multiple languages.",
    hoverText:
      "Talk to your patients in their preferred language effortlessly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-[#63559a]">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform streamlines your healthcare front office
            operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <HoverCard openDelay={0} closeDelay={100} key={index}>
              <HoverCardTrigger asChild>
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className="bg-[#63559a] p-3 rounded-lg flex justify-center gap-3 items-center text-white mb-4">
                      {feature.icon}
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 absolute top-0 left-0  bg-white/90">
                <p className="text-sm text-gray-600">{feature.hoverText}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
