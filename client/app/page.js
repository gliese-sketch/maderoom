"use client";
import { HeroUIProvider, Button } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex justify-center items-center flex-col gap-16">
        <h1 className="text-7xl">😅</h1>
        <div className="flex gap-1 flex-wrap justify-center">
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
          <Button variant="bordered" className="text-3xl p-5">
            😅
          </Button>
        </div>
      </div>
    </HeroUIProvider>
  );
}
