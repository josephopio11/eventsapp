import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center">
        <div className="flex flex-row ">
          <h2 className="text-5xl font-bold">404</h2>
          <div className="border-r px-2 mr-2" />
          <p className="">
            The page you are trying <br /> to access ca not be found
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
