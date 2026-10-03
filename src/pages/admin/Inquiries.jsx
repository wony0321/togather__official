import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { inquiryApi } from "@/services/api";
import useInquiryStore from "@/store/inquiryStore";

const statusOptions = [
  { value: "", label: "전체" },
  { value: "pending", label: "대기" },
  { value: "inProgress", label: "진행중" },
  { value: "completed", label: "완료" },
  { value: "cancelled", label: "취소" },
];

const statusMap = {
  pending: { label: "대기", className: "bg-yellow-100 text-yellow-700" },
  inProgress: { label: "진행중", className: "bg-blue-2 text-blue-7" },
  completed: { label: "완료", className: "bg-green-100 text-green-700" },
  cancelled: { label: "취소", className: "bg-bluegrey-2 text-grey-8" },
};

export default function Inquiries() {
  const { inquiries, loading, setInquiries, setLoading, updateStatus, selectInquiry, selectedInquiry } = useInquiryStore();
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data } = await inquiryApi.getAll();
        setInquiries(data || []);
      } catch {
        setInquiries([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setInquiries, setLoading]);

  const handleStatusChange = async (id, status) => {
    try {
      await inquiryApi.updateStatus(id, status);
      updateStatus(id, status);
    } catch {
      alert("상태 변경에 실패했습니다.");
    }
  };

  const filtered = filterStatus
    ? inquiries.filter((i) => i.status === filterStatus)
    : inquiries;

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-10">문의 관리</h1>
            <p className="text-grey-8 text-sm mt-1">총 {inquiries.length}건의 문의</p>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-bluegrey-3 rounded-xl text-sm bg-white focus:outline-none focus:border-primary"
          >
            {statusOptions.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl border border-bluegrey-2 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-bluegrey-5">불러오는 중...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-bluegrey-5">문의가 없습니다.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-bluegrey-1 border-b border-bluegrey-2">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-grey-8">교회명</th>
                  <th className="text-left px-5 py-3 font-medium text-grey-8">지역</th>
                  <th className="text-left px-5 py-3 font-medium text-grey-8">요금제</th>
                  <th className="text-left px-5 py-3 font-medium text-grey-8">상태</th>
                  <th className="text-left px-5 py-3 font-medium text-grey-8">접수일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bluegrey-1">
                {filtered.map((inq) => (
                  <tr
                    key={inq.id}
                    className={`cursor-pointer transition-colors ${selectedInquiry?.id === inq.id ? "bg-blue-1" : "hover:bg-bluegrey-1"}`}
                    onClick={() => selectInquiry(inq)}
                  >
                    <td className="px-5 py-3 font-medium text-blue-9">{inq.orgName}</td>
                    <td className="px-5 py-3 text-grey-8">{inq.region || "-"}</td>
                    <td className="px-5 py-3 text-grey-8">{inq.plan || "-"}</td>
                    <td className="px-5 py-3">
                      <select
                        value={inq.status}
                        onChange={(e) => { e.stopPropagation(); handleStatusChange(inq.id, e.target.value); }}
                        onClick={(e) => e.stopPropagation()}
                        className={`px-2 py-1 rounded-lg text-xs font-medium border-0 focus:outline-none focus:ring-1 focus:ring-primary ${statusMap[inq.status]?.className || "bg-bluegrey-2 text-grey-8"}`}
                      >
                        {statusOptions.slice(1).map(({ value, label }) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3 text-bluegrey-5">
                      {new Date(inq.createdAt).toLocaleDateString("ko-KR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Detail panel */}
      {selectedInquiry && (
        <div className="w-80 shrink-0">
          <div className="bg-white rounded-2xl border border-bluegrey-2 p-6 sticky top-4">
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-bold text-blue-9">{selectedInquiry.orgName}</h2>
              <button onClick={() => selectInquiry(null)} className="text-bluegrey-5 hover:text-bluegrey-8" aria-label="닫기">
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>
            <dl className="space-y-3 text-sm">
              {[
                { label: "지역", value: selectedInquiry.region },
                { label: "교단", value: selectedInquiry.denomination },
                { label: "교인 수", value: selectedInquiry.memberCount },
                { label: "담당자", value: selectedInquiry.contactName },
                { label: "직분·맡은 일", value: selectedInquiry.position },
                { label: "이메일", value: selectedInquiry.email },
                { label: "연락처", value: selectedInquiry.phone },
                { label: "관심 요금제", value: selectedInquiry.plan },
                { label: "현재 교회 홈페이지", value: selectedInquiry.currentWebsite },
                { label: "현재 교인 관리 방법", value: selectedInquiry.currentManagementMethod },
                { label: "문의 유형", value: selectedInquiry.inquiryType },
              ].map(({ label, value }) => value && (
                <div key={label}>
                  <dt className="text-bluegrey-5">{label}</dt>
                  <dd className="text-blue-8 font-medium mt-0.5">{value}</dd>
                </div>
              ))}
              {selectedInquiry.message && (
                <div>
                  <dt className="text-bluegrey-5">문의 내용</dt>
                  <dd className="text-bluegrey-8 mt-1 leading-relaxed">{selectedInquiry.message}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
