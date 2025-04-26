import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, company, image, content, rating }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>
              {role}, {company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
