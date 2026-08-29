import { useEffect, useState } from "react";
import { clientApi } from "@/services/api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await clientApi.getAll();
        setClients(data || []);
      } catch {
        setClients([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = clients.filter(
    (c) =>
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.contactName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-10">고객사 관리</h1>
          <p className="text-bluegrey-6 text-sm mt-1">총 {clients.length}개 고객사</p>
        </div>
        <input
          type="text"
          placeholder="조직명 또는 담당자 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-bluegrey-3 rounded-xl text-sm focus:outline-none focus:border-primary w-56"
        />
      </div>

      <div className="bg-white rounded-2xl border border-bluegrey-2 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-bluegrey-5">불러오는 중...</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-bluegrey-5">
            {search ? "검색 결과가 없습니다." : "등록된 고객사가 없습니다."}
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-bluegrey-1 border-b border-bluegrey-2">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">조직명</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">유형</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">담당자</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">요금제</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">상태</th>
                <th className="text-left px-6 py-3 font-medium text-bluegrey-7">시작일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bluegrey-1">
              {filtered.map((client) => (
                <tr key={client.id} className="hover:bg-blue-1">
                  <td className="px-6 py-3 font-medium text-blue-9">{client.name}</td>
                  <td className="px-6 py-3 text-bluegrey-7">{client.orgType || "-"}</td>
                  <td className="px-6 py-3 text-bluegrey-7">{client.contactName}</td>
                  <td className="px-6 py-3">
                    <span className="px-2 py-0.5 bg-blue-2 text-blue-7 rounded-full text-xs font-medium">
                      {client.plan}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      client.active ? "bg-green-100 text-green-700" : "bg-bluegrey-2 text-bluegrey-6"
                    }`}>
                      {client.active ? "활성" : "비활성"}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-bluegrey-5">
                    {client.startDate ? new Date(client.startDate).toLocaleDateString("ko-KR") : "-"}
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
