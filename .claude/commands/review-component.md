---
description: '컴포넌트 구현이 기획 명세 및 Figma 디자인과 일치하는지 두 에이전트가 동시에 검수한다.'
---

## 사용법

```
/review-component [ComponentName]
예) /review-component Button
예) /review-component Input
```

---

## 실행 순서

### STEP 1 — 파일 존재 확인
1. `.claude/specs/[ComponentName].md` 존재 여부 확인
2. `components/ui/[ComponentName]/` 구현 파일 존재 여부 확인
3. 둘 중 하나라도 없으면 즉시 중단 후 사용자에게 알림

### STEP 2 — 두 에이전트 동시 검수

**uiux-planner-agents** — 설계 명세 대조
- `.claude/specs/[ComponentName].md` 읽기
- 구현 코드(`[ComponentName].tsx`) 읽기
- 아래 항목 대조:
  - 영역 구성(Area Map) 모두 구현됐는지
  - Variant 목록 누락 없는지
  - 상태(State) 6개 모두 처리됐는지
  - 동작 규칙 준수 여부
  - 이벤트 목록 구현 여부
  - 접근성 요구사항 반영 여부

**uiux-designer-agents** — Figma 디자인 대조
- Figma 파일 ID `4WBzsSdOqAjZjtUUESKI31` 에서 해당 컴포넌트 섹션 읽기
- 구현 코드(`[ComponentName].module.scss`) 읽기
- 아래 항목 대조:
  - 색상 토큰 일치 여부
  - 타이포그래피 스타일 일치 여부
  - 간격(padding, margin) 수치 일치 여부
  - 아이콘 크기 일치 여부
  - 상태별 시각 표현 일치 여부
  - 쇼케이스(Variant × Size, States, Modes) 구현 여부

### STEP 3 — 결과 보고

두 에이전트 검수 완료 후 아래 형식으로 통합 보고:

```
## [ComponentName] 컴포넌트 검수 결과

### 설계 명세 검수 (uiux-planner-agents)
✅ 일치 항목: [목록]

| 우선순위 | 항목 | 내용 |
|---------|------|------|
| 🔴 높음 | ... | ... |
| 🟡 중간 | ... | ... |
| 🟢 낮음 | ... | ... |

### Figma 디자인 검수 (uiux-designer-agents)
✅ 일치 항목: [목록]

| 우선순위 | 항목 | Figma | 코드 |
|---------|------|-------|------|
| 🔴 높음 | ... | ... | ... |
| 🟡 중간 | ... | ... | ... |

### 수정 권장 순서
1. 🔴 [가장 시급한 항목]
2. 🟡 [다음 항목]
...

수정 작업을 진행할까요?
```

---

## 주의사항

- 두 에이전트는 반드시 **동시에** 실행한다 (순차 실행 금지)
- 불일치 항목은 우선순위와 함께 반드시 원인을 명시한다
- 수정 여부는 사용자가 결정한다 — 에이전트가 임의로 수정 착수 금지