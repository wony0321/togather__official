import { Link } from "react-router";
import { Landmark, Megaphone, UserCheck, BookOpen, Building2, Users, Globe, Sprout, ParkingSquare, TrainFront, Bus } from "lucide-react";

const setupInfoCategories = [
  {
    icon: Landmark,
    title: "교회 기본정보",
    items: "교회명, 주소, 전화번호, 팩스번호, 이메일, 교단, 사역자 전체 프로필",
  },
  {
    icon: Megaphone,
    title: "교회 소개 콘텐츠",
    items: "로고 이미지, 유튜브·SNS·오픈채팅방 링크, 표어와 말씀구절, 목사님 인사말, 비전·미션 3~4가지, 전체 예배 일정(시간·장소)",
  },
  {
    icon: UserCheck,
    title: "섬기는 사람들",
    items: "이름, 전화번호, 이메일, 직책(역할), 이미지, 학력",
  },
  {
    icon: BookOpen,
    title: "교회 연혁",
    items: "설립년도, 연혁 설명, 연도별 제목·날짜",
  },
  {
    icon: Building2,
    title: "층별 안내",
    items: "층별 시설 목록, 층별 도면",
  },
  {
    icon: Users,
    title: "공동체 목록",
    items: "부서명, 시간, 장소, 간략 소개(대상 연령 등), 이미지",
  },
  {
    icon: Globe,
    title: "전도·선교",
    items: "전도회장 이름·연락처, 전도 연혁, 선교 정보(날짜·위치·선교사님·보고내용)",
  },
  {
    icon: Sprout,
    title: "양육훈련",
    items: "구역 정보(구역장·구역원·시간·장소), 제자훈련(코스명·스케줄·장소·교재·대상·설명), 새가족훈련(시간·레벨·기간·스케줄)",
  },
  {
    icon: ParkingSquare,
    title: "주차 안내",
    items: "주차 위치, 유료·무료 여부, 시간, 부연 안내",
  },
  {
    icon: TrainFront,
    title: "대중교통",
    items: "지하철·버스 하차 지점",
  },
  {
    icon: Bus,
    title: "차량 운행",
    items: "루트별 이름, 승차 위치, 시간, 부연 설명",
  },
];

const steps = [
  {
    step: "01",
    title: "문의 접수",
    description: "도입 문의 폼을 작성해 주시면 교회 상황과 필요한 기능을 확인합니다.",
  },
  {
    step: "02",
    title: "상담 및 맞춤 제안",
    description: "교인 수와 필요 기능에 맞는 요금제와 구축 범위를 안내해 드립니다.",
  },
  {
    step: "03",
    title: "제작 (평균 3일)",
    description: "교회 홈페이지와 관리자·성도용 화면을 맞춤 구축합니다.",
  },
  {
    step: "04",
    title: "오픈 및 운영 지원",
    description: "오픈 후에도 운영 중 궁금한 점을 지속적으로 지원합니다.",
  },
];

export default function Guide() {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">도입 방법</h1>
          <p className="text-grey-8 text-lg max-w-2xl mx-auto">
            문의부터 오픈까지, 평균 3일이면 우리 교회에 맞는 플랫폼을 시작할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map(({ step, title, description }, index) => (
              <div key={step} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center">
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-12 h-[calc(100%+1.5rem)] w-0.5 bg-blue-2" aria-hidden="true" />
                )}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-0.5 bg-blue-2" aria-hidden="true" />
                )}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center md:mb-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-9 mb-2">{title}</h3>
                  <p className="text-sm text-grey-8 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required info */}
      <section className="pt-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-10 mb-3">제작을 위해 이런 정보를 준비해 주세요</h2>
            <p className="text-grey-8 max-w-2xl mx-auto">
              아래 항목을 미리 정리해 주시면 제작이 더 빨라집니다.
              입력해 주신 정보는 오픈 이후에도 관리자 페이지에서 언제든 직접 수정할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {setupInfoCategories.map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-white rounded-2xl border border-bluegrey-2 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  <h3 className="font-semibold text-blue-9">{title}</h3>
                </div>
                <p className="text-sm text-grey-8 leading-relaxed">{items}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-bluegrey-5 text-center mt-8">
            수집된 개인정보는 교회 동의 하에 처리되며, 관리자 페이지에서 언제든 수정·삭제할 수 있습니다.
            자세한 내용은 개인정보처리방침을 참고해 주세요.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-center">
        <h2 className="text-2xl font-bold text-white mb-4">지금 도입을 시작해 보세요</h2>
        <p className="text-pale mb-8">적합한 도입 방법과 예상 비용을 바로 안내해 드립니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-1 transition-colors">
            도입 문의
          </Link>
          <Link to="/pricing" className="px-8 py-3 bg-blue-6 text-white font-semibold rounded-xl border border-blue-5 hover:bg-blue-5 transition-colors">
            예상 비용 확인하기
          </Link>
        </div>
      </section>
    </div>
  );
}
