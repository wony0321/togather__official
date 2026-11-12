import { Smartphone, FileText, BookOpen, Megaphone, Users, Sparkles } from "lucide-react";

export const commonFeatures = [
  { icon: Smartphone, text: "반응형 조직 웹/앱" },
  { icon: FileText, text: "스마트 주보" },
  { icon: BookOpen, text: "성경 타자 (쓰기·읽기)" },
  { icon: Megaphone, text: "공지·행사·일정·사진 관리" },
  { icon: Users, text: "교인 관리 (교적부)" },
  { icon: Sparkles, text: "검색 AI 브리핑" },
];

export const pricingPlans = [
  {
    id: "basic",
    name: "베이직",
    nameEn: "Basic",
    memberRange: "1~100명",
    price: 29900,
    priceUnit: "월",
    setupFee: 0,
    description: "교인 100명 이하 소규모 교회에 적합한 요금제",
    cta: "시작하기",
  },
  {
    id: "standard",
    name: "스탠다드",
    nameEn: "Standard",
    memberRange: "101~300명",
    price: 39900,
    priceUnit: "월",
    setupFee: 250000,
    description: "교인 101~300명 중규모 교회에 적합한 요금제",
    cta: "시작하기",
  },
  {
    id: "premium",
    name: "프리미엄",
    nameEn: "Premium",
    memberRange: "301명 이상",
    price: 59900,
    priceUnit: "월",
    setupFee: 500000,
    description: "교인 301명 이상 대규모 교회에 적합한 요금제",
    cta: "시작하기",
  },
];
