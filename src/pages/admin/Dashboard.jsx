import { useEffect, useState } from "react";
import { Link } from "react-router";
import { inquiryApi, clientApi } from "@/services/api";

const statCards = [
  { label: "전체 문의", key: "totalInquiries", icon: "📬" },
  { label: "미처리 문의", key: "pendingInquiries", icon: "⏳" },
  { label: "활성 고객사", key: "activeClients", icon: "🏛️" },
  { label: "이번 달 신규", key: "newThisMonth", icon: "🆕" },
];

const statusMap = {
  pending: { label: "대기", className: "bg-yellow-100 text-yellow-700" },
  inProgress: { label: "진행중", className: "bg-blue-2 text-blue-7" },
  completed: { label: "완료", className: "bg-green-100 text-green-700" },
  cancelled: { label: "취소", className: "bg-bluegrey-2 text-bluegrey-7" },
};

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalInquiries: "-",
    pendingInquiries: "-",
    activeClients: "-",
    newThisMonth: "-",
  });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [inqRes, clientRes] = await Promise.all([
          inquiryApi.getAll(),
          clientApi.getAll(),
        ]);
        const inquiries = inqRes.data || [];
        const clients = clientRes.data || [];
        const now = new Date();
        setStats({
          totalInquiries: inquiries.length,
          pendingInquiries: inquiries.filter((i) => i.status === "pending").length,
          activeClients: clients.length,
          newThisMonth: inquiries.filter((i) => {
            const d = new Date(i.createdAt);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
          }).length,
        });
        setRecentInquiries(inquiries.slice(0, 5));
      } catch {
        // 백엔드 연동 전 빈 상태 유지
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-10">대시보드</h1>
        <p className="text-bluegrey-6 text-sm mt-1">ToGather 운영 현황을 한눈에 확인하세요.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {statCards.map(({ label, key, icon }) => (
          <div key={key} className="bg-white rounded-2xl border border-bluegrey-2 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{icon}</span>
              <span className="text-2xl font-bold text-blue-9">
                {loading ? "..." : stats[key]}
              </span>
            </div>
            <p className="text-sm text-bluegrey-6">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white rounded-2xl border border-bluegrey-2 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-bluegrey-2">
          <h2 className="font-semibold text-blue-9">최근 문의</h2>
          <Link to="/admin/inquiries" className="text-sm text-primary hover:underline">
            전체 보기
          </Link>
        </div>
        {recentInquiries.length === 0 ? (
          <div className="px-6 py-12 text-center text-bluegrey-5 text-sm">
            {loading ? "불러오는 중..." : "접수된 문의가 없습니다."}
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-bluegrey-1 border-b border-bluegrey-2">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">조직명</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">담당자</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">요금제</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">상태</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">접수일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bluegrey-1">
              {recentInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-blue-1">
                  <td className="px-6 py-3 font-medium text-blue-9">{inq.orgName}</td>
                  <td className="px-6 py-3 text-bluegrey-7">{inq.contactName}</td>
                  <td className="px-6 py-3 text-bluegrey-7">{inq.plan || "-"}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusMap[inq.status]?.className || "bg-bluegrey-2 text-bluegrey-7"}`}>
                      {statusMap[inq.status]?.label || inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-bluegrey-5">
                    {new Date(inq.createdAt).toLocaleDateString("ko-KR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
