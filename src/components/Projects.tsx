"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "k-skill",
    description:
      "한국인을 위한 AI 에이전트 스킬 모음집. SRT/KTX 예매, 카카오톡, 쿠팡 검색, 배달 추적, 미세먼지, 한국 법령 검색 등 18개 이상의 실용적인 스킬을 제공합니다.",
    tech: ["JavaScript", "Python", "Node.js"],
    highlights: ["18+ 스킬", "한국 서비스 특화", "Claude Code 연동"],
    url: "https://github.com/dandihera/k-skill",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "harness",
    description:
      "도메인 특화 AI 에이전트 팀을 자동으로 설계하는 메타스킬 프레임워크. Pipeline, Fan-out/Fan-in, Expert Pool 등 6가지 아키텍처 패턴을 지원합니다.",
    tech: ["Claude Code Plugin", "Markdown", "Agent Teams"],
    highlights: ["6가지 아키텍처 패턴", "자동 스킬 생성", "+60% 품질 향상"],
    url: "https://github.com/dandihera/harness",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    name: "AI-driven-work",
    description:
      "Claude Code를 AI 에이전트로 활용하여 Jira/Confluence와 통합하는 업무 자동화 시스템. 일일 스탠드업, 주간 보고서, Slack 연동 등 조직 프로세스를 표준화합니다.",
    tech: ["Claude Code", "MCP", "Jira", "Confluence"],
    highlights: ["업무 자동화", "프로세스 표준화", "지식 공유 활성화"],
    url: "https://github.com/dandihera/AI-driven-work",
    gradient: "from-orange-500/20 to-yellow-500/20",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    name: "claude-code-tips",
    description:
      "Claude Code를 최대한 활용하기 위한 45가지 실전 팁 모음. 기초부터 고급 워크플로우까지 체계적으로 정리된 가이드입니다.",
    tech: ["JavaScript", "Claude Code", "Markdown"],
    highlights: ["45가지 팁", "커스텀 스크립트", "시스템 프롬프트 최적화"],
    url: "https://github.com/dandihera/claude-code-tips",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-400",
    borderColor: "border-green-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
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
            오픈소스 프로젝트
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            GitHub에 공개된 단디소프트의 핵심 프로젝트들입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300 border ${project.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${project.accentColor}`}>
                  {project.name}
                </h3>
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${project.gradient} ${project.accentColor} font-medium`}
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
