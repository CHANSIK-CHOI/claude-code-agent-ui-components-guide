---
description: '디자인 토큰(`design-tokens.json`)이 변경되었을 때 Figma, SCSS, 컴포넌트를 순서대로 동기화한다.변경된 토큰만 감지해서 영향받는 곳만 업데이트한다.'
---

## 사용법
/sync-tokens
 
---
 
## 실행 순서
 
### STEP 1 — 변경 감지
1. `.claude/design-tokens.json` 읽기
2. `src/styles/_tokens.scss` 읽기
3. 두 파일 비교 → 변경된 토큰 목록 추출
4. 변경사항이 없으면 "이미 최신 상태입니다" 보고 후 종료
### STEP 2 — Figma 동기화 (디자인 에이전트 역할)
1. Figma 파일 ID `4WBzsSdOqAjZjtUUESKI31` 접속
2. 변경된 토큰을 사용하는 Color Style / Text Style 업데이트
3. 영향받는 컴포넌트 목록 파악
4. 각 컴포넌트 쇼케이스 프레임 갱신:
   - `Variant × Size` 매트릭스
   - `States` 쇼케이스
   - `Modes` 쇼케이스
5. `.claude/design-tokens.json` 최신값으로 확정
### STEP 3 — SCSS 동기화 (프론트엔드 에이전트 역할)
1. `src/styles/_tokens.scss` 변경된 토큰 변수값 업데이트
2. 변경된 토큰 변수명으로 영향 컴포넌트 탐색:
   ```
   grep -r "[변경된변수명]" src/components/
   ```
3. 탐색된 각 `.module.scss` 파일에서 토큰 참조 확인 및 수정
4. raw hex가 직접 사용된 곳 발견 시 함께 토큰 변수로 교체
### STEP 4 — 완료 보고
 
아래 형식으로 보고한다:
 
```
✅ 토큰 동기화 완료
 
[변경된 토큰]
- $color-primary-main: #3B82F6 → #2563EB
- $spacing-16: 16px → 20px
 
[Figma 업데이트]
- Button (Variant × Size, States, Modes)
- Input / TextField (States)
 
[SCSS 업데이트]
- src/styles/_tokens.scss
- src/components/ui/Button/Button.module.scss
- src/components/ui/Input/Input.module.scss
 
⚠️ 수동 확인 필요 항목: (있는 경우만)
- [파일명]: [이유]
```
 
---
 
## 주의사항
 
- 전체 덮어쓰기 금지 — 변경된 토큰만 선택적으로 업데이트
- Figma 디자인 레이어(컴포넌트 실제 디자인)는 건드리지 않음 — Color/Text Style만 업데이트
- raw hex가 발견되면 자동 교체하되 사용자에게 보고
- STEP 2 또는 STEP 3 실패 시 즉시 사용자에게 알리고 중단