"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);



  // GSAP scroll animation
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions!;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "body", // 🔥 triggers on full body scroll
            start: "top top",
            end: "bottom top",
            scrub: 1, // makes it smooth during scroll
          },
        });

        tl.to(header, {
          backgroundColor: "rgba(24,24,28,0.8)",
          borderColor: "#404040",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          duration: 0.4,
          marginTop: "10px",

          ease: "power2.out",
          ...(isDesktop && {
            paddingLeft: "10px",
            paddingRight: "10px",
            maxWidth: "950px",
          }),
          ...(isMobile && {
            paddingLeft: "20px",
            paddingRight: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }),
        });

        return () => tl.kill();
      }
    );

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 my-0 px-6 py-4 bg-transparent border border-transparent rounded-[0px] transition-none max-w-6xl mx-auto overflow-x-hidden ">
      <div className="mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.jpg"
              alt="Amir"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-lg text-white">Amir</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          {[
            { name: "About", href: `${process.env.NEXT_PUBLIC_DOMAIN}/#about` },       // scrolls to section
            { name: "Projects", href: `${process.env.NEXT_PUBLIC_DOMAIN}/#projects` }, // scrolls to section
            { name: "Blog", href: "/blogs" },         // goes to page
            { name: "AI Chat", href: "/ai-chat" },   // goes to page
            { name: "FAQ", href: `${process.env.NEXT_PUBLIC_DOMAIN}/#faqs` },           // scrolls to section
            { name: "Links", href: "/links" },       // goes to page
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition"
              scroll={item.href.startsWith("#") ? false : true} // prevents scroll to top for anchor links
            >
              {item.name}
            </Link>
          ))}
        </nav>



        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
          >
            <Phone size={16} /> Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-6 animate-fade-in shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <nav className="flex flex-col gap-3 text-gray-300 bg-black w-[100%] rounded-[15px] p-5 border border-[#404040] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {["About", "Services", "Blog", "AI Chat", "FAQ", "Links"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="py-2 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-3 rounded-lg font-medium hover:bg-yellow-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                <Calendar size={16} /> Contact Us
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
