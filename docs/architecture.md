# 아키텍처 문서

## 시스템 구조

```
사용자 브라우저
    │
    ├── Public Pages (RootLayout)
    │   ├── / (Home)
    │   ├── /service
    │   ├── /pricing
    │   ├── /team
    │   └── /contact ──→ POST /api/inquiries
    │
    └── Admin Pages (AdminLayout + PrivateRoute)
        ├── /admin (Dashboard) ──→ GET /api/inquiries, /api/clients
        ├── /admin/inquiries ──→ GET/PATCH /api/inquiries
        ├── /admin/clients ──→ GET /api/clients
        └── /admin/team ──→ GET/POST/PUT/DELETE /api/team

상태 관리 (Zustand)
    ├── authStore (persist) — JWT 토큰, 사용자 정보
    ├── inquiryStore — 문의 목록, 선택된 문의
    └── uiStore — 모바일 메뉴, 모달
```

## 인증 흐름

1. `/admin/login` 페이지에서 이메일+비밀번호 입력
2. `POST /api/auth/login` → `{ user, token }` 응답
3. Zustand authStore에 저장 (localStorage persist)
4. 이후 모든 API 요청에 `Authorization: Bearer <token>` 자동 첨부
5. 401 응답 시 authStore 초기화 + `/admin/login` 리다이렉트

## 문의 폼 흐름

1. `/contact` 페이지에서 폼 작성 및 제출
2. `POST /api/inquiries` 호출
3. 성공 시 성공 메시지 표시
4. 어드민 `/admin/inquiries`에서 확인 및 상태 변경

## 환경별 설정

| 환경 | API URL |
|------|---------|
| 개발 | `http://localhost:8080/api` (기본값) |
| 프로덕션 | `.env.local`의 `VITE_API_URL` |
