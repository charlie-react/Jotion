"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <h2>Oops..Something went wrong!</h2>
      <Button asChild>
        <Link href={"/documents"} className="text-xl font-medium">
          Go back home
        </Link>
      </Button>
    </div>
  );
};

export default Error;
