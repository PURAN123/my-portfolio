"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Github, Linkedin, ArrowRight, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const contacts = [
  { icon: Phone,    label: "+91 766 843 9731",        href: "tel:+917668439731" },
  { icon: Mail,     label: "pchandra1002@gmail.com",  href: "mailto:pchandra1002@gmail.com" },
  { icon: Linkedin, label: "LinkedIn",                href: "https://linkedin.com/in/puran-chandra-94a9821bb" },
  { icon: Github,   label: "GitHub",                  href: "https://github.com/PURAN123" },
];

const quickStats = [
  { value: "4+", label: "Years Experience" },
  { value: "4",  label: "Companies" },
  { value: "5+",  label: "Live Products" },
  { value: "10+",label: "Technologies" },
];

const highlights = [
  "Built a legal-tech SaaS (expertwitnessprofiler.com) powering attorney report orders end-to-end — from LexisNexis data ingestion via Celery workers to auto-generated PDFs and email delivery",
  "Developed a map-driven real estate platform (salu.co.in) with interactive geographic property search and large-scale project listings",
  "Designed and shipped secure authentication systems with OTP login, email verification, and tokenised password reset flows",
  "Automated enterprise business workflows across Zoho CRM, Creator, Books, and Projects for multiple clients",
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-20">

      {/* Terminal top bar */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        {/* <span className="ml-3 text-xs text-[#5a7a5c]">puran@portfolio — zsh</span> */}
      </motion.div>

      {/* Prompt */}
      {/* <motion.p {...fadeUp(0.1)} className="text-xs text-[#5a7a5c] mb-3">
        <span className="text-[#39d353]">puran@dev</span>:~$&nbsp;
        <span className="text-[#d4e8d4]">whoami</span>
      </motion.p> */}

      {/* Name */}
      <motion.h1
        {...fadeUp(0.18)}
        className="font-display text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-white mb-4"
      >
        Puran
        <br />
        <span className="text-[#39d353]">Chandra</span>
      </motion.h1>

      {/* Role */}
      <motion.p {...fadeUp(0.26)} className="text-xs text-[#5a7a5c] mb-8 tracking-widest">
        <span className="text-[#145c23]"># </span>
        Full-Stack Software Engineer · 4+ yrs · Pauri Garhwal, India
      </motion.p>

      {/* Summary block */}
      <motion.div
        {...fadeUp(0.34)}
        className="relative max-w-2xl mb-8 rounded bg-[#101810] border border-[#1c2e1e] border-l-[3px] border-l-[#39d353] px-6 py-5"
      >
        <p className="text-[11px] text-[#145c23] mb-2 tracking-widest">{"/* summary */"}</p>
        <p className="text-sm text-[#a8c8a8] leading-relaxed">
          Full-stack engineer who ships real products. Over 4+ years I've designed and built production SaaS applications
          from the ground up — architecting{" "}
          <span className="text-[#39d353]">REST and GraphQL APIs</span> in Django, building rich
          frontends in <span className="text-[#39d353]">Vue.js, Nuxt.js, and Next.js</span>, and wiring together
          complex backend systems involving{" "}
          <span className="text-[#39d353]">Celery task queues, Elasticsearch, and WebSockets</span>.
          <br /><br />
          I care about the full picture — clean API design, responsive UIs, reliable deployments, and integrations
          that actually work in production. Comfortable taking ownership of features end-to-end, collaborating
          directly with clients, and working across the stack wherever the problem needs solving.
          <span className="cursor-blink" />
        </p>
      </motion.div>

      {/* Key highlights */}
      <motion.div {...fadeUp(0.4)} className="max-w-2xl mb-10">
        <p className="text-[11px] text-[#145c23] mb-3 tracking-widest">{"/* key highlights */"}</p>
        <ul className="space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#6a8a6a] leading-relaxed">
              <span className="text-[#39d353] mt-0.5 shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Location */}
      <motion.div {...fadeUp(0.44)} className="flex items-center gap-2 text-xs text-[#5a7a5c] mb-8">
        <MapPin size={12} className="text-[#39d353]" />
        Pauri Garhwal, Uttarakhand, India
      </motion.div>

      {/* Contacts */}
      <motion.div {...fadeUp(0.48)} className="flex flex-wrap gap-3 mb-10">
        {contacts.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-[#1c2e1e] bg-[#1a2b1a] text-[#d4e8d4] text-xs hover:border-[#39d353] hover:text-[#39d353] hover:bg-[rgba(57,211,83,0.06)] transition-all duration-200"
          >
            <Icon size={13} />
            {label}
          </a>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeUp(0.54)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {quickStats.map(({ value, label }) => (
          <div key={label} className="rounded border border-[#1c2e1e] bg-[#101810] px-4 py-4 text-center">
            <p className="font-display text-2xl font-bold text-[#39d353]">{value}</p>
            <p className="text-[10px] text-[#5a7a5c] mt-1 tracking-wider uppercase">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
        <Link
          href="/experience"
          className="group flex items-center gap-2 px-5 py-2.5 rounded border border-[#39d353] bg-[rgba(57,211,83,0.08)] text-[#39d353] text-xs tracking-widest uppercase hover:bg-[rgba(57,211,83,0.15)] transition-all duration-200"
        >
          View Experience
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/skills"
          className="flex items-center gap-2 px-5 py-2.5 rounded border border-[#1c2e1e] text-[#5a7a5c] text-xs tracking-widest uppercase hover:border-[#5a7a5c] hover:text-[#d4e8d4] transition-all duration-200"
        >
          View Skills
        </Link>
      </motion.div>

    </div>
  );
}