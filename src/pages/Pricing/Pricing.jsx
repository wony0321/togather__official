import { Check } from "lucide-react";
import { pricingPlans, commonFeatures } from "@/data/pricing";

const tierStyle = {
  basic: "bg-blue-1 text-blue-7",
  standard: "bg-primary text-white",
  premium: "bg-blue-9 text-white",
};

const tierSweepColor = {
  basic: "var(--color-blue-3)",
  standard: "var(--color-primary)",
  premium: "var(--color-blue-9)",
};

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16">
      <div className="pt-20 px-6 bg-bluegrey-1">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">우리 교회에 맞는 요금제를 확인해 보세요</h1>
          <p className="text-grey-8 text-lg max-w-xl mx-auto">
            교인 수에 따라 요금제와 초기 개설비가 달라집니다.
          </p>
          <p className="text-bluegrey-5 text-sm mt-2">
            ※ 소규모 교회의 사역을 돕고자 교인 100명 이하 교회는 초기 개설비를 받지 않습니다.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 bg-bluegrey-1">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="pricing-card relative rounded-2xl border-2 border-bluegrey-2 p-8 flex flex-col"
                style={{ "--sweep-color": tierSweepColor[plan.id] }}
              >
                <span className={`inline-block self-start px-3 py-1 rounded-full text-sm font-bold mb-4 ${tierStyle[plan.id]}`}>
                  교인 {plan.memberRange}
                </span>

                <div className="mb-8 flex-1">
                  <h3 className="text-xl font-bold text-blue-9">{plan.name}</h3>
                  <p className="text-sm text-grey-8 mt-1">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-blue-10">
                      {plan.price.toLocaleString()}원
                    </span>
                    <span className="text-grey-8 text-sm">/ {plan.priceUnit}</span>
                  </div>
                  {plan.setupFee === 0 ? (
                    <div className="mt-2 text-sm text-grey-8">
                      초기 개설비 <span className="text-primary font-bold">무료</span>
                    </div>
                  ) : (
                    <div className="mt-2 text-sm text-grey-8">
                      초기 개설비{" "}
                      <span className="text-blue-9 font-semibold">{plan.setupFee.toLocaleString()}원</span>
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="block text-center py-3 rounded-xl font-semibold text-sm bg-blue-1 text-blue-8 hover:bg-blue-2 transition-colors"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Common features */}
          <div className="mt-8 p-8 bg-white rounded-2xl border border-bluegrey-2">
            <h3 className="font-bold text-blue-9 text-lg mb-5 text-center">모든 요금제 공통 제공 기능</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {commonFeatures.map((text) => (
                <li key={text} className="flex items-center gap-2 text-sm text-blue-8">
                  <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                  {text}
                </li>
              ))}
            </ul>
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
                <p className="text-sm text-grey-8">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
