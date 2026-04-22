---
name: "Button 컴포넌트 수정 이력 (기획/디자인 검토 반영)"
description: "기획 에이전트 + 디자인 에이전트 검토 결과를 반영한 Button 컴포넌트 수정 내역 및 결정 사항"
type: project
---

Button 컴포넌트가 기획/디자인 에이전트 검토를 거쳐 수정되었다 (2026-04-22).

**수정된 파일**
- `src/styles/abstracts/_tokens.scss`
- `components/ui/Button/Button.tsx`
- `components/ui/Button/Button.module.scss`
- `components/ui/Button/Button.stories.tsx`

**핵심 결정 사항**

1. `--color-primary-darker: #1A3FAF` 토큰 추가됨. primary active 상태는 이 토큰 직접 사용 (filter: brightness 방식 제거).

2. loading 상태 클릭 차단 방식: CSS `pointer-events: none` 제거, JS의 `handleClick` 내부 early return으로 처리. hover/focus 피드백이 유지됨.

3. disabled vs loading의 aria 처리 분리:
   - 네이티브 `disabled`: `aria-disabled` 중복 없이 `:disabled` CSS 선택자만 사용
   - loading(soft-disabled): `disabled` 속성 없이 `aria-disabled="true":not(:disabled)` 로 스타일 적용, 포커스 가능 유지

4. lg size 가로 패딩: `--spacing-24`(2.4rem) → `--spacing-20`(2rem) (Figma 기준)

5. spinner 및 아이콘 래퍼 고정 크기: `1.6rem` → `1.2rem` (Figma 기준 12px)

6. iconOnly + aria-label 미전달 시 개발 환경 `console.warn` 추가.

**Why:** 디자인 검토에서 Figma 기준값과 코드 불일치 발견. 기획 검토에서 접근성 이슈(aria 중복, pointer-events 클릭 차단의 한계) 제기됨.

**How to apply:** 향후 Button 수정 시 위 결정 사항을 기준으로 판단. 특히 loading 차단 방식은 반드시 JS 레벨 early return 유지.
