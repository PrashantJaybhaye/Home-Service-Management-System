import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8 mx-6 md:mx-16">
        <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer font-semibold">Home</h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer font-semibold">Services</h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer font-semibold">About us</h2>
        </div>
      </div>
        <div className="flex ">
          <Button>Get Started</Button>
        </div>
    </div>
  );
}

export default Header;
