import { productFeatures, mainFeatures } from "@/data/features";

export default function Service() {
  return (
    <section id="service" className="scroll-mt-16">
      {/* 기능 소개 */}
      <section className="py-16 px-6 bg-bluegrey-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-10 text-center mb-10">교회에 필요한 기능을 한눈에</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {productFeatures.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="rounded-2xl border-2 border-blue-2 p-6 bg-blue-1">
                <Icon className="w-7 h-7 text-primary mb-3" strokeWidth={1.75} />
                <h3 className="font-bold text-blue-9 mb-1">{title}</h3>
                <p className="text-sm text-blue-8 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-blue-10 text-center mb-8">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="p-6 rounded-2xl border border-bluegrey-2 bg-white hover:border-blue-3 hover:shadow-md transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.75} />
                <h3 className="font-semibold text-blue-9 mb-2">{title}</h3>
                <p className="text-sm text-grey-8 leading-relaxed">{description}</p>
              </div>
            ))}

            {/* 신규 기능 티저 (COMING SOON) - 주요 기능 카드와 함께 배치 */}
            <div className="relative p-6 rounded-2xl bg-blue-9 flex flex-col justify-center">
              <span className="absolute top-4 right-4 px-2 py-0.5 bg-white text-blue-9 text-xs font-bold rounded-full">
                COMING SOON
              </span>
              <p className="text-blue-2 text-sm font-medium mb-1">같은 믿음으로, 조금 더 가까이</p>
              <p className="text-white text-lg font-bold">ToGather 신규 기능 출시 임박!</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
