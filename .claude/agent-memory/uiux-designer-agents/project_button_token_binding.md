---
name: Button ComponentSet 색상 변수 바인딩 및 variant 현황
description: xs 제거·active 추가·4개 수정 완료 — 현재 19개 variant, States 순서/ghost fills/outline textStyle/accessibleLabel 처리
type: project
---

Button ComponentSet(74:2) Step 1 + xs 제거 + active 추가 완료 (2026-04-22).

**Why:** 이전에 xs 사이즈 4종, outline 전체, state variant 4종이 raw hex를 직접 사용하고 있어 토큰 일관성이 깨진 상태였음.

**How to apply:** 향후 variant 추가/수정 시 아래 매핑 기준으로 변수 바인딩 적용.

## ComponentSet 위치
- fileKey: `4WBzsSdOqAjZjtUUESKI31`
- ComponentSet node-id: `74:2` (Button Section `11:2` 내부, mainComponent 경유 접근 필요)
- 주의: Components 페이지(id: `5:2`) Button Section의 자식은 INSTANCE뿐 — `findAll`로 COMPONENT_SET 직접 탐색 불가. `inst.mainComponent`를 통해 접근해야 함.

## 처리된 12개 variant

| node-id | variant 이름 | 처리 내용 |
|---------|-------------|----------|
| 86:10 | primary/xs/default | fill→primaryMain, textFill→background, textStyle→caption1/medium |
| 86:12 | secondary/xs/default | fill→secondaryMain, textFill→background, textStyle→caption1/medium |
| 86:14 | ghost/xs/default | fill투명유지, stroke→gray200, textFill→gray700, textStyle→caption1/medium |
| 86:16 | danger/xs/default | fill→semanticError, textFill→background, textStyle→caption1/medium |
| 86:2  | outline/xs/default | fill투명유지, stroke→primaryMain, textFill→primaryMain, textStyle→caption1/medium |
| 86:4  | outline/sm/default | fill투명유지, stroke→primaryMain, textFill→primaryMain |
| 86:6  | outline/md/default | fill투명유지, stroke→primaryMain, textFill→primaryMain |
| 86:8  | outline/lg/default | fill투명유지, stroke→primaryMain, textFill→primaryMain |
| 88:2  | primary/md/hover | fill→primaryDark, textFill→background, textStyle→body4/medium |
| 88:4  | primary/md/focused | fill→primaryMain, stroke→primaryMain, textFill→background, textStyle→body4/medium |
| 88:6  | primary/md/disabled | fill→disabledBg, textFill→disabledText, textStyle→body4/medium |
| 88:8  | primary/md/loading | fill→primaryMain, textFill→background, textStyle→body4/medium |

## 색상 변수 ID 매핑 (바인딩 시 참조)
- `color/primary/main` → VariableID:1:3
- `color/primary/dark` → VariableID:1:5
- `color/secondary/main` → VariableID:1:6
- `color/semantic/error` → VariableID:1:20
- `color/state/disabled/background` → VariableID:33:2
- `color/state/disabled/text` → VariableID:33:3
- `color/background` → VariableID:1:22
- `color/gray/200` → VariableID:1:10
- `color/gray/700` → VariableID:1:15

## 텍스트 스타일 ID 매핑
- xs (12px): `caption1/medium` → S:ba52fd870f5f76ec2e69196f6cf869c353fb6006,
- sm (13px): `body5/medium` → S:de6e943454b620e8d9d915ba3cc19d36fe7350ec,
- md (14px): `body4/medium` → S:e82dafff8ab6a1f087431914ee11e87e4fdb661b,
- lg (16px): `body2/medium` → S:bd272d18bd4c72528c928255098a9a0bde73cb05,

## xs 제거 작업 (2026-04-22 완료)
- ComponentSet에서 xs variant 5개 삭제: 86:2(outline), 86:10(primary), 86:12(secondary), 86:14(ghost), 86:16(danger)
- 쇼케이스(11:2) Variant×Size 구역 xs 열 노드 6개 삭제: 헤더(91:3) + 각 row 인스턴스
- sm/md/lg 열 X좌표 -100px 재정렬 (sm: 148, md: 248, lg: 348)
- ComponentSet 현재 variant 수: 19개 (sm/md/lg × 5variant + hover/focused/disabled/loading + active)

## active 상태 추가 (2026-04-22 완료)
- 신규 변수: `color/primary/darker` → VariableID:149:2, 값: rgb(0.102, 0.247, 0.686) ≈ #1A3FAF
- 신규 variant: `variant=primary, size=md, state=active` → node-id: 150:2
  - fill: color/primary/darker (VariableID:149:2)
  - text fill: color/background (VariableID:1:22)
- 쇼케이스 States 구역 최종 순서: default → hover → focused(x=312) → active(x=452) → disabled(x=592) → loading(x=732)
- focused 라벨: node-id 92:29, 버튼 인스턴스: 92:30 (x=312)
- active 라벨: node-id 154:2, 버튼 인스턴스: node-id 154:3 (x=452)

## 추가 완료 사항 (2026-04-22)

### 수정 1 — States 순서 교체
- focused(92:29/92:30) x=312, active(154:2/154:3) x=452로 재배치
- 최종 순서: default → hover → focused → active → disabled → loading

### 수정 2 — ghost sm/md/lg fills 제거
- ghost/sm (73:14), ghost/md (73:16), ghost/lg (73:18) mainComponent의 fills = [] 처리
- 기존 raw hex #ffffff fill 완전 제거

### 수정 3 — outline sm/md/lg textStyleId 적용
- outline/sm TEXT(86:5) → body5/medium (S:de6e943454b620e8d9d915ba3cc19d36fe7350ec,)
- outline/md TEXT(86:7) → body4/medium (S:e82dafff8ab6a1f087431914ee11e87e4fdb661b,)
- outline/lg TEXT(86:9) → body2/medium (S:bd272d18bd4c72528c928255098a9a0bde73cb05,)

### 수정 4 — Button__accessibleLabel 추가
- 93:38(Button__iconOnly) 프레임 내부에 TEXT 노드 생성
- node-id: 189:24, name: Button__accessibleLabel, visible: false
