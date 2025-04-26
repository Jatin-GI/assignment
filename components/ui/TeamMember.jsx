import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-xl">{name}</CardTitle>
          <CardDescription className="text-center">{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
