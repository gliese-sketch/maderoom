"use client";
import { HeroUIProvider, Button } from "@heroui/react";

export default function Home() {
  const emojis = "😅,😄,😶,😊,😎,😀".split(",");

  const handleClick = (emoji) => {
    console.log(emoji);
  };

  return (
    <HeroUIProvider>
      <div className="min-h-screen flex justify-center items-center flex-col gap-16">
        <h1 className="text-7xl">😅</h1>
        <div className="flex gap-1 flex-wrap justify-center">
          {emojis.map((emoji, index) => {
            return (
              <Button
                key={index}
                variant="bordered"
                className="text-3xl p-5"
                onPress={() => handleClick(emoji)}
              >
                {emoji}
              </Button>
            );
          })}
        </div>
      </div>
    </HeroUIProvider>
  );
}
