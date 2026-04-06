"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI 기반 데이터 관리",
    description:
      "구조화된 데이터와 비정형 데이터를 AI가 자동으로 분류, 정제, 관리합니다. 게시판, 문서, 커뮤니티 데이터를 지능적으로 처리합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGlow: "hover:shadow-blue-500/10",
    accentColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
  },
  {
    title: "스마트 커뮤니티 플랫폼",
    description:
      "AI가 콘텐츠를 자동 분류하고 추천하는 차세대 게시판 시스템. 사용자 참여도를 높이고 관리 효율을 극대화합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGlow: "hover:shadow-purple-500/10",
    accentColor: "text-purple-400",
    dotColor: "bg-purple-400",
  },
  {
    title: "업무 프로세스 자동화",
    description:
      "반복적인 업무 흐름을 AI가 학습하고 자동화합니다. 승인 프로세스, 보고서 생성, 데이터 입력 등을 지능적으로 처리합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-orange-500/20 to-yellow-500/20",
    borderGlow: "hover:shadow-orange-500/10",
    accentColor: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    title: "확장 가능한 아키텍처",
    description:
      "마이크로서비스 기반 설계로 기업 규모에 맞춰 유연하게 확장됩니다. v3에서 v4로의 진화를 통해 검증된 아키텍처입니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25 6.43 14.25m11.14 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGlow: "hover:shadow-green-500/10",
    accentColor: "text-green-400",
    dotColor: "bg-green-400",
  },
];

export default function Projects() {
  return (
    <section id="solution" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-blue-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Flagship Product
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            HERA
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            AI 기반 엔터프라이즈 플랫폼.
            <br className="hidden sm:block" />
            비즈니스 데이터와 프로세스를 하나로 통합합니다.
          </p>
        </motion.div>

        {/* Version badge */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass">
            <span className="text-xs text-slate-500 font-medium">v3 Stable</span>
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="text-xs font-semibold text-blue-400">v4 Next Generation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`group glass rounded-2xl p-8 transition-all duration-300 cursor-default hover:shadow-xl ${feature.borderGlow}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center ${feature.accentColor} mb-5`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <span className={`w-2 h-2 rounded-full ${feature.dotColor} mt-2 opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
