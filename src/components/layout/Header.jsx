import { Link, NavLink } from "react-router";
import useUIStore from "@/store/uiStore";

const navLinks = [
  { to: "/service", label: "서비스" },
  { to: "/pricing", label: "요금제" },
  { to: "/team", label: "팀 소개" },
  { to: "/contact", label: "도입 문의" },
];

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-2 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/icons/192x192.png" alt="ToGather" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-xl text-primary tracking-tight">ToGather</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-bluegrey-7 hover:text-blue-8"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-7 transition-colors"
          >
            무료 상담
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-bluegrey-6 hover:bg-blue-1"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-2 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-primary" : "text-bluegrey-8"}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg text-center"
            onClick={closeMenu}
          >
            무료 상담
          </Link>
        </div>
      )}
    </header>
  );
}
