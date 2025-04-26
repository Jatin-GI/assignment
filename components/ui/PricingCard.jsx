// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./card";
// import { Badge } from "./badge";
// import { Button } from "./button";
// import { CheckCircle } from "lucide-react";
// const PricingCard = ({ tier, price, description, features, popular }) => {
//   return (
//     <Card
//       className={`h-full relative ${
//         popular ? "border-[#63559a] border-2 shadow-lg" : ""
//       }`}
//     >
//       {popular && (
//         <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#63559a] text-white">
//           Most Popular
//         </Badge>
//       )}
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">{tier}</CardTitle>
//         <div className="mt-2">
//           <span className="text-4xl font-bold">${price}</span>
//           <span className="text-gray-500 ml-1">/month</span>
//         </div>
//         <CardDescription className="mt-3">{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-3">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <CheckCircle size={18} className="text-green-500" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//       <CardFooter>
//         <Button
//           className={`w-full ${
//             popular
//               ? "bg-[#63559a] hover:bg-[#53457a]"
//               : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//           }`}
//         >
//           {popular ? "Start Free Trial" : "Choose Plan"}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default PricingCard;
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { CheckCircle } from "lucide-react";

const PricingCard = ({
  tier,
  price,
  description,
  features,
  popular,
  isActive,
  onClick,
}) => {
  return (
    <Card
      className={`h-full relative ${
        popular ? "border-[#63559a] border-2 shadow-lg" : ""
      } ${isActive ? "border-[#63559a] border-2 hover:border-[#53457a]" : ""}`} // Apply border to active plan
      onClick={onClick} // Handle plan selection
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#63559a] text-white">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{tier}</CardTitle>
        <div className="mt-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
        <CardDescription className="mt-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            popular
              ? "bg-[#63559a] hover:bg-[#53457a]"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {popular ? "Start Free Trial" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
