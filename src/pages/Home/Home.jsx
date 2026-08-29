import { Link } from "react-router";
import { features, stats } from "@/data/features";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-1 via-white to-blue-1 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-blue-2 text-primary text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            All-in-One Digital Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-10 leading-tight mb-6">
            조직 운영을<br />
            <span className="text-primary">하나로 잇다</span>
          </h1>
          <p className="text-lg md:text-xl text-bluegrey-7 mb-10 max-w-2xl mx-auto leading-relaxed">
            ToGather는 중·소규모 비영리단체, 교육기관, 커뮤니티 조직이
            공지·일정·콘텐츠·결제·회원 관리를 하나의 플랫폼에서 운영할 수 있도록 돕는
            SaaS 기반 All-in-One 디지털 플랫폼입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-7 transition-colors shadow-lg shadow-blue-2"
            >
              무료 상담 신청
            </Link>
            <Link
              to="/service"
              className="px-8 py-3.5 bg-white text-blue-8 font-semibold rounded-xl border border-blue-2 hover:border-blue-4 hover:text-primary transition-colors"
            >
              서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-blue-2">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
              <div className="text-sm text-bluegrey-6 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-bluegrey-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-10 mb-4">조직 운영자가 겪는 문제</h2>
            <p className="text-bluegrey-7 max-w-2xl mx-auto">
              공지·일정·결제·회원 관리 채널이 분산되어 운영이 비효율적이지 않으신가요?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-grey-4 rounded-2xl p-6">
              <h3 className="font-semibold text-bluegrey-9 mb-4 text-lg">😰 기존 방식의 문제</h3>
              <ul className="space-y-3 text-sm text-bluegrey-8">
                {[
                  "공지·일정·콘텐츠·결제 채널 분산으로 운영 비효율",
                  "복잡한 관리자 시스템과 자동화 부족으로 반복 업무 부담",
                  "회원 데이터 미축적으로 운영 개선 어려움",
                  "외주업체·개별 도구 파편화로 높은 비용",
                  "구성원의 정보 탐색 어려움과 낮은 참여율",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-grey-6 mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-1 border border-blue-2 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-4 text-lg">✨ ToGather의 해결책</h3>
              <ul className="space-y-3 text-sm text-blue-8">
                {[
                  "공지·일정·결제·회원 관리를 단일 플랫폼으로 통합",
                  "AI 자동화로 반복 업무 부담 대폭 감소",
                  "회원 데이터 기반의 재방문·참여 유도",
                  "구독형 SaaS로 초기 비용 최소화",
                  "모바일 최적화로 구성원 접근성 향상",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-10 mb-4">하나의 플랫폼, 모든 기능</h2>
            <p className="text-bluegrey-6">조직 운영에 필요한 모든 디지털 도구를 통합 제공합니다.</p>
          </div>
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

      {/* Target */}
      <section className="py-20 px-6 bg-blue-1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-10 mb-4">ToGather가 함께하는 조직</h2>
          <p className="text-bluegrey-7 mb-10">교회, 비영리단체, 학원, 커뮤니티 등 다양한 조직과 함께합니다.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⛪", label: "교회" },
              { icon: "🏫", label: "교육기관·학원" },
              { icon: "🤝", label: "비영리단체" },
              { icon: "👨‍👩‍👧‍👦", label: "커뮤니티 조직" },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-blue-2">
                <div className="text-4xl mb-3">{icon}</div>
                <div className="font-medium text-blue-8">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">지금 바로 시작하세요</h2>
          <p className="text-pale mb-8 text-lg">
            3일 안에 조직 맞춤형 디지털 플랫폼을 구축해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-1 transition-colors"
            >
              무료 상담 신청
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3.5 bg-blue-6 text-white font-semibold rounded-xl border border-blue-5 hover:bg-blue-5 transition-colors"
            >
              요금제 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
