import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      All this is supposed to be yours
      <Button className="px-20">Hello</Button>
    </main>
  );
}
