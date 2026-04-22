---
name: Figma Foundation 페이지 디자인 시스템 구조
description: UI 컴포넌트 가이드 Figma 파일의 Foundation 페이지 구조 및 디자인 토큰 현황
type: project
---

## 파일 정보
- **fileKey**: `4WBzsSdOqAjZjtUUESKI31`
- **파일명**: UI 컴포넌트 가이드
- **Foundation 페이지명**: `🎨 Foundation` (이모지 포함, node-id: `8:2`)
- **Components 페이지명**: `🧩 Components` (node-id: `5:2`)

## Foundation 프레임 (`8:2`) 레이아웃 규격
- layoutMode: VERTICAL, itemSpacing: 64px
- padding: top/bottom 64px, left/right 80px
- 배경: 흰색 (`#FFFFFF`)
- 구분선: `#E5E7EB`, height 1px, width 1200px

## Foundation 섹션 목록 (node-id 순)
| 섹션명 | node-id | 설명 |
|---|---|---|
| Section__Colors | 8:3 | Primary/Secondary/GrayScale/Semantic/Base 색상 팔레트 |
| Section__Typography | 9:2 | h1~h6, body1~5, caption1~3 타이포그래피 테이블 |
| Section__Spacing | 10:2 | spacing/4 ~ spacing/64 시각화 |
| Section__StateColors | 40:2 | disabled/readonly State Colors (2026-04-22 추가) |
| Section__BorderRadius | 41:2 | xs~full Border Radius 시각화 (2026-04-22 추가) |

## 디자인 패턴 (기존 섹션 기준)
- **섹션 타이틀**: Inter Bold 28px, `#374151`
- **서브 그룹 라벨**: Inter Semi Bold 14px, `#6B7280`
- **스와치 박스**: 80×64px, cornerRadius 8px, border `#E5E7EB` 1px inside
- **스와치 이름 텍스트**: Inter Semi Bold 11px, `#374151`
- **스와치 hex 텍스트**: Inter Regular 10px, `#6B7280`
- **스와치 내부 gap**: 8px (VERTICAL auto layout)
- **스와치 간 gap**: 16px (HORIZONTAL row)
- **그룹 내 gap**: 16px (라벨 ↔ 스와치row)
- **섹션 내 gap**: 32px

## 등록된 색상 토큰 (Foundation 기준)

### Primary
- `primary/main`: `#3B82F6`
- `primary/light`: `#93C5FD`
- `primary/dark`: `#1D4ED8`

### Secondary
- `secondary/main`: `#8B5CF6`
- `secondary/light`: `#C4B5FD`
- `secondary/dark`: `#6D28D9`

### Gray Scale
- `gray/100`: `#F3F4F6` ~ `gray/900`: `#111827` (100단위 9단계)

### Semantic
- `semantic/success`: `#22C55E`
- `semantic/warning`: `#F59E0B`
- `semantic/error`: `#EF4444`
- `semantic/info`: `#3B82F6`

### Base
- `background`: `#FFFFFF`
- `surface`: `#F9FAFB`
- `border`: `#E5E7EB`

### State (2026-04-22 추가)
- `color/state/disabled/background`: `#F3F4F6`
- `color/state/disabled/text`: `#9CA3AF`
- `color/state/disabled/border`: `#E5E7EB`
- `color/state/readonly/background`: `#F9FAFB`
- `color/state/readonly/text`: `#4B5563`
- `color/state/readonly/border`: `#D1D5DB`

## Border Radius 토큰 (2026-04-22 추가)
- `borderRadius/xs`: 2px
- `borderRadius/sm`: 4px
- `borderRadius/md`: 8px
- `borderRadius/lg`: 12px
- `borderRadius/xl`: 16px
- `borderRadius/2xl`: 24px
- `borderRadius/full`: 9999px

**Why:** Variables 패널에 신규 토큰 추가 후 Foundation 캔버스 시각화 섹션 동기화 작업

**How to apply:** 향후 신규 토큰 추가 시 Variables 패널 + Foundation 캔버스 두 곳 모두 업데이트 필요
