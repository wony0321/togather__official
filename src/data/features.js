import { FileText, CreditCard, Users, Bot, Smartphone, Bell, Landmark, Megaphone, BarChart3 } from "lucide-react";

export const features = [
  {
    id: "cms",
    icon: FileText,
    title: "콘텐츠 관리 (CMS)",
    description: "공지, 일정, 게시물, 갤러리를 하나의 관리자 페이지에서 손쉽게 발행하고 관리하세요.",
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "신청·결제·영수증",
    description: "프로그램 신청, 회비 결제, 영수증 자동 발행까지. 별도 외부 결제 도구가 필요 없습니다.",
  },
  {
    id: "members",
    icon: Users,
    title: "회원 관리",
    description: "구성원 데이터를 체계적으로 관리하고, 참여율·이탈률 등 데이터 기반 운영이 가능합니다.",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI 업무 자동화",
    description: "반복 업무를 AI가 자동 처리합니다. 공지 작성, 데이터 정리 등 운영 부담을 줄여드립니다.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "모바일 최적화 웹앱",
    description: "PC·태블릿·스마트폰 어디서든 완벽하게 작동하는 반응형 조직 전용 웹앱을 제공합니다.",
  },
  {
    id: "notification",
    icon: Bell,
    title: "푸시 알림",
    description: "새 공지, 일정 변경, 신청 완료 등 중요 정보를 구성원에게 실시간 알림으로 전달합니다.",
  },
];

export const homeFeatures = [
  {
    id: "church-content",
    icon: Landmark,
    title: "교회 홈페이지·콘텐츠",
    description: "예배 안내, 설교, 공지와 일정을 한곳에서 관리합니다.",
  },
  {
    id: "notice-community",
    icon: Megaphone,
    title: "공지·일정·커뮤니티",
    description: "공지, 알림, 소그룹과 교회 소식을 성도에게 전달합니다.",
  },
  {
    id: "apply-payment",
    icon: CreditCard,
    title: "신청·결제·알림",
    description: "행사 안내부터 신청자 명단과 결제 확인까지 하나로 연결합니다.",
  },
  {
    id: "members-admin",
    icon: BarChart3,
    title: "교인/교적·관리자·통계·AI",
    description: "교인 정보, 참여 기록과 운영 현황을 체계적으로 관리합니다.",
  },
];
