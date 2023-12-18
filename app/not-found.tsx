import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NotFoundLinks from "@/components/shared/NotFoundLinks";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundLinks />
      <Footer />
    </>
  );
}
