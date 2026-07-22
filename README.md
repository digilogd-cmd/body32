# BODY32

> Decode Your Body. Balance Your Life.

BODY32는 일상의 에너지, 회복, 관계, 적응 패턴을 20개 질문으로 돌아보고 32개 Guardian 중 하나를 만나는 한국어·영어 웰니스 자기 탐색 경험입니다.

BODY32는 의료 진단이나 치료 서비스가 아닙니다. 현재 버전은 가입을 요구하지 않으며 답변과 결과를 서버 또는 브라우저 저장소에 보관하지 않습니다.

## 현재 구현

- 한국어·영어 랜딩 페이지와 진단 흐름
- 버전이 명시된 20개 문항과 결정론적 계산 엔진
- `4개 Energy Rhythm × 8개 Guardian Archetype = 32개 유형`
- 32개 Guardian 캐릭터 아트와 유형별 결과 콘텐츠
- BODY32 Balance와 계산 근거 설명
- 정사각형·스토리형 Passport PNG 저장
- 개인정보가 제외된 결과 공유
- 키보드, 스크린리더, 모바일, 모션 감소 지원

## 로컬 실행

```bash
npm install
npm run dev
```

기본 주소는 `http://localhost:3000/ko`이며 영어는 `/en`에서 확인할 수 있습니다.

## 품질 검사

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## 주요 문서

- `docs/MASTER_PRD.md` — 제품 요구사항
- `docs/BRAND_GUIDE.md` — 브랜드 원칙
- `docs/DESIGN_SYSTEM.md` — UI 규칙
- `docs/CHARACTER_BIBLE.md` — Guardian 세계관과 제작 기준
- `docs/ALGORITHM.md` — 문항과 계산 규칙
- `docs/TECHNICAL_ARCHITECTURE.md` — 기술 구조
- `docs/RELEASE_CHECKLIST.md` — 출시 준비 상태
- `tasks/README.md` — 작업 이력
