# ToGather Company Website — CLAUDE.md

## 프로젝트 개요

ToGather 회사 공식 웹사이트. 중·소규모 비영리단체·교육기관·커뮤니티 조직을 위한
SaaS 기반 All-in-One 디지털 플랫폼을 소개하고, 문의를 접수하며, 내부 직원이 운영을 관리한다.

## 기술 스택

- **프레임워크**: React 19 + Vite 7
- **라우터**: react-router 7 (createBrowserRouter)
- **상태관리**: Zustand 5 (persist 미들웨어로 auth 유지)
- **스타일**: Tailwind CSS 4 (v4 syntax: `@import "tailwindcss"`)
- **HTTP**: axios (인터셉터로 JWT 자동 첨부)
- **언어**: JavaScript (TypeScript 미사용)

## 폴더 구조

```
src/
├── App.jsx             # 라우터 정의 (public + admin)
├── layouts/
│   ├── RootLayout.jsx  # 공개 페이지: Header + Footer
│   └── AdminLayout.jsx # 어드민: Sidebar + Outlet
├── pages/
│   ├── Home/           # 랜딩 페이지
│   ├── Service/        # 서비스·제품 소개
│   ├── Pricing/        # 요금제
│   ├── Team/           # 팀 소개
│   ├── Contact/        # 도입 문의 폼
│   └── admin/          # 직원 전용 페이지
│       ├── Login.jsx
│       ├── Dashboard.jsx
│       ├── Inquiries.jsx
│       ├── Clients.jsx
│       └── TeamManage.jsx
├── components/
│   └── layout/         # Header, Footer, AdminSidebar
├── store/              # Zustand 스토어
│   ├── authStore.js    # 로그인 상태 (persist)
│   ├── inquiryStore.js # 문의 목록 상태
│   └── uiStore.js      # UI 상태 (모바일 메뉴 등)
├── data/               # 정적 데이터 (팀원, 요금제, 기능)
├── services/api.js     # axios 인스턴스 + API 함수
└── router/PrivateRoute.jsx  # 어드민 보호 라우트
```

## 라우트 구조

| 경로 | 페이지 | 접근 |
|------|--------|------|
| `/` | Home | 공개 |
| `/service` | Service | 공개 |
| `/pricing` | Pricing | 공개 |
| `/team` | Team | 공개 |
| `/contact` | Contact | 공개 |
| `/admin/login` | AdminLogin | 공개 |
| `/admin` | Dashboard | 인증 필요 |
| `/admin/inquiries` | Inquiries | 인증 필요 |
| `/admin/clients` | Clients | 인증 필요 |
| `/admin/team` | TeamManage | 인증 필요 |

## 환경 변수

`.env.local` 파일에 설정:
```
VITE_API_URL=http://localhost:8080/api
```

## 데이터 업데이트 위치

- **팀원 정보**: `src/data/team.js`
- **요금제**: `src/data/pricing.js`
- **서비스 기능**: `src/data/features.js`

## 개발 명령어

```bash
npm install
npm run dev    # localhost:5173
npm run build  # dist/ 빌드
```

## 컨벤션

- 컴포넌트: PascalCase 파일명
- 스토어: camelCase + `use` prefix (useAuthStore)
- import alias: `@/` = `src/`
- Tailwind 클래스 우선, 인라인 스타일 지양
- 백엔드 미연동 시 try/catch로 graceful fallback
