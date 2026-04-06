"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "AI & 머신러닝",
    items: [
      { name: "LLM / AI Agent", level: "Core" },
      { name: "Prompt Engineering", level: "Core" },
      { name: "RAG / Vector DB", level: "Core" },
      { name: "MCP Protocol", level: "Core" },
    ],
  },
  {
    title: "백엔드",
    items: [
      { name: "Node.js / TypeScript", level: "Core" },
      { name: "Python", level: "Core" },
      { name: "REST / GraphQL API", level: "Core" },
      { name: "PostgreSQL / Redis", level: "Core" },
    ],
  },
  {
    title: "프론트엔드",
    items: [
      { name: "React / Next.js", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "Responsive Design", level: "Core" },
    ],
  },
  {
    title: "인프라 & DevOps",
    items: [
      { name: "Docker / K8s", level: "Core" },
      { name: "CI/CD Pipeline", level: "Core" },
      { name: "GitHub Actions", level: "Core" },
      { name: "Cloud (AWS/GCP)", level: "Core" },
    ],
  },
];

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
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                    <span className="text-sm text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
