import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingCardType } from "@/data/data";
import React from "react";
import Feature from "./Feature";

export default function PricingCard({
  name,
  price,
  features,
  cta,
  isPopular,
}: PricingCardType) {
  return (
    <Card
      className={`relative flex flex-col justify-between h-full ${
        isPopular ? "border-2 border-blue-600" : ""
      }`}
    >
      {isPopular && (
        <span className="absolute top-1 right-2 bg-blue-600 text-white text-xs font-semibold p-3 rounded">
          Le plus populaire
        </span>
      )}
      <div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <CardDescription className="text-lg">{price}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow mt-5 mb-6">
          <ul className="flex flex-col items-start gap-3.5">
            {features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter className="mt-auto">
        <Button
          className={`w-full  transition-all py-6 cursor-pointer duration-300 ${
            isPopular
              ? "bg-blue-600 hover:bg-blue-800"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
