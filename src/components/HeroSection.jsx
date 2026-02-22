import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container max-w-6xl mx-auto z-10">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center md:justify-start">
             <span className="opacity-0 animate-fade-in">
            <img
              src="/projects/arif.png"
              alt="Kazi Abu Jafor Arif"
              className="w-60 md:w-[300px] object-cover shadow-xl"
            /></span>
          </div>

          {/* RIGHT SIDE - TEXT */}
          <div className="space-y-6 text-center md:text-left">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>

              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}Kazi Abu
              </span>

              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}Jafor Arif
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              A Computer Science & Engineering student and aspiring Web
              Developer, focused on building clean, responsive, and
              user-centric web applications using modern technologies.
            </p>

            <div className="pt-10 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};