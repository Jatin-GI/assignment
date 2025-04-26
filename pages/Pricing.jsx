// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import PricingCard from "@/components/ui/PricingCard";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { motion } from "framer-motion";
// import { Shield } from "lucide-react";
// import React from "react";

// const Pricing = () => {
//   return (
//     <div>
//       <section id="pricing" className="py-20 bg-white text-gray-800">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Badge className="mb-4 bg-[#63559a]">Pricing</Badge>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Choose the plan that fits your practice size and needs
//             </p>
//           </motion.div>

//           <Tabs
//             defaultValue="monthly"
//             className="w-full max-w-3xl mx-auto mb-12"
//           >
//             <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
//               <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
//               <TabsTrigger value="annual">
//                 Annual Billing (Save 20%)
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="monthly">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//                 <PricingCard
//                   tier="Starter"
//                   price={199}
//                   description="Perfect for small practices just getting started"
//                   features={[
//                     "Up to 3 users",
//                     "Smart scheduling",
//                     "Virtual assistant",
//                     "Basic analytics",
//                     "Email support",
//                   ]}
//                   popular={false}
//                 />

//                 <PricingCard
//                   tier="Professional"
//                   price={399}
//                   description="Ideal for growing medical practices"
//                   features={[
//                     "Up to 10 users",
//                     "All Starter features",
//                     "Insurance verification",
//                     "Advanced analytics",
//                     "Priority support",
//                     "Custom integrations",
//                   ]}
//                   popular={true}
//                 />

//                 <PricingCard
//                   tier="Enterprise"
//                   price={799}
//                   description="For large practices and healthcare networks"
//                   features={[
//                     "Unlimited users",
//                     "All Professional features",
//                     "Custom AI training",
//                     "White-labeling",
//                     "24/7 dedicated support",
//                     "On-premise deployment option",
//                   ]}
//                   popular={false}
//                 />
//               </div>
//             </TabsContent>
//             <TabsContent value="annual">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//                 <PricingCard
//                   tier="Starter"
//                   price={159}
//                   description="Perfect for small practices just getting started"
//                   features={[
//                     "Up to 3 users",
//                     "Smart scheduling",
//                     "Virtual assistant",
//                     "Basic analytics",
//                     "Email support",
//                   ]}
//                   popular={false}
//                 />

//                 <PricingCard
//                   tier="Professional"
//                   price={319}
//                   description="Ideal for growing medical practices"
//                   features={[
//                     "Up to 10 users",
//                     "All Starter features",
//                     "Insurance verification",
//                     "Advanced analytics",
//                     "Priority support",
//                     "Custom integrations",
//                   ]}
//                   popular={true}
//                 />

//                 <PricingCard
//                   tier="Enterprise"
//                   price={639}
//                   description="For large practices and healthcare networks"
//                   features={[
//                     "Unlimited users",
//                     "All Professional features",
//                     "Custom AI training",
//                     "White-labeling",
//                     "24/7 dedicated support",
//                     "On-premise deployment option",
//                   ]}
//                   popular={false}
//                 />
//               </div>
//             </TabsContent>
//           </Tabs>

//           <div className="text-center mt-12">
//             <Alert className="max-w-2xl mx-auto bg-gray-50 text-gray-800">
//               <div className="flex items-center gap-2">
//                 <Shield className="text-[#63559a]" size={18} />
//                 <AlertTitle>Need a custom solution?</AlertTitle>
//               </div>
//               <AlertDescription>
//                 Contact our sales team for a personalized demo and custom
//                 pricing tailored to your specific requirements.
//               </AlertDescription>
//               <Button className="mt-4 bg-[#63559a] hover:bg-opacity-80">
//                 Contact Sales
//               </Button>
//             </Alert>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;
"use client";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/ui/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(""); // Track the active plan

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setActivePlan(plan); // Set the selected plan as active
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
            <Badge className="mb-4 bg-[#63559a]">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  isActive={activePlan === "Starter"} // Highlight active plan
                  onClick={() => handlePlanSelect("Starter")} // Handle selection
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
                  isActive={activePlan === "Professional"} // Highlight active plan
                  onClick={() => handlePlanSelect("Professional")} // Handle selection
                  mostPopular={true} // Visual cue for popular plan
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
                  isActive={activePlan === "Enterprise"} // Highlight active plan
                  onClick={() => handlePlanSelect("Enterprise")} // Handle selection
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
                  isActive={activePlan === "Starter"} // Highlight active plan
                  onClick={() => handlePlanSelect("Starter")} // Handle selection
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
                  isActive={activePlan === "Professional"} // Highlight active plan
                  onClick={() => handlePlanSelect("Professional")} // Handle selection
                  mostPopular={true} // Visual cue for popular plan
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
                  isActive={activePlan === "Enterprise"} // Highlight active plan
                  onClick={() => handlePlanSelect("Enterprise")} // Handle selection
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Alert className="max-w-2xl mx-auto bg-gray-50 text-gray-800">
              <div className="flex items-center gap-2">
                <Shield className="text-[#63559a]" size={18} />
                <AlertTitle>Need a custom solution?</AlertTitle>
              </div>
              <div className="flex flex-col items-center">
                <AlertDescription>
                  Contact our sales team for a personalized demo and custom
                  pricing tailored to your specific requirements.
                </AlertDescription>
                <Button className="mt-4 w-[100px] bg-[#63559a] hover:scale-105 transition-all cursor-pointer">
                  Contact Sales
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
