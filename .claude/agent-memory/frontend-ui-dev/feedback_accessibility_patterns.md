---
name: "접근성 처리 패턴 — disabled vs loading 분리"
description: "Button 등 인터랙티브 컴포넌트에서 disabled/loading 접근성 처리 확립된 패턴"
type: feedback
---

네이티브 `disabled` 상태와 loading(soft-disabled) 상태의 접근성 처리를 반드시 분리한다.

- 네이티브 `disabled`: 버튼에 `disabled` 속성 부여, `aria-disabled` 중복 추가 금지. 스크린리더가 자동으로 비활성 인식.
- loading: `disabled` 속성 없이 `aria-disabled="true"` 만 부여. 포커스 이동 가능하게 유지. CSS는 `:disabled` 가 아닌 `[aria-disabled='true']:not(:disabled)` 로 구분 적용.
- loading 클릭 차단: CSS `pointer-events: none` 사용 금지. JS 핸들러 내부에서 early return으로 처리.

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (loading || disabled) return;
  rest.onClick?.(e);
};

<button
  disabled={disabled}          // loading일 때는 disabled 속성 없음
  aria-disabled={loading || disabled}
  aria-busy={loading}
  onClick={handleClick}
/>
```

**Why:** 기획 에이전트 검토에서 pointer-events: none이 hover/focus 피드백까지 차단하는 UX 문제, aria-disabled 중복이 보조기기 혼란을 유발할 수 있다는 점 지적됨.

**How to apply:** 모든 인터랙티브 컴포넌트(Button, Input, Select 등)에 동일 패턴 적용. 새 컴포넌트 구현 시 이 패턴을 기본으로 삼는다.
