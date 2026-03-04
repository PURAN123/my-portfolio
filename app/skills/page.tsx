"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Server, Globe, Search, Cloud, CreditCard, Database } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const skillGroups = [
  {
    category: "Backend",
    icon: Server,
    comment: "// core server-side stack",
    description:
      "Primary engineering domain. Designs and builds production-grade REST and GraphQL APIs in Django — from data modelling and serialisation to auth, permissions, and background task orchestration with Celery.",
    skills: [
      { name: "Python",                level: 95 },
      { name: "Django",                level: 92 },
      { name: "Django REST Framework", level: 90 },
      { name: "GraphQL (Graphene)",    level: 82 },
      { name: "Celery",                level: 80 },
    ],
    tags: ["Python", "Django", "DRF", "GraphQL", "Graphene", "Celery"],
  },
  {
    category: "Frontend",
    icon: Globe,
    comment: "// UI & framework layer",
    description:
      "Builds responsive, SEO-optimised frontend applications across Vue.js and the React ecosystem. Experience with both Nuxt.js (SSR/SSG) and Next.js for production web apps, with Pinia for state management.",
    skills: [
      { name: "React",   level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Vue.js",  level: 88 },
      { name: "Nuxt.js", level: 85 },
      { name: "Pinia",   level: 80 },
    ],
    tags: ["Vue.js", "Nuxt.js", "Next.js", "React", "Pinia"],
  },
  {
    category: "Search & Realtime",
    icon: Search,
    comment: "// data streaming & indexing",
    description:
      "Implemented Elasticsearch-powered search across large expert witness profile datasets. Built WebSocket-driven real-time order tracking and notifications, keeping multiple user roles in sync without polling.",
    skills: [
      { name: "Elasticsearch", level: 85 },
      { name: "WebSockets",    level: 82 },
    ],
    tags: ["Elasticsearch", "WebSockets"],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    comment: "// deployment & infrastructure",
    description:
      "Containerises full application stacks with Docker for consistent local and production environments. Deploys backend services on Railway with Cloudflare in front for CDN, edge caching, and DDoS protection.",
    skills: [
      { name: "Docker",     level: 85 },
      { name: "Railway",    level: 80 },
      { name: "Cloudflare", level: 78 },
    ],
    tags: ["Docker", "Railway", "Cloudflare"],
  },
  {
    category: "Payments & Auth",
    icon: CreditCard,
    comment: "// integrations",
    description:
      "Integrated Stripe for full payment order flows — checkout, webhooks, and order state management. Uses Clerk for production-ready authentication with role-based access control across multi-role SaaS products.",
    skills: [
      { name: "Stripe", level: 85 },
      { name: "Clerk",  level: 88 },
    ],
    tags: ["Stripe", "Clerk"],
  },
  {
    category: "Database",
    icon: Database,
    comment: "// data persistence",
    description:
      "Designs relational schemas in PostgreSQL for complex multi-tenant SaaS applications. Experience with MySQL in client projects and NoSQL approaches for unstructured or rapidly evolving data models.",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL",      level: 80 },
      { name: "NoSQL",      level: 72 },
    ],
    tags: ["PostgreSQL", "MySQL", "NoSQL"],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[11px] mb-1.5">
        <span className="text-[#a8c8a8]">{name}</span>
        <span className="text-[#5a7a5c]">{level}%</span>
      </div>
      <div className="h-1 w-full rounded-full bg-[#1a2b1a] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#145c23] to-[#39d353]"
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 max-w-5xl mx-auto py-16">

      {/* Page header */}
      <motion.div {...fadeUp(0)} className="mb-12">
        <p className="text-[11px] text-[#39d353] tracking-[0.2em] uppercase mb-2">
          <span className="text-[#145c23]">$ </span>skills
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold text-white leading-tight tracking-tight">
          Tech Stack
        </h1>
        <p className="text-xs text-[#5a7a5c] mt-3 tracking-wider">
          10+ technologies · full-stack · cloud-native · production experience
        </p>
      </motion.div>

      <Separator className="mb-12" />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-lg border border-[#1c2e1e] bg-[#101810] p-6 hover:border-[#145c23] transition-colors duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-1">
                <div className="rounded border border-[#1c2e1e] bg-[#1a2b1a] p-1.5">
                  <Icon size={13} className="text-[#39d353]" />
                </div>
                <h2 className="font-display text-sm font-bold text-white tracking-wide">
                  {group.category}
                </h2>
              </div>
              <p className="text-[11px] text-[#145c23] mb-3 ml-8">{group.comment}</p>

              {/* Description */}
              <p className="text-[11px] text-[#6a8a6a] leading-relaxed mb-5 ml-8">
                {group.description}
              </p>

              {/* Skill bars */}
              <div className="mb-5">
                {group.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.2 + i * 0.1 + j * 0.08}
                  />
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <Badge key={tag} variant="default" className="text-[10px]">{tag}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Also experienced with */}
      <motion.div {...fadeUp(0.8)} className="mt-14">
        <Separator className="mb-10" />
        <div className="rounded-lg border border-[#1c2e1e] bg-[#101810] border-l-[3px] border-l-[#39d353] px-6 py-5">
          <p className="text-[10px] text-[#145c23] mb-1.5 tracking-widest">{"/* also experienced with */"}</p>
          <p className="text-[11px] text-[#6a8a6a] leading-relaxed mb-4">
            Beyond the core stack, hands-on experience with third-party API integrations (LexisNexis, email
            services), enterprise automation tools, client-facing requirement gathering, and cross-functional
            team collaboration across product, QA, and business stakeholders.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "LexisNexis API", "Email Services", "PDF Generation",
              "Zoho CRM", "Zoho Creator", "Zoho Books", "Deluge",
              "REST APIs", "SEO Optimisation", "JWT", "OTP Auth",
              "Agile", "Client Meetings",
            ].map((tag) => (
              <Badge key={tag} variant="default" className="text-[10px]">{tag}</Badge>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}