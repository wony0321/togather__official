import { NavLink, useNavigate } from "react-router";
import { LayoutDashboard, Inbox, Building2, Users, LogOut } from "lucide-react";
import useAuthStore from "@/store/authStore";

const navItems = [
  { to: "/admin", label: "대시보드", icon: LayoutDashboard, end: true },
  { to: "/admin/inquiries", label: "문의 관리", icon: Inbox },
  { to: "/admin/clients", label: "고객사 관리", icon: Building2 },
  { to: "/admin/team", label: "팀원 관리", icon: Users },
];

export default function AdminSidebar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside className="w-60 min-h-screen bg-blue-9 text-white flex flex-col">
      <div className="px-6 py-5 border-b border-blue-8">
        <div className="flex items-center gap-2">
          <img src="/icons/192x192.png" alt="ToGather" className="w-7 h-7 rounded-md" />
          <span className="font-bold text-lg text-blue-3">ToGather</span>
        </div>
        <p className="text-xs text-blue-5 mt-0.5">관리자 패널</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-blue-4 hover:bg-blue-8 hover:text-white"
              }`
            }
          >
            <Icon className="w-5 h-5" strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-blue-8">
        <div className="px-3 py-2 mb-2">
          <p className="text-xs text-blue-5">로그인 계정</p>
          <p className="text-sm text-blue-3 truncate">{user?.email || "-"}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-blue-4 hover:bg-blue-8 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" strokeWidth={2} />
          로그아웃
        </button>
      </div>
    </aside>
  );
}
