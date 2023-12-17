import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold">Not Found</h1>
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    </main>
  );
}
