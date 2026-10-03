import { Link } from "react-router";
import { Frown, X, Sparkles, Check } from "lucide-react";
import { homeFeatures } from "@/data/features";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center bg-gradient-to-br from-primary/10 via-white to-primary/10 py-20 px-6">
        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">  
            <span className="inline-block px-3 py-1 bg-blue-2 text-primary font-semibold rounded-full mb-6 tracking-wide uppercase">
              교회 All-in-One 디지털 플랫폼
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-primary-title-1 leading-none mb-6">
              To Gather<br />
              <span className="text-primary-title-2">To Gether</span><br />
              <span className="text-primary-title-3">To Father</span>
            </h1>
            <p className="text-xl font-semibold text-grey-8 mb-10 leading-relaxed">
              교회 운영을 하나로, 성도와 더 가까이
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-7 transition-colors shadow-lg shadow-blue-2"
              >
                도입 문의
              </Link>
              <a
                href="https://front-sooty-nine.vercel.app/"
                target="_blank"
                rel="noopener"
                className="px-8 py-3.5 bg-white text-blue-8 font-semibold rounded-xl border border-blue-2 hover:border-blue-4 hover:text-primary transition-colors"
              >
                샘플 교회 둘러보기
              </a>
            </div>
          </div>

          {/* Mockup placeholder */}
          <div className="relative hidden md:block md:-mx-4">
            <div className="rounded-2xl border border-blue-2 bg-white shadow-xl shadow-blue-2 p-4">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-grey-4" />
                <span className="w-2.5 h-2.5 rounded-full bg-grey-4" />
                <span className="w-2.5 h-2.5 rounded-full bg-grey-4" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-1/2 bg-blue-2 rounded" />
                <div className="h-44 bg-blue-1 rounded-xl" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 bg-bluegrey-1 rounded-lg" />
                  <div className="h-20 bg-bluegrey-1 rounded-lg" />
                  <div className="h-20 bg-bluegrey-1 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 rounded-2xl border border-blue-2 bg-white shadow-xl shadow-blue-2 p-3">
              <div className="h-2.5 w-2/3 bg-blue-2 rounded mb-2" />
              <div className="h-24 bg-blue-1 rounded-lg mb-2" />
              <div className="h-2 w-1/2 bg-bluegrey-2 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-bluegrey-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-10 mb-4">교회 운영, 이런 불편이 있지 않으신가요?</h2>
            <p className="text-grey-8 max-w-2xl mx-auto">
              공지부터 행사 신청, 교인 정보 관리까지. 따로따로 관리하다 보니 같은 일을 반복하게 됩니다.<br />
              ToGather는 흩어진 교회 운영 업무를 하나의 흐름으로 연결합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-grey-4 rounded-2xl p-6">
              <h3 className="font-semibold text-bluegrey-9 mb-4 text-lg flex items-center gap-2">
                <Frown className="w-5 h-5 text-grey-6" strokeWidth={2} />
                현재 방식의 불편
              </h3>
              <ul className="space-y-3 text-sm text-bluegrey-8">
                {[
                  "같은 소식을 채널마다 반복해서 올려야 합니다.",
                  "행사 신청을 받은 뒤 다시 엑셀로 정리해야 합니다.",
                  "교인 정보가 여러 곳에 흩어져 있습니다.",
                  "신청비·회비 입금을 일일이 확인해야 합니다.",
                  "담당자가 바뀔 때마다 업무를 다시 설명해야 합니다.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-grey-6 mt-0.5 shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-1 border border-blue-2 rounded-2xl p-6">
              <h3 className="font-semibold text-primary mb-4 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" strokeWidth={2} />
                ToGather를 사용하면
              </h3>
              <ul className="space-y-3 text-sm text-blue-8">
                {[
                  "공지와 일정을 한 번만 등록하면 됩니다.",
                  "행사 신청부터 결제 확인까지 한곳에서 관리합니다.",
                  "교인 정보와 참여 기록을 한곳에 모읍니다.",
                  "신청·결제 상태를 한눈에 확인합니다.",
                  "담당자가 바뀌어도 업무를 그대로 이어갑니다.",
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

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-10 mb-4">교회 운영에 필요한 기능을 한곳에</h2>
            <p className="text-grey-8">
              교회 홈페이지부터 공지, 일정, 행사 신청, 결제, 교인 관리와 성도 커뮤니티까지
              하나의 관리자 화면에서 운영할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeFeatures.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="p-6 rounded-2xl border border-bluegrey-2 hover:border-blue-3 hover:shadow-md transition-all">
                <Icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.75} />
                <h3 className="font-semibold text-blue-9 mb-2">{title}</h3>
                <p className="text-sm text-grey-8 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/service"
              className="inline-block px-6 py-2.5 bg-blue-1 text-blue-8 font-semibold rounded-xl hover:bg-blue-2 transition-colors text-sm"
            >
              기능 자세히 보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">우리 교회에 필요한 기능부터 시작하세요</h2>
          <p className="text-pale mb-8 text-lg">
            적합한 도입 방법과 예상 비용을 바로 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-1 transition-colors"
            >
              도입 문의
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3.5 bg-blue-6 text-white font-semibold rounded-xl border border-blue-5 hover:bg-blue-5 transition-colors"
            >
              예상 비용 확인하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
