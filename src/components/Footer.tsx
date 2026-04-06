export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="단디소프트" className="h-6 w-auto" />
          <span className="text-sm font-semibold gradient-text">단디소프트</span>
          <span className="text-slate-700">·</span>
          <span className="text-sm text-slate-500">
            &copy; 2026 All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dandihera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@dandisoft.kr"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            이메일
          </a>
        </div>
      </div>
    </footer>
  );
}
