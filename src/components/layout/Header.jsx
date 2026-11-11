import { useEffect, useState } from "react";
import { Link } from "react-router";
import useUIStore from "@/store/uiStore";

const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_xovxmhX";

const navLinks = [
  { to: "#service", label: "서비스 소개" },
  { to: "#pricing", label: "요금 안내" },
  { to: "#guide", label: "도입 방법" },
  { to: "#team", label: "회사 소개" },
  { to: "#contact", label: "도입 문의" },
];

function KakaoButton({ className, onClick }) {
  return (
    <a
      href={KAKAO_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      카카오톡 상담
    </a>
  );
}

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div
        className={`mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-2/40 rounded-full h-16 transition-all duration-500 ease-in-out ${
          scrolled ? "max-w-2xl px-4" : "max-w-6xl px-6"
        }`}
      >
        {/* 좌측: 로고 (스크롤 시 접힘, 모바일에서는 항상 노출) */}
        <div
          className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out max-w-[200px] opacity-100 ${
            scrolled ? "md:max-w-0 md:opacity-0" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0 whitespace-nowrap" onClick={closeMenu}>
            <img src="/icons/192x192.png" alt="ToGather" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl text-primary tracking-tight">ToGather</span>
          </Link>
        </div>

        {/* 중앙: 섹션 이동 메뉴 */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium text-grey-8 hover:text-blue-8 hover:font-bold transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* 우측: 카카오톡 상담 (스크롤 시 접힘) */}
        <div
          className={`hidden md:flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
            scrolled ? "max-w-0 opacity-0 ml-0" : "max-w-[180px] opacity-100 ml-2"
          }`}
        >
          <KakaoButton className="px-4 py-2 bg-[#FEE500] text-[#191919] text-sm font-semibold rounded-full hover:brightness-95 transition-all shrink-0 whitespace-nowrap" />
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2 rounded-full text-grey-8 hover:bg-blue-1"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-white/60 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium text-bluegrey-8"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <KakaoButton
            onClick={closeMenu}
            className="mt-2 px-4 py-2 bg-[#FEE500] text-[#191919] text-sm font-semibold rounded-full text-center"
          />
        </div>
      )}
    </header>
  );
}
