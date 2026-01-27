import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-12">
      <div className="container mx-auto px-4 text-center md:text-left lg:justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-slate-500 leading-relaxed">
              Create web more interactive and better user experience.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Fast Links</h3>
            <ul className="space-y-2 text-slate-500">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div>&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
