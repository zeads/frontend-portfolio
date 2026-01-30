import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-white border-t border-slate-200 py-8 px-5 mt-20">
      <div className="flex justify-between">
        <p>Fullstack Web Developer based in Indonesia</p>
        <div className="flex gap-2">
          <Link
            href="https://github.com/zeads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ruri-pelinandang-10711175/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.instagram.com/ruri_pelinandang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <Instagram />
          </Link>
        </div>
      </div>
      <div className="flex justify-between mt-5 border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} Ruri Pelinandang</p>
        <p>Powered by Next.js, Tailwind CSS, & Vercel.</p>
      </div>
    </footer>
  );
}
