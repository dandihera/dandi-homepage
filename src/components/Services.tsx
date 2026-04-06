"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "HERA 솔루션 구축",
    description:
      "기업 맞춤형 HERA 플랫폼을 구축합니다. 데이터 관리, 커뮤니티, 업무 자동화를 하나의 통합 플랫폼으로 제공하여 디지털 전환을 가속화합니다.",
    tags: ["HERA v4", "맞춤 구축", "통합 플랫폼"],
    color: "blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "AI 에이전트 개발",
    description:
      "업무 특화 AI 에이전트를 설계하고 개발합니다. 멀티 에이전트 오케스트레이션, 자연어 인터페이스, 한국 서비스 연동 등 실전 경험 기반의 솔루션을 제공합니다.",
    tags: ["AI 에이전트", "자동화", "한국 서비스 연동"],
    color: "purple",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "데이터 컨설팅",
    description:
      "기업 데이터를 분석하고 AI 활용 전략을 수립합니다. 데이터 정제, 구조화, AI 모델 적용까지 데이터 기반 의사결정을 지원합니다.",
    tags: ["데이터 분석", "AI 전략", "의사결정 지원"],
    color: "cyan",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "기술 교육 & 트레이닝",
    description:
      "AI 코딩, 에이전트 설계, 프롬프트 엔지니어링 등 실전 기반의 기술 교육 프로그램을 제공합니다. 조직의 AI 활용 역량을 단계적으로 향상시킵니다.",
    tags: ["AI 교육", "워크숍", "역량 강화"],
    color: "emerald",
  },
];

const colorMap: Record<string, { icon: string; tag: string; tagBorder: string; tagText: string }> = {
  blue: {
    icon: "bg-blue-600/20 text-blue-400 group-hover:text-blue-300",
    tag: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
    tagText: "text-blue-300",
  },
  purple: {
    icon: "bg-purple-600/20 text-purple-400 group-hover:text-purple-300",
    tag: "bg-purple-500/10",
    tagBorder: "border-purple-500/20",
    tagText: "text-purple-300",
  },
  cyan: {
    icon: "bg-cyan-600/20 text-cyan-400 group-hover:text-cyan-300",
    tag: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
    tagText: "text-cyan-300",
  },
  emerald: {
    icon: "bg-emerald-600/20 text-emerald-400 group-hover:text-emerald-300",
    tag: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
    tagText: "text-emerald-300",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-slate-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            서비스
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            솔루션 구축부터 AI 전략 수립, 교육까지 엔드투엔드 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                className="group glass rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${colors.icon}`}>
                  {service.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <motion.svg
                    className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 3 }}
                    animate={{ opacity: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>
                <p className="text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${colors.tag} ${colors.tagBorder} ${colors.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
