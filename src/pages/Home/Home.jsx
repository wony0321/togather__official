import { X, Check } from "lucide-react";
import Service from "@/pages/Service/Service";
import Pricing from "@/pages/Pricing/Pricing";
import Guide from "@/pages/Guide/Guide";
import Team from "@/pages/Team/Team";
import Contact from "@/pages/Contact/Contact";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center bg-bluegrey-1 py-20 scroll-mt-16">
        {/* 배경 워터마크 텍스트 (좌우 무한 이동) */}
        <div className="absolute inset-x-0 bottom-10 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="text-[9vw] font-extrabold text-blue-1 whitespace-nowrap tracking-tight px-10"
              >
                To Gather To Gether To Father
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          {/* 좌측 장식: 웹 + 앱 겹침 미리보기 (화면 끝까지, 헤드라인 중앙 정렬에 영향 없음) */}
          <div className="hidden md:block absolute left-0 top-2/3 -translate-y-1/2 w-[42%] -ml-10">
            <img
              src="/mockups/web-preview.png"
              alt="ToGather 웹 미리보기"
              className="w-[120%] -ml-20 rounded-r-xl shadow-xl shadow-blue-2 border border-blue-2"
            />
            <img
              src="/mockups/mobile-preview.png"
              alt="ToGather 앱 미리보기"
              className="absolute -bottom-8 right-6 w-36 rounded-[2rem] shadow-xl shadow-blue-2 border-4 border-blue-10"
            />
          </div>

          {/* 헤드라인: 화면 정중앙 */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-10 mb-6 leading-relaxed">
              교회 운영을 하나로<br />
              <span className="text-primary">성도와 더 가까이</span>
            </h1>
          </div>

          {/* 우측 여백: 떠다니는 해시태그 */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[26%] pointer-events-none" aria-hidden="true">
            <span
              className="floating-badge absolute -top-30 right-150 inline-flex items-center px-4 py-2 bg-white border border-blue-2 rounded-full shadow-sm text-lg font-semibold text-primary whitespace-nowrap"
              style={{ animationDelay: "0s" }}
            >
              # 교회 All-in-One 디지털 플랫폼
            </span>
            <span
              className="floating-badge absolute top-0 right-30 inline-flex items-center px-4 py-2 bg-blue-1 border border-blue-2 rounded-full shadow-sm text-lg font-semibold text-primary whitespace-nowrap"
              style={{ animationDelay: "0.8s" }}
            >
              # 같이, 가치있게
            </span>
            <span
              className="floating-badge absolute top-[60%] right-100 inline-flex items-center px-4 py-2 bg-blue-9 rounded-full shadow-sm text-lg font-semibold text-blue-1 whitespace-nowrap"
              style={{ animationDelay: "1.8s" }}
            >
              # 스마트 주보
            </span>
            <span
              className="floating-badge absolute -bottom-20 right-70 inline-flex items-center px-4 py-2 bg-blue-9 rounded-full shadow-sm text-lg font-semibold text-blue-1 whitespace-nowrap"
              style={{ animationDelay: "2.8s" }}
            >
              # 교적부
            </span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-10 mb-4">흩어진 교회 업무를 한 곳에서</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bluegrey-2 rounded-2xl p-6">
              <h3 className="font-semibold text-bluegrey-8 mb-4 text-lg flex items-center gap-2">
                지금까지는
              </h3>
              <ul className="space-y-3 text-sm text-bluegrey-8">
                {[
                  "같은 공지를 채널마다 올렸어요",
                  "행사 신청 명단을 엑셀로 다시 정리했어요",
                  "교인 정보를 여러 곳에서 찾아 헤맸어요",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-grey-6 mt-0.5 shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-blue-6 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-4 text-lg flex items-center gap-2">
                ToGather에서는
              </h3>
              <ul className="space-y-3 text-sm text-blue-8">
                {[
                  "공지와 일정을 한 번만 등록해요",
                  "행사 안내와 일정을 함께 관리해요",
                  "스마트주보로 주보를 매주 간편하게 제작해요",
                  "교적부에서 교인 정보를 쉽게 찾고 관리해요",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Service />
      <Pricing />
      <Guide />
      <Team />
      <Contact />
    </div>
  );
}
