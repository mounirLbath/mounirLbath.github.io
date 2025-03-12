"use client";
import { useRef } from "react";
import TypeText from "./Components/TypeText";
import Button from "./Components/Button";

export default function Home() {
  const sectionRef = useRef<null | HTMLDivElement>(null);

  // Function to scroll to the next section
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <main className="mx-[10%] sm:mx-[20%]">
        <div className="absolute top-15 left-0 rounded-full w-50 h-50 bg-gradient-to-r from-blue-50 to-blue-400 blur-3xl -z-10"></div>
        <div className="absolute top-60 left-70 sm:left-90 lg:left-150 rounded-full w-100 h-80 bg-gradient-to-r from-blue-50/50 to-blue-400/50 blur-xl -z-10"></div>

        <div className="min-h-dvh">
          <div className="pt-[35vh] mb-0">
            <p className="text-5xl">Hi, my name is</p>
            <p className="font-mono text-7xl mb-15">Mounir Lbath</p>

            <TypeText
              sequence={[
                "I love Math.",
                1000,
                "I love coding.",
                1000,
                "I love Physics.",
                1000,
                "I love Problem Solving.",
                1000,
              ]}
            />
          </div>
          <Button onClick={scrollToSection} className="mt-20 pb-10">
            About me ▼
          </Button>
        </div>
        <div ref={sectionRef}>
          <h1 className="text-3xl font-mono">About me</h1>
          <p>I am a student at Ecole Polytechnique in Paris.</p>
        </div>
      </main>
    </>
  );
}
