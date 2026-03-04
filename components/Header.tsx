"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/",           label: "home",       cmd: "~" },
  { href: "/experience", label: "experience", cmd: "exp" },
  { href: "/skills",     label: "skills",     cmd: "skills" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#1c2e1e] bg-[#080c08]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal
              size={16}
              className="text-[#39d353] group-hover:text-[#39d353] transition-colors"
            />
            <span className="font-display text-sm font-700 tracking-wider text-white">
              puran
              {/* <span className="text-[#39d353]">.dev</span> */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 text-xs tracking-widest uppercase transition-colors duration-200 rounded",
                    isActive
                      ? "text-[#39d353]"
                      : "text-[#5a7a5c] hover:text-[#d4e8d4]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded bg-[#1a2b1a] border border-[#1c2e1e]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    <span className="text-[#145c23] mr-0.5">~/</span>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Status badge */}
          <div className="hidden md:flex items-center gap-2 text-xs text-[#5a7a5c]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39d353] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39d353]" />
            </span>
            open to work
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#5a7a5c] hover:text-[#39d353] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-30 border-b border-[#1c2e1e] bg-[#080c08]/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-2.5 text-xs tracking-widest uppercase rounded border transition-colors",
                      isActive
                        ? "border-[#1c2e1e] bg-[#1a2b1a] text-[#39d353]"
                        : "border-transparent text-[#5a7a5c] hover:text-[#d4e8d4]"
                    )}
                  >
                    <span className="text-[#145c23] mr-1">~/</span>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
