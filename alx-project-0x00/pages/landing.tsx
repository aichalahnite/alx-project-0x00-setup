import React from "react";
import Card from "@/components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      <div className="grid gap-4">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="mt-6 space-x-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm bg-blue-500 text-white px-4 py-2" />
        <Button title="Medium Rounded" styles="text-base rounded-md bg-green-500 text-white px-5 py-2" />
        <Button title="Large Rounded Full" styles="text-lg rounded-full bg-red-500 text-white px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;