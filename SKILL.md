# SKILL.md — ToGather Company Website

Claude 에이전트가 이 프로젝트에서 작업할 때 참조하는 스킬 가이드.

---

## 프로젝트 컨텍스트

ToGather 회사 웹사이트 (`/Users/myewon/Desktop/ToGather`).
교회용 제품 프론트엔드는 `/Users/myewon/Desktop/front/togather-front` (별도 프로젝트).

---

## Skills

### 1. `add-page` — 새 공개 페이지 추가

**언제**: 새 공개 라우트 페이지(About, Blog 등) 추가 요청 시

**절차**:
1. `src/pages/<PageName>/<PageName>.jsx` 생성
2. `src/App.jsx`의 RootLayout children에 라우트 추가
3. `src/components/layout/Header.jsx`의 navLinks에 항목 추가 (필요 시)

**패턴**:
```jsx
// src/pages/About/About.jsx
export default function About() {
  return <div>...</div>;
}
```

---

### 2. `add-admin-page` — 어드민 페이지 추가

**언제**: 직원 전용 관리 페이지 추가 요청 시

**절차**:
1. `src/pages/admin/<Name>.jsx` 생성
2. `src/App.jsx`의 admin children에 라우트 추가
3. `src/components/layout/AdminSidebar.jsx`의 navItems에 항목 추가

**패턴**:
```jsx
// src/pages/admin/NewPage.jsx
export default function NewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">페이지명</h1>
      {/* 내용 */}
    </div>
  );
}
```

---

### 3. `update-pricing` — 요금제 업데이트

**언제**: 가격·플랜·기능 변경 요청 시

**파일**: `src/data/pricing.js`

- `pricingPlans` 배열의 각 plan 객체 수정
- `setupFee` 변수로 초기 개설 비용 관리
- `features` 배열의 `included: true/false`로 기능 포함 여부 제어

---

### 4. `update-team` — 팀원 정보 업데이트

**언제**: 팀원 추가·수정·삭제 요청 시

**파일**: `src/data/team.js`

- `teamMembers` 배열에 팀원 객체 추가/수정
- 이미지는 `image: null`이면 이니셜 아바타 자동 표시
- 백엔드 연동 후에는 `teamApi` 사용

---

### 5. `update-content` — 마케팅 텍스트 업데이트

**언제**: 홈·서비스 페이지 카피 변경 요청 시

**파일**:
- `src/data/features.js` — 기능 카드, 통계 수치
- `src/pages/Home/Home.jsx` — 랜딩 섹션 문구
- `src/pages/Service/Service.jsx` — 서비스 상세 문구

---

### 6. `add-api` — API 엔드포인트 추가

**언제**: 새 백엔드 엔드포인트 연동 요청 시

**파일**: `src/services/api.js`

- 기존 패턴 그대로 api 객체에 메서드 추가
- 인터셉터가 자동으로 JWT 토큰 첨부
- 401 응답 시 자동 로그아웃 처리됨

```js
export const newApi = {
  getAll: () => api.get("/new-resource"),
  create: (data) => api.post("/new-resource", data),
};
```

---

### 7. `add-store` — Zustand 스토어 추가

**언제**: 새 전역 상태 관리 필요 시

**파일**: `src/store/<name>Store.js`

**패턴**:
```js
import { create } from "zustand";

const useNewStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));

export default useNewStore;
```

- auth처럼 영속성 필요 시 `persist` 미들웨어 적용
- 스토어명은 `use` prefix + PascalCase

---

### 8. `connect-backend` — 백엔드 연동

**언제**: 실제 API 서버와 연동 시

**절차**:
1. `.env.local`에 `VITE_API_URL=<실제 API URL>` 설정
2. 각 페이지의 try/catch fallback 제거
3. 어드민 로그인: `authApi.login()` 응답의 `{ user, token }` 형식 확인
4. 토큰 방식 확인 (Bearer JWT 기본 설정)

---

## 코드 스타일 가이드

| 규칙 | 내용 |
|------|------|
| 언어 | JavaScript (JSX), TypeScript 미사용 |
| 스타일 | Tailwind CSS 4 (v4 문법) |
| import | `@/` alias 사용 (예: `@/store/authStore`) |
| 상태 | Zustand 스토어 (React state는 로컬 UI 상태만) |
| HTTP | axios (`src/services/api.js`) |
| 라우터 | react-router 7 (`createBrowserRouter`) |
| 컴포넌트 | 파일명 PascalCase, default export |
| 주석 | 최소화 — 명백한 코드에는 불필요 |

---

## 주요 파일 참조

| 목적 | 파일 |
|------|------|
| 라우터 전체 | `src/App.jsx` |
| 인증 상태 | `src/store/authStore.js` |
| 어드민 보호 | `src/router/PrivateRoute.jsx` |
| API 클라이언트 | `src/services/api.js` |
| 팀원 데이터 | `src/data/team.js` |
| 요금제 데이터 | `src/data/pricing.js` |
| 기능 데이터 | `src/data/features.js` |
| 전역 스타일 | `src/index.css` |
