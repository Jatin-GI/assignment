"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/ui/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import React, { useState } from "react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState("");

  const handlePlanSelect = (plan) => {
    setActivePlan(plan);
  };
  return (
    <div>
      <section id="pricing" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-[var(--primary)]">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-head text-[var(--primary)] font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-[var(--text)] font-body  max-w-2xl mx-auto">
              Choose the plan that fits your practice size and needs
            </p>
          </motion.div>

          <Tabs
            defaultValue="monthly"
            className="w-full max-w-3xl mx-auto mb-12"
          >
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="annual">
                Annual Billing (Save 20%)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <PricingCard
                  tier="Starter"
                  price={199}
                  description="Perfect for small practices just getting started"
                  features={[
                    "Up to 3 users",
                    "Smart scheduling",
                    "Virtual assistant",
                    "Basic analytics",
                    "Email support",
                  ]}
                  popular={false}
                  isActive={activePlan === "Starter"}
                  onClick={() => handlePlanSelect("Starter")}
                />

                <PricingCard
                  tier="Professional"
                  price={399}
                  description="Ideal for growing medical practices"
                  features={[
                    "Up to 10 users",
                    "All Starter features",
                    "Insurance verification",
                    "Advanced analytics",
                    "Priority support",
                    "Custom integrations",
                  ]}
                  popular={true}
                  isActive={activePlan === "Professional"}
                  onClick={() => handlePlanSelect("Professional")}
                />

                <PricingCard
                  tier="Enterprise"
                  price={799}
                  description="For large practices and healthcare networks"
                  features={[
                    "Unlimited users",
                    "All Professional features",
                    "Custom AI training",
                    "White-labeling",
                    "24/7 dedicated support",
                    "On-premise deployment option",
                  ]}
                  popular={false}
                  isActive={activePlan === "Enterprise"}
                  onClick={() => handlePlanSelect("Enterprise")}
                />
              </div>
            </TabsContent>
            <TabsContent value="annual">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <PricingCard
                  tier="Starter"
                  price={159}
                  description="Perfect for small practices just getting started"
                  features={[
                    "Up to 3 users",
                    "Smart scheduling",
                    "Virtual assistant",
                    "Basic analytics",
                    "Email support",
                  ]}
                  popular={false}
                  isActive={activePlan === "Starter"}
                  onClick={() => handlePlanSelect("Starter")}
                />

                <PricingCard
                  tier="Professional"
                  price={319}
                  description="Ideal for growing medical practices"
                  features={[
                    "Up to 10 users",
                    "All Starter features",
                    "Insurance verification",
                    "Advanced analytics",
                    "Priority support",
                    "Custom integrations",
                  ]}
                  popular={true}
                  isActive={activePlan === "Professional"}
                  onClick={() => handlePlanSelect("Professional")}
                />

                <PricingCard
                  tier="Enterprise"
                  price={639}
                  description="For large practices and healthcare networks"
                  features={[
                    "Unlimited users",
                    "All Professional features",
                    "Custom AI training",
                    "White-labeling",
                    "24/7 dedicated support",
                    "On-premise deployment option",
                  ]}
                  popular={false}
                  isActive={activePlan === "Enterprise"}
                  onClick={() => handlePlanSelect("Enterprise")}
                />
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex items-center justify-center border-t border-gray-200 pt-8">
            <div className="text-center mt-12 flex items-center justify-center">
              <div className="max-w-2xl mx-auto bg-[var(--bg-light)] text-[var(--text-dark)]">
                <p>
                  Contact our sales team for a personalized demo and custom
                  pricing tailored to your specific requirements.
                </p>
                <Button className="mt-6 w-[150px]   py-4 text-lg font-medium rounded-lg transition-all duration-300 ease-in-out bg-[var(--primary)] text-white hover:bg-[var(--text)] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
