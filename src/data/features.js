import { Settings, Smartphone, Landmark, Globe, FileText, BookOpen, Megaphone, Users } from "lucide-react";

export const productFeatures = [
  {
    id: "admin",
    icon: Settings,
    title: "관리자 모드",
    description: "교회 소식을 올리고, 교인 정보를 관리해요.",
  },
  {
    id: "church-site",
    icon: Landmark,
    title: "교회 홈페이지",
    description: "예배 시간, 설교 등 교회와 관련된 각종 정보를 빠르게 확인해요.",
  },
  {
    id: "member-app",
    icon: Smartphone,
    title: "성도용 앱",
    description: "휴대폰에서 주보를 보고, 교회 소식을 바로바로 확인해요.",
  },
];

export const mainFeatures = [
  {
    id: "webapp",
    icon: Globe,
    title: "교회 웹앱",
    description: "PC와 휴대폰에서 교회 소개와 예배 안내를 볼 수 있어요.",
  },
  {
    id: "bulletin",
    icon: FileText,
    title: "스마트 주보",
    description: "매주 주보를 간편하게 만들어 공유해요.",
  },
  {
    id: "bible-typing",
    icon: BookOpen,
    title: "성경 타자 (읽기·쓰기)",
    description: "PC와 휴대폰에서 언제든지 말씀을 읽고, 따라 쓸 수 있어요.",
  },
  {
    id: "notice-event",
    icon: Megaphone,
    title: "공지·행사·일정·사진",
    description: "교회 소식과 행사 일정을 올리고, 사진으로 공동체 활동을 남겨요.",
  },
  {
    id: "member-registry",
    icon: Users,
    title: "교인 관리 (교적부)",
    description: "교적부에서 교인 정보를 쉽게 찾고 관리해요.",
  },
];
