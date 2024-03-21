"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [themePreference, setThemePreference] = useState("light"); // Default to light

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemePreference(prefersDark ? "dark" : "light");
    }
  }, []);

  console.log(themePreference);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <section className={themePreference === "dark" ? "hidden" : "w-full"}>
        <a
          href="https://www.google.com/maps/place/908+McMullen+Booth+Rd,+Clearwater,+FL+33759"
          target="_blank"
        >
          <Image
            src="/forge.png"
            width={500}
            height={500}
            alt="forge logo"
            className="mx-auto"
            priority
          />
        </a>
      </section>
      <section className={themePreference === "light" ? "hidden" : "w-full"}>
        <a
          href="https://www.google.com/maps/place/908+McMullen+Booth+Rd,+Clearwater,+FL+33759"
          target="_blank"
        >
          <Image
            src="/forgewhite.png"
            width={500}
            height={500}
            alt="forge logo"
            className="mx-auto"
          />
        </a>
      </section>
      <h2 className="text-3xl text-center">
        Our online store is currently unavailable, please visit us in person
      </h2>
      <p className="text-xl text-center underline underline-offset-8 decoration-[#99652A] hover:text-[#99652A] cursor-pointer">
        <a
          href="https://www.google.com/maps/place/908+McMullen+Booth+Rd,+Clearwater,+FL+33759"
          target="_blank"
        >
          @ 908 McMullen Booth Rd, Clearwater, FL 33759
        </a>
      </p>
      <h2 className="text-3xl text-center">Thank You</h2>
    </main>
  );
}
