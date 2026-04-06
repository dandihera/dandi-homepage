"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "AI & 에이전트",
    items: [
      { name: "Claude Code", level: "Expert" },
      { name: "MCP (Model Context Protocol)", level: "Expert" },
      { name: "Agent Orchestration", level: "Expert" },
      { name: "Prompt Engineering", level: "Expert" },
    ],
  },
  {
    title: "프로그래밍 언어",
    items: [
      { name: "JavaScript / TypeScript", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Shell Script", level: "Advanced" },
      { name: "PowerShell", level: "Intermediate" },
    ],
  },
  {
    title: "프레임워크 & 도구",
    items: [
      { name: "Node.js", level: "Expert" },
      { name: "Next.js / React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
    ],
  },
  {
    title: "통합 & 자동화",
    items: [
      { name: "Jira / Confluence", level: "Expert" },
      { name: "Slack API", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "한국 서비스 API", level: "Expert" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Advanced: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Intermediate: "bg-slate-500/20 text-slate-300 border-slate-500/30",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            기술 스택
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            단디소프트가 활용하는 핵심 기술과 전문 역량입니다.
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
                  <div key={item.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-white">{item.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border ${levelColors[item.level]}`}
                    >
                      {item.level}
                    </span>
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
