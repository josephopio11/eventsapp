"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NotFoundLinks = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="flex flex-row ">
        <h2 className="text-5xl font-bold">404</h2>
        <div className="border-r px-2 mr-2" />
        <p className="">
          The page you are trying <br /> to access ca not be found
        </p>
      </div>
      <div className="flex flex-row mt-10">
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </main>
  );
};

export default NotFoundLinks;
