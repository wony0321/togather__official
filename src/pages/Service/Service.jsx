import { Link } from "react-router";
import { features, userFlow } from "@/data/features";

const adminFeatures = [
  "콘텐츠 관리(CMS): 공지·일정·게시물 발행",
  "회원·구성원 데이터 관리",
  "신청·결제 확인 및 영수증 자동 발행",
  "AI 기반 업무 자동화",
  "통계·활동 데이터 리포트",
];

const userFeatures = [
  "조직 정보·공지·일정 탐색",
  "콘텐츠 이용 및 커뮤니티 참여",
  "활동·프로그램 신청 및 결제",
  "푸시 알림 수신",
  "모바일 최적화 경험",
];

const competitors = [
  { name: "치윰", strength: "교회 커뮤니티 앱", gap: "내부 성도 중심, 운영자 통합 Admin 부족" },
  { name: "세움", strength: "교회 홈페이지", gap: "홈페이지 중심, 운영 자동화·회원 데이터 관리 한계" },
  { name: "교회톡", strength: "교적·재정 관리", gap: "행정 효율화 집중, 대외 웹 경험·AI 자동화 부재" },
  { name: "CH2CH", strength: "목회 행정", gap: "행정 중심, 현대적 모바일 UX·콘텐츠 활성화 한계" },
];

export default function Service() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-10 mb-6">
            운영자와 구성원을 잇는<br />
            <span className="text-primary">All-in-One 플랫폼</span>
          </h1>
          <p className="text-lg text-bluegrey-7 max-w-2xl mx-auto">
            ToGather는 <strong className="text-blue-8">운영자용 Admin</strong>과 <strong className="text-blue-8">사용자용 Web/App</strong>으로 구성된
            통합 디지털 운영 플랫폼입니다.
          </p>
        </div>
      </section>

      {/* Admin + User Split */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">제품 구성</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-blue-3 p-8 bg-blue-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h3 className="font-bold text-blue-9 text-lg">운영자용 Admin</h3>
                  <p className="text-xs text-primary font-medium">관리자 페이지</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-blue-8">
                {adminFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-blue-2 rounded-xl text-xs text-blue-7">
                <strong>제공 가치:</strong> 반복 업무 감소, 운영 효율화, 데이터 기반 관리
              </div>
            </div>

            <div className="rounded-2xl border-2 border-bluegrey-3 p-8 bg-bluegrey-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold text-blue-9 text-lg">사용자용 Web/App</h3>
                  <p className="text-xs text-bluegrey-6 font-medium">구성원 웹앱</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-bluegrey-8">
                {userFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-bluegrey-6 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-bluegrey-2 rounded-xl text-xs text-bluegrey-7">
                <strong>제공 가치:</strong> 정보 접근성 향상, 모바일 편의성, 지속 참여 유도
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-16 px-6 bg-bluegrey-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">서비스 이용 흐름</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {userFlow.map(({ step, title, description }, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="bg-white rounded-2xl border border-blue-2 p-5 text-center min-w-[140px] shadow-sm">
                  <div className="text-primary font-bold text-sm mb-1">{step}</div>
                  <div className="font-semibold text-blue-9 text-sm">{title}</div>
                  <div className="text-xs text-bluegrey-6 mt-1">{description}</div>
                </div>
                {i < userFlow.length - 1 && (
                  <span className="text-blue-3 text-xl hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ id, icon, title, description }) => (
              <div key={id} className="p-6 rounded-2xl border border-bluegrey-2 hover:border-blue-3 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-blue-9 mb-2">{title}</h3>
                <p className="text-sm text-bluegrey-7 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitors */}
      <section className="py-16 px-6 bg-blue-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-3">경쟁사 대비 차별화</h2>
          <p className="text-bluegrey-7 text-center mb-10">
            ToGather는 단순 기능 중심 도구가 아닌, 운영자와 구성원을 동시에 연결하는 통합 플랫폼입니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl border border-blue-2 overflow-hidden">
              <thead className="bg-blue-1 border-b border-blue-2">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-blue-8">경쟁사</th>
                  <th className="text-left px-6 py-3 font-semibold text-blue-8">주요 강점</th>
                  <th className="text-left px-6 py-3 font-semibold text-blue-8">한계·공백</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-1">
                {competitors.map(({ name, strength, gap }) => (
                  <tr key={name} className="hover:bg-bluegrey-1">
                    <td className="px-6 py-4 font-medium text-blue-9">{name}</td>
                    <td className="px-6 py-4 text-bluegrey-7">{strength}</td>
                    <td className="px-6 py-4 text-bluegrey-6">{gap}</td>
                  </tr>
                ))}
                <tr className="bg-blue-1 border-t-2 border-primary">
                  <td className="px-6 py-4 font-bold text-primary">ToGather</td>
                  <td className="px-6 py-4 font-medium text-blue-7" colSpan={2}>
                    Admin + Web/App 통합 구조로 정보 전달, 운영 자동화, 구성원 참여를 한 번에 지원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-primary text-center">
        <h2 className="text-2xl font-bold text-white mb-4">ToGather로 시작하세요</h2>
        <p className="text-pale mb-8">요금제를 확인하거나 무료 상담을 신청하세요.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pricing" className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-1 transition-colors">
            요금제 보기
          </Link>
          <Link to="/contact" className="px-8 py-3 bg-blue-6 text-white font-semibold rounded-xl border border-blue-5 hover:bg-blue-5 transition-colors">
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
