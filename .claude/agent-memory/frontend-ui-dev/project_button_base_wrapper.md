---
name: "Button — Base/Wrapper 구조 리팩터링"
description: "Button 컴포넌트를 ButtonBase → Button/ButtonLink 구조로 분리한 이력과 설계 결정"
type: project
---

Button 컴포넌트를 Base → Wrapper 패턴으로 리팩터링 완료 (2026-04-22).

## 파일 구조

```
components/ui/Button/
├── ButtonBase.tsx      ← CVA, ButtonSharedProps, buildButtonClass, ButtonContent (렌더링 없음)
├── Button.tsx          ← <button> 래퍼
├── ButtonLink.tsx      ← <a> 래퍼 (href 필수)
├── Button.module.scss  ← 공통 스타일 (fullWidth modifier 추가)
└── Button.stories.tsx  ← Button + ButtonLink 통합 스토리
```

## 주요 설계 결정

- `buttonVariants` (CVA): `fullWidth` boolean variant 추가
- `buildButtonClass(opts)`: error/loading modifier 포함 클래스 문자열 빌더 함수로 분리
- `ButtonContent`: iconOnly/label 모드 내부 콘텐츠 공용 렌더러 — export하되 직접 사용 예시 미노출
- `ButtonSharedProps`: 두 래퍼 공통 props 인터페이스

## ButtonLink 비활성 처리 (<a>는 네이티브 disabled 없음)

- `href`: `disabled || loading` 시 `undefined`
- `aria-disabled`: `disabled || loading ? true : undefined`
- `tabIndex`: `disabled ? -1 : undefined`
- `onClick`: `loading || disabled` 시 `e.preventDefault()` + early return

## Button aria 처리 (<button> 네이티브 disabled 활용)

- `disabled` prop → 네이티브 disabled attribute 사용 (aria-disabled 중복 추가 금지)
- `loading` 상태 → `aria-disabled={true}`, `aria-busy={true}` (포커스 유지)

**Why:** <button>은 네이티브 disabled가 보조기기에 자동 전달되므로 중복 aria-disabled 불필요. <a>는 네이티브 disabled가 없어 별도 처리 필요.

**How to apply:** Button 계열 컴포넌트 추가 시 동일 패턴 적용.
