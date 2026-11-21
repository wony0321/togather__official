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
              <div key={id} className="reveal-card rounded-2xl p-6 bg-blue-9 text-center">
                <Icon className="w-7 h-7 text-blue-2 mb-3 mx-auto" strokeWidth={1.75} />
                <h3 className="font-bold text-xl text-white mb-1">{title}</h3>
                <p className="text-sm text-blue-2 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-blue-10 text-center mb-8">주요 기능</h3>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {mainFeatures.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="reveal-card flip-card h-48">
                <div className="flip-card-inner rounded-2xl">
                  <div className="flip-card-front rounded-2xl border border-bluegrey-3 bg-white flex flex-col items-center justify-center text-center p-6">
                    <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.75} />
                    <h3 className="font-semibold text-lg text-blue-9">{title}</h3>
                  </div>
                  <div className="flip-card-back rounded-2xl bg-blue-9 flex items-center justify-center text-center p-6">
                    <p className="text-sm text-blue-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* 신규 기능 티저 (COMING SOON) - 주요 기능 카드와 함께 배치 */}
            <div className="reveal-card flip-card h-48">
              <div className="flip-card-inner rounded-2xl">
                <div className="flip-card-front relative rounded-2xl border border-bluegrey-2 bg-white flex items-center justify-center text-center p-6">
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-blue-1 text-primary text-xs font-bold rounded-full">
                    COMING SOON
                  </span>
                  <p className="text-primary text-md font-bold">ToGather <br/>크리스천 만남 플랫폼 <br/> 출시 임박!</p>
                </div>
                <div className="flip-card-back rounded-2xl bg-blue-9 flex items-center justify-center text-center p-6">
                  <p className="text-sm text-blue-1 leading-relaxed">같은 믿음으로, <br/> 조금 더 가까이</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
