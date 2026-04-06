export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg" />
              <span className="text-xl font-bold tracking-tight">
                단디소프트
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="#solution" className="hover:text-gray-900 dark:hover:text-white transition-colors">솔루션</a>
              <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">서비스</a>
              <a href="#tech" className="hover:text-gray-900 dark:hover:text-white transition-colors">기술</a>
              <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">문의</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-100 dark:border-blue-900">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            HERA v4 출시
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            AI 기반
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              엔터프라이즈 솔루션
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            단디소프트는 대한민국 기업의 디지털 전환을 선도합니다.
            <br className="hidden sm:block" />
            인사관리, 워크플로우, 시스템 관리를 하나의 플랫폼으로.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full text-sm font-semibold hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/25"
            >
              도입 문의
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              솔루션 보기
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "년 개발 경험" },
            { value: "HERA v4", label: "최신 플랫폼" },
            { value: "MSA", label: "마이크로서비스" },
            { value: "Java 25", label: "최신 기술 스택" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution - HERA */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              HERA 플랫폼
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Hybrid Enterprise Resource Architecture
              <br />
              엔터프라이즈 업무를 혁신하는 통합 플랫폼
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* HERA v3 → v4 Evolution */}
            <div className="col-span-full p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  HERA v4
                </span>
                <span className="text-blue-200 text-sm">Latest Release</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                차세대 엔터프라이즈 플랫폼
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Java 25 Virtual Thread와 Spring Boot 4.0.3 기반의 고성능 MSA
                아키텍처. Kafka 이벤트 드리븐 워크플로우 엔진으로 대규모 업무
                프로세스를 자동화합니다.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  "Virtual Thread 기반 고성능",
                  "ZGC 초저지연 처리",
                  "Kafka 비동기 이벤트",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-blue-100"
                  >
                    <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                title: "인사관리 (HRM)",
                desc: "조직 관리, 직원 정보, 인사 이력을 트리 구조로 관리합니다.",
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                title: "워크플로우",
                desc: "Kafka 기반 이벤트 드리븐 워크플로우 엔진으로 업무를 자동화합니다.",
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "시스템 관리",
                desc: "RBAC, 2FA, 감사 로그, 게시판, 메뉴 관리 등 엔터프라이즈 기본 기능.",
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "웹 애플리케이션",
                desc: "반응형 UI, WebSocket 실시간 통신, 대용량 파일 업로드를 지원합니다.",
              },
            ].map((module) => (
              <div
                key={module.title}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={module.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              서비스
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              기업의 디지털 전환을 위한 종합 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HERA 플랫폼 구축",
                desc: "기업 맞춤형 HERA 플랫폼 도입 및 커스터마이징. 인사, 워크플로우, 시스템 관리를 통합 구축합니다.",
                tag: "Core",
              },
              {
                title: "AI 에이전트 개발",
                desc: "기업 업무 자동화를 위한 AI 에이전트 설계 및 개발. Paperclip AI 기반 지능형 업무 프로세스를 구현합니다.",
                tag: "AI",
              },
              {
                title: "클라우드 인프라 구축",
                desc: "Docker, Kubernetes 기반 클라우드 인프라 설계 및 구축. CI/CD 파이프라인, 모니터링 스택 포함.",
                tag: "DevOps",
              },
              {
                title: "데이터 컨설팅",
                desc: "기업 데이터 분석, 마이그레이션, 최적화 컨설팅. PostgreSQL 기반 고성능 데이터 아키텍처 설계.",
                tag: "Data",
              },
              {
                title: "보안 컨설팅",
                desc: "정보보안 체계 수립, RBAC 기반 접근 제어, 감사 로그 시스템 구축. 금융권 보안 요구사항 대응.",
                tag: "Security",
              },
              {
                title: "기술 교육",
                desc: "Java, Spring Boot, MSA, Kafka 등 최신 기술 교육 프로그램. 기업 맞춤형 커리큘럼 제공.",
                tag: "Education",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
                  {service.tag}
                </span>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              기술 역량
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              최신 기술 스택으로 안정적이고 확장 가능한 솔루션을 구축합니다
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "AI / ML",
                items: ["AI 에이전트", "자연어 처리", "업무 자동화", "Paperclip AI"],
                color: "from-violet-500 to-purple-600",
              },
              {
                category: "Backend",
                items: ["Java 25", "Spring Boot 4", "Spring Cloud", "Apache Kafka"],
                color: "from-blue-500 to-cyan-600",
              },
              {
                category: "Frontend",
                items: ["Next.js", "React", "Tailwind CSS", "Thymeleaf"],
                color: "from-emerald-500 to-teal-600",
              },
              {
                category: "Infrastructure",
                items: ["Docker / K8s", "PostgreSQL", "Redis", "Grafana LGTM"],
                color: "from-orange-500 to-red-600",
              },
            ].map((stack) => (
              <div key={stack.category} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div
                  className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${stack.color} text-white text-xs font-medium mb-4`}
                >
                  {stack.category}
                </div>
                <ul className="space-y-2.5">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              아키텍처
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HERA v4의 MSA 기반 분산 아키텍처
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="space-y-6">
              {/* Client Layer */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-sm">Client (Web Browser)</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              </div>

              {/* Webapp */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl">
                  <span className="font-medium text-sm text-blue-700 dark:text-blue-300">
                    HERA Webapp (HTTPS/HTTP2)
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              </div>

              {/* API Gateway */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-xl">
                  <span className="font-medium text-sm text-violet-700 dark:text-violet-300">
                    API Gateway (Spring Cloud Gateway)
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              </div>

              {/* Microservices */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "System", port: "18010", gc: "G1GC" },
                  { name: "Workflow", port: "18020", gc: "ZGC" },
                  { name: "HRM", port: "18030", gc: "G1GC" },
                ].map((svc) => (
                  <div
                    key={svc.name}
                    className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center"
                  >
                    <div className="font-semibold text-sm text-emerald-700 dark:text-emerald-300">
                      {svc.name}
                    </div>
                    <div className="text-xs text-emerald-500 dark:text-emerald-400 mt-1">
                      :{svc.port} | {svc.gc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              </div>

              {/* Data Layer */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "PostgreSQL", desc: "Database" },
                  { name: "Redis", desc: "Cache" },
                  { name: "Kafka", desc: "Messaging" },
                ].map((infra) => (
                  <div
                    key={infra.name}
                    className="p-4 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-xl text-center"
                  >
                    <div className="font-semibold text-sm text-orange-700 dark:text-orange-300">
                      {infra.name}
                    </div>
                    <div className="text-xs text-orange-500 dark:text-orange-400 mt-1">
                      {infra.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            문의하기
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            HERA 플랫폼 도입이나 기술 컨설팅에 관심이 있으시면 연락 주세요.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                label: "이메일",
                value: "contact@dandisoft.co.kr",
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                label: "전화",
                value: "02-000-0000",
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                label: "주소",
                value: "서울특별시",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
              >
                <svg className="w-6 h-6 text-blue-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                </svg>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {info.label}
                </div>
                <div className="text-sm font-semibold">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md" />
            <span className="text-sm font-semibold">단디소프트</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            &copy; 2026 Dandisoft Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
