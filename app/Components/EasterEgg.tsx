"use client";
import { useEffect } from "react";

// Typing "gift" anywhere on the site opens the gift generator
const SECRET = "gift";

const EasterEgg = () => {
  useEffect(() => {
    let typed = "";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
      typed = (typed + e.key.toLowerCase()).slice(-SECRET.length);
      if (typed === SECRET) {
        typed = "";
        window.open("https://mounirlbath.github.io/gift-generator", "_blank");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
};

export default EasterEgg;
