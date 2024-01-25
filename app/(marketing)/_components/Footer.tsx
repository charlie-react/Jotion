"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 dark:bg-[#1F1F1F] bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant={`ghost`} size={`sm`}>
          Privacy Policy
        </Button>
        <Button variant={`ghost`} size={`sm`}>
         Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
