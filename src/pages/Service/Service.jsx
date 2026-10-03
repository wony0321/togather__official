import { Link } from "react-router";
import { Settings, Smartphone, Landmark } from "lucide-react";
import { features } from "@/data/features";

const productCards = [
  {
    icon: Settings,
    title: "교회 관리자용",
    tag: "관리자 페이지",
    description: "공지와 일정을 올리고, 행사 신청과 교인 정보를 관리합니다.",
  },
  {
    icon: Smartphone,
    title: "성도용",
    tag: "성도 웹앱",
    description: "모바일로 교회 소식과 일정을 보고, 행사와 모임에 신청합니다.",
  },
  {
    icon: Landmark,
    title: "교회 홈페이지",
    tag: "대외 홈페이지",
    description: "예배 시간, 설교, 교회 소식과 일정을 교인 및 새 방문에게 알려줍니다.",
  },
];

export default function Service() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-10 mb-6">
            교회 운영과 성도 소통을<br />
            <span className="text-primary">한곳에서</span>
          </h1>
          <p className="text-lg text-grey-8 max-w-2xl mx-auto">
            관리자는 웹에서 교회 홈페이지, 공지, 일정, 신청·결제와 교인 정보를 관리하고,
            성도는 모바일에서 교회 소식을 확인하고 사역과 행사에 참여합니다.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">제품 구성</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productCards.map(({ icon: Icon, title, tag, description }) => (
              <div key={title} className="rounded-2xl border-2 border-blue-2 p-6 bg-blue-1">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-bold text-blue-9">{title}</h3>
                    <p className="text-xs text-primary font-medium">{tag}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-8 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-bluegrey-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="p-6 rounded-2xl border border-bluegrey-2 bg-white hover:border-blue-3 hover:shadow-md transition-all">
                <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.75} />
                <h3 className="font-semibold text-blue-9 mb-2">{title}</h3>
                <p className="text-sm text-grey-8 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-primary text-center">
        <h2 className="text-2xl font-bold text-white mb-4">ToGather로 시작하세요</h2>
        <p className="text-pale mb-8">요금제를 확인하거나 도입을 문의하세요.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pricing" className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-1 transition-colors">
            요금제 보기
          </Link>
          <Link to="/contact" className="px-8 py-3 bg-blue-6 text-white font-semibold rounded-xl border border-blue-5 hover:bg-blue-5 transition-colors">
            도입 문의
          </Link>
        </div>
      </section>
    </div>
  );
}
