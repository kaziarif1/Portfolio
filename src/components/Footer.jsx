import { Linkedin, Instagram, Facebook, X, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto text-center space-y-6">
        {/* Name */}
        <h2 className="text-xl md:text-2xl font-bold text-Black-500">
          Connect With Me
        </h2>


        {/* Social Links */}
        <div className="flex justify-center gap-7 text-blacksemibold-500 text-lg">
          <a
            href="https://www.linkedin.com/in/kazi-abu-jafor-arif/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/__.kaza._/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/kaziabujaforarif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <X className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/kaziarif1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          © 2026 kazi arif.co. All rights reserved.
        </p>
      </div>

    </footer>
  );
};