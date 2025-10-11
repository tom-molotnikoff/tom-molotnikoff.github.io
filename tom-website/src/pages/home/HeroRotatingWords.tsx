import { useEffect, useState } from "react";

export default function HeroRotatingWords() {
  const [index, setIndex] = useState(0);
  const phrases = [
    "Software Engineer",
    "Test Team Lead",
    "Cloud Enthusiast",
    "IoT Hobbyist",
  ];
  const [isWaving, setIsWaving] = useState(true);

  useEffect(() => {
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 4000);
    return () => {
      clearTimeout(next);
    };
  }, [index]);

  useEffect(() => {
    if (isWaving) {
      const timeout = setTimeout(() => setIsWaving(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [isWaving]);

  return (
    <section className="min-h-[65vh] flex flex-col items-center justify-center select-none gap-y-20 glass">
      <h1 className="text-5xl md:text-7xl text-center">
        Hey, I'm Tom{" "}
        <span className={`inline-block${isWaving ? " wave" : ""}`}>👋</span>
      </h1>
      <div className="flex items-center justify-center">
        <span
          key={phrases[index]}
          className={`block text-3xl md:text-5xl cursor typewriter-animation`}
        >
          {phrases[index]}
        </span>
      </div>
    </section>
  );
}
