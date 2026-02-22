import { GraduationCap, School, BookOpen } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">
              Web Developer & Competitve Programmer
            </h3>

            <p className="text-muted-foreground">
              Computer Science and Engineering undergraduate at Metropolitan University, Bangladesh, with a strong interest in web development and problem solving. Passionate about building responsive, user-friendly web applications using modern technologies while continuously improving programming and algorithmic skills through competitive programming and real-world projects.
            </p>



            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/public/projects/Kazi Abu Jafor Arif CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* University */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Metropolitan University, Sylhet
                  </h4>
                  <p className="text-muted-foreground">
                    BSc in Computer Science & Engineering <br />
                    CGPA: 3.70 / 4.00 (Running) <br />
                    January 2023 - December 2026
                  </p>
                </div>
              </div>
            </div>

            {/* College */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Scholarshome College, Sylhet
                  </h4>
                  <p className="text-muted-foreground">
                    Higher Secondary Certificate (HSC)<br />
                    GPA: 5 / 5.00 (Science) <br />
                    July 2018 - March 2020
                  </p>
                </div>
              </div>
            </div>

            {/* School */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Jamalganj Govt Model High School
                  </h4>
                  <p className="text-muted-foreground">
                    Secondary School Certificate (SSC) <br />
                    GPA: 4.89 / 5.00 (Science)  <br />
                    January 2013 - February 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
