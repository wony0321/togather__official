import { Link } from "react-router";
import { pricingPlans, setupFee } from "@/data/pricing";

export default function Pricing() {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">투명한 요금제</h1>
          <p className="text-bluegrey-7 text-lg max-w-xl mx-auto">
            조직 규모와 필요에 맞는 요금제를 선택하세요.
            초기 개설 비용 <strong className="text-primary">{setupFee.toLocaleString()}원</strong> + 월 구독료로 시작합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary shadow-xl shadow-blue-2"
                    : "border-bluegrey-2"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-9">{plan.name}</h3>
                  <p className="text-sm text-bluegrey-6 mt-1">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-blue-10">
                      {plan.price.toLocaleString()}원
                    </span>
                    <span className="text-bluegrey-6 text-sm">/ {plan.priceUnit}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map(({ text, included }) => (
                    <li key={text} className="flex items-center gap-2 text-sm">
                      {included ? (
                        <span className="text-primary shrink-0">✓</span>
                      ) : (
                        <span className="text-grey-5 shrink-0">✕</span>
                      )}
                      <span className={included ? "text-blue-8" : "text-grey-6"}>{text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-blue-7"
                      : "bg-blue-1 text-blue-8 hover:bg-blue-2"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Custom */}
          <div className="mt-8 text-center p-8 bg-blue-1 rounded-2xl border border-blue-2">
            <h3 className="font-bold text-blue-9 text-lg mb-2">맞춤형 요금제</h3>
            <p className="text-bluegrey-7 text-sm mb-4">
              교인 수, 조직 규모, 필요 기능에 따라 맞춤형 플랜을 제공합니다.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-7 transition-colors text-sm"
            >
              별도 상담 문의
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-bluegrey-1">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              {
                q: "초기 개설 비용은 무엇인가요?",
                a: "조직 맞춤형 웹앱 구축을 위한 1회성 비용입니다. 이후에는 월 구독료만 지불하시면 됩니다.",
              },
              {
                q: "요금제는 언제든 변경 가능한가요?",
                a: "네, 언제든 요금제를 업그레이드하거나 다운그레이드할 수 있습니다.",
              },
              {
                q: "구축에 얼마나 걸리나요?",
                a: "평균 3일 이내에 조직 맞춤형 플랫폼을 구축해 드립니다.",
              },
              {
                q: "해지 시 데이터는 어떻게 되나요?",
                a: "해지 전 데이터 백업 파일을 제공해 드립니다. 데이터는 30일간 보관됩니다.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-bluegrey-2 p-6">
                <h4 className="font-semibold text-blue-9 mb-2">{q}</h4>
                <p className="text-sm text-bluegrey-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
