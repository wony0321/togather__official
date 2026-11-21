import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import Service from "@/pages/Service/Service";
import Pricing, { PricingFaq } from "@/pages/Pricing/Pricing";
import Guide from "@/pages/Guide/Guide";
import Team from "@/pages/Team/Team";
import Contact from "@/pages/Contact/Contact";

const HEADLINE_LINE_1 = "교회 운영을 하나로";
const HEADLINE_LINE_2 = "성도와 더 가까이";
const TYPING_SPEED_MS = 100;
const LINE_GAP_MS = 500;

function useTypingHeadline() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    let i = 0;
    let line2Timer;
    let line2Interval;
    const line1Interval = setInterval(() => {
      i += 1;
      setLine1(HEADLINE_LINE_1.slice(0, i));
      if (i >= HEADLINE_LINE_1.length) {
        clearInterval(line1Interval);
        line2Timer = setTimeout(() => {
          let j = 0;
          line2Interval = setInterval(() => {
            j += 1;
            setLine2(HEADLINE_LINE_2.slice(0, j));
            if (j >= HEADLINE_LINE_2.length) clearInterval(line2Interval);
          }, TYPING_SPEED_MS);
        }, LINE_GAP_MS);
      }
    }, TYPING_SPEED_MS);

    return () => {
      clearInterval(line1Interval);
      clearInterval(line2Interval);
      clearTimeout(line2Timer);
    };
  }, []);

  return [line1, line2];
}

export default function Home() {
  const [headlineLine1, headlineLine2] = useTypingHeadline();

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
          <div className="hidden md:block absolute left-0 top-4/5 -translate-y-1/2 w-[42%] -ml-[clamp(4rem,13.5rem_-_10.7vw,8.5rem)]">
            <img
              src="/mockups/web-preview.png"
              alt="ToGather 웹 미리보기"
              className="w-[120%] -ml-15 rounded-r-xl shadow-xl shadow-blue-2 border border-blue-2"
            />
            <img
              src="/mockups/mobile-preview.png"
              alt="ToGather 앱 미리보기"
              className="absolute -bottom-15 right-2 w-44 rounded-[2rem]"
            />
          </div>

          {/* 헤드라인: 화면 정중앙 */}
          <div className="relative z-10 text-center px-6">
            <h1 className="relative text-4xl md:text-5xl font-bold text-blue-10 mb-6 leading-relaxed">
              {/* 공간 확보용: 최종 텍스트를 보이지 않게 렌더링해 타이핑 중 높이 변화를 막음 */}
              <span className="invisible" aria-hidden="true">
                {HEADLINE_LINE_1}<br />
                <span className="block">{HEADLINE_LINE_2}</span>
              </span>
              <span className="absolute inset-0">
                {headlineLine1}<br />
                <span className="text-primary">{headlineLine2}</span>
              </span>
            </h1>
          </div>

          {/* 우측 여백: 떠다니는 해시태그 */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[26%] pointer-events-none" aria-hidden="true">
            <span
              className="floating-badge absolute -top-30 right-150 inline-flex items-center px-4 py-2 bg-white border border-blue-1 rounded-full text-lg font-semibold text-primary whitespace-nowrap"
              style={{ animationDelay: "0s" }}
            >
              # 교회 All-in-One 디지털 플랫폼
            </span>
            <span
              className="floating-badge absolute top-0 right-30 inline-flex items-center px-4 py-2 bg-blue-1 rounded-full text-lg font-semibold text-primary whitespace-nowrap"
              style={{ animationDelay: "0.8s" }}
            >
              # 같이, 가치있게
            </span>
            <span
              className="floating-badge absolute top-[60%] right-100 inline-flex items-center px-4 py-2 bg-blue-9 rounded-full text-lg font-semibold text-blue-1 whitespace-nowrap"
              style={{ animationDelay: "1.8s" }}
            >
              # 스마트 주보
            </span>
            <span
              className="floating-badge absolute -bottom-20 right-70 inline-flex items-center px-4 py-2 bg-blue-9 rounded-full text-lg font-semibold text-blue-1 whitespace-nowrap"
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
            <div className="reveal-card bg-bluegrey-2 rounded-2xl p-6">
              <h3 className="font-semibold text-bluegrey-8 mb-4 text-lg flex items-center gap-2">
                지금까지는
              </h3>
              <ul className="space-y-3 text-sm text-bluegrey-8">
                {[
                  "주보 제작, 웹사이트 제작, 등 여러 외주 업체를 사용했어요",
                  "교인정보를 한눈에 보기 어려웠어요",
                  "성도들이 머물고 소통할 수 있는 온라인 공간이 부족했어요",
                  "노후화된 웹사이트로 인해 원하는 정보를 찾기가 어려웠어요"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-grey-6 mt-0.5 shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-card bg-white border border-blue-6 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-4 text-lg flex items-center gap-2">
                ToGather에서는
              </h3>
              <ul className="space-y-3 text-blue-8">
                {[
                  "스마트주보로 주보를 직접 만들고 모바일로 바로 전달해요",
                  "웹사이트 내용도 담당자가 직접 쉽게 수정해요",
                  "모바일 요람으로 성도들을 한눈에 확인해요",
                  "성경 타자·성경 읽기를 성도들과 함께해요",
                  "깔끔한 웹사이트에서 원하는 정보를 쉽게 찾아요",
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
      <PricingFaq />
    </div>
  );
}
