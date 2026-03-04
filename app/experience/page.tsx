"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase, GraduationCap, ArrowRight, Calendar, ExternalLink,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const jobs = [
  {
    title: "Software Engineer",
    company: "Exlitem India",
    period: "Jan 2024 – Present",
    current: true,
    projectName: "Expert Witness Profiler",
    projectUrl: "https://www.expertwitnessprofiler.com",
    projectDesc:
      "A legal-tech SaaS platform where attorneys order in-depth background reports on expert witnesses. Legal analysts research the expert, store structured data through an internal CMS, and the platform auto-generates a polished PDF report — delivered to the attorney via email on order completion.",
    bullets: [
      "Architected a multi-tenant REST and GraphQL API layer using Django REST Framework and Graphene to serve both the attorney-facing portal and the internal legal analyst dashboard",
      "Integrated the LexisNexis API as the primary data source for expert background data; orchestrated a fleet of Celery workers to fetch, parse, and store research results asynchronously without blocking the main application",
      "Built a dynamic PDF generation engine that compiles structured analyst data into branded, attorney-ready expert witness reports automatically on order completion",
      "Implemented Elasticsearch to power fast, relevance-ranked search across thousands of expert profiles — significantly improving discovery speed for legal analysts",
      "Set up real-time order status updates and analyst notifications using WebSockets, keeping all stakeholders in sync as reports progressed through each stage",
      "Integrated Stripe for order payments and Clerk for secure authentication, role-based access control, and user management across attorney and analyst roles",
      "Wired transactional email services to trigger on key order events — order received, report ready, delivery confirmation — keeping attorneys always informed",
      "Developed the attorney-facing frontend with Nuxt.js and Next.js with full SEO optimisation for a professional, fast-loading user experience",
      "Containerised the entire stack with Docker and deployed on Railway with Cloudflare CDN for global edge caching and DDoS protection",
    ],
    tags: ["Django", "DRF", "GraphQL", "Celery", "LexisNexis API", "Elasticsearch", "WebSockets", "Stripe", "Clerk", "Nuxt.js", "Next.js", "Docker", "Railway", "Cloudflare", "PDF Generation"],
  },
  {
    title: "Software Developer",
    company: "Algoson Software Pvt. Ltd.",
    period: "Dec 2022 – Dec 2023",
    current: false,
    projectName: "Salu — Real Estate Platform",
    projectUrl: "https://salu.co.in",
    projectDesc:
      "A map-driven real estate discovery platform where users explore properties through an interactive spatial interface. Users can draw or select areas to filter listings by desired location, browse individual properties, and explore large-scale real estate developments — all within an intuitive map-first UI.",
    bullets: [
      "Built a highly interactive map-based property browsing experience in Vue.js — users can pan, zoom, draw selection areas, and filter listings by geographic region in real time",
      "Developed the feature for large real estate developers to list entire projects — housing societies and commercial complexes — with multiple units, floor plans, and amenity details",
      "Collaborated directly with clients through requirement-gathering sessions to translate business needs into scalable, maintainable frontend architecture",
      "Integrated GraphQL APIs for efficient, field-level data fetching across property listings, project details, and user preferences — eliminating over-fetching on data-heavy map views",
      "Optimised rendering performance for map views with hundreds of concurrent property markers, significantly improving UI responsiveness on lower-end devices",
      "Implemented SEO best practices across all property listing pages to improve organic discoverability for agents and developers",
    ],
    tags: ["Vue.js", "GraphQL", "Map UI", "Pinia", "SEO", "Performance Optimisation"],
  },
  {
    title: "Software Developer",
    company: "Cloud Infosystem",
    period: "May 2022 – Dec 2022",
    current: false,
    projectName: "Zoho Ecosystem — Enterprise Automation",
    projectUrl: null,
    projectDesc:
      "Worked across the full Zoho product suite to automate and digitise business workflows for enterprise clients — from CRM pipelines and project tracking to accounting and custom application development.",
    bullets: [
      "Participated in direct client meetings to understand existing business processes and identify automation opportunities across sales, finance, and project management",
      "Configured and customised Zoho CRM — pipeline stages, lead assignment rules, custom fields, and workflow automation triggers tailored to each client's sales process",
      "Built custom internal tools and workflow applications using Zoho Creator with Deluge scripting to handle client-specific business logic",
      "Integrated Zoho Books for automated invoicing, payment tracking, and financial reporting — reducing manual accounting effort substantially for clients",
      "Managed end-to-end project tracking setups in Zoho Projects, linking them to CRM data for complete pipeline-to-delivery visibility",
      "Worked closely with cross-functional teams including business analysts, client stakeholders, and QA to deliver complete enterprise solutions on time",
    ],
    tags: ["Zoho CRM", "Zoho Creator", "Zoho Books", "Zoho Projects", "Deluge", "Business Automation"],
  },
  {
    title: "Software Engineer Trainee",
    company: "Trinesis Technologies Pvt. Ltd.",
    period: "Feb 2022 – Apr 2022",
    current: false,
    projectName: "User Management System",
    projectUrl: null,
    projectDesc:
      "A secure, role-based user management system with complete authentication flows — built as a production-ready backend service covering registration, login, password recovery, and access control.",
    bullets: [
      "Designed and developed a complete user registration flow with automated email verification — on successful signup, a confirmation email is dispatched immediately via an integrated mail service",
      "Implemented a secure password reset flow using time-limited tokenised links delivered to the user's registered email address",
      "Built OTP-based login as a two-factor authentication option, adding a strong extra layer of account security beyond passwords",
      "Enforced strict role-based access control (RBAC) — standard users can only read and update their own profile data; superusers have full administrative permissions across all accounts",
      "Designed relational database schemas in PostgreSQL to cleanly store users, roles, permissions, OTP records, and session audit logs",
      "Exposed all functionality through well-structured REST APIs, tested thoroughly for correctness, edge cases, and common security vulnerabilities",
    ],
    tags: ["Python", "Django", "REST API", "PostgreSQL", "Email Service", "OTP Auth", "RBAC", "JWT"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 max-w-5xl mx-auto py-16">

      {/* Page header */}
      <motion.div {...fadeUp(0)} className="mb-12">
        <p className="text-[11px] text-[#39d353] tracking-[0.2em] uppercase mb-2">
          <span className="text-[#145c23]">$ </span>experience
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold text-white leading-tight tracking-tight">
          Work History
        </h1>
        <p className="text-xs text-[#5a7a5c] mt-3 tracking-wider">
          4+ years · 4 companies · full-stack engineering
        </p>
      </motion.div>

      <Separator className="mb-12" />

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#39d353] via-[#145c23] to-transparent" />

        <div className="space-y-10 pl-12">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.05rem] top-6 flex items-center justify-center">
                <span className={`w-3 h-3 rounded-full border-2 border-[#080c08] z-10 relative ${job.current ? "bg-[#39d353] shadow-[0_0_10px_#39d353]" : "bg-[#145c23]"}`} />
                {job.current && (
                  <span className="absolute w-3 h-3 rounded-full bg-[#39d353] animate-ping opacity-60" />
                )}
              </div>

              {/* Card */}
              <div className="rounded-lg border border-[#1c2e1e] bg-[#101810] p-6 transition-all duration-300 group-hover:border-[#145c23] group-hover:translate-x-1">

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Briefcase size={13} className="text-[#39d353]" />
                      <h2 className="font-display text-base font-bold text-white">{job.title}</h2>
                      {job.current && (
                        <Badge variant="default" className="text-[10px] px-2 py-0">current</Badge>
                      )}
                    </div>
                    <p className="text-sm text-[#39d353] ml-5">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#5a7a5c] border border-[#1c2e1e] rounded px-3 py-1 h-fit shrink-0">
                    <Calendar size={11} />
                    {job.period}
                  </div>
                </div>

                {/* Project callout box */}
                <div className="ml-5 mb-5 rounded border border-[#1c2e1e] bg-[#0d1410] px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-[#145c23] tracking-widest">{"// project"}</span>
                    <span className="font-display text-xs font-bold text-[#39d353]">{job.projectName}</span>
                    {job.projectUrl && (
                      <a
                        href={job.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1 text-[10px] text-[#5a7a5c] hover:text-[#39d353] transition-colors"
                      >
                        <ExternalLink size={10} />
                        visit
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6a8a6a] leading-relaxed">{job.projectDesc}</p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 ml-5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#8aaa8a] leading-relaxed">
                      <ArrowRight size={11} className="text-[#145c23] mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 ml-5">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[10px]">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div {...fadeUp(0.7)} className="mt-16">
        <Separator className="mb-10" />
        <p className="text-[11px] text-[#39d353] tracking-[0.2em] uppercase mb-2">
          <span className="text-[#145c23]">$ </span>education
        </p>
        <h2 className="font-display text-2xl font-bold text-white mb-8">Education</h2>

        <div className="rounded-lg border border-[#1c2e1e] bg-[#101810] p-6 hover:border-[#145c23] transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded border border-[#1c2e1e] bg-[#1a2b1a] p-2">
                <GraduationCap size={16} className="text-[#39d353]" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-sm text-[#39d353] mt-0.5">APEX Group of Institution, Rudrapur</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#5a7a5c] border border-[#1c2e1e] rounded px-3 py-1 h-fit shrink-0">
              <Calendar size={11} />
              2018 – 2021
            </div>
          </div>
          <div className="ml-11 rounded border border-[#1c2e1e] bg-[#0d1410] px-4 py-3">
            <p className="text-[10px] text-[#145c23] mb-1.5 tracking-widest">{"// overview"}</p>
            <p className="text-[11px] text-[#6a8a6a] leading-relaxed">
              Three-year undergraduate programme covering core computer science fundamentals — data structures,
              algorithms, database management, operating systems, networking, and software engineering principles.
              Built a strong foundation in programming and system design that directly underpins the full-stack
              engineering work carried out across all professional roles since graduation.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}