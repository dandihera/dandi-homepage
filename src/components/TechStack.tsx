"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "AI & 머신러닝",
    color: "blue",
    dotColor: "bg-blue-400",
    borderColor: "hover:border-blue-500/30",
    items: [
      { name: "LLM / AI Agent" },
      { name: "Prompt Engineering" },
      { name: "RAG / Vector DB" },
      { name: "MCP Protocol" },
    ],
  },
  {
    title: "백엔드",
    color: "purple",
    dotColor: "bg-purple-400",
    borderColor: "hover:border-purple-500/30",
    items: [
      { name: "Java 25 / Spring Boot" },
      { name: "MSA Architecture" },
      { name: "REST / GraphQL API" },
      { name: "PostgreSQL / Redis" },
    ],
  },
  {
    title: "프론트엔드",
    color: "cyan",
    dotColor: "bg-cyan-400",
    borderColor: "hover:border-cyan-500/30",
    items: [
      { name: "React / Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "인프라 & DevOps",
    color: "emerald",
    dotColor: "bg-emerald-400",
    borderColor: "hover:border-emerald-500/30",
    items: [
      { name: "Docker / K8s" },
      { name: "CI/CD Pipeline" },
      { name: "GitHub Actions" },
      { name: "Cloud (AWS/GCP)" },
    ],
  },
];

const titleColorMap: Record<string, string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-slate-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            기술 역량
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            HERA 플랫폼을 구동하는 핵심 기술 스택입니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className={`glass rounded-2xl p-6 transition-all duration-300 ${category.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                <h3 className={`text-sm font-semibold uppercase tracking-wider ${titleColorMap[category.color]}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-2 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                  >
                    <span className={`w-1 h-1 rounded-full ${category.dotColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
