---
name: UI 컴포넌트 가이드 파일 정보
description: IX NEXT 팀 퍼블리싱 폴더에 생성된 UI 컴포넌트 가이드 Figma 파일 키와 구조
type: reference
---

## Figma 파일 정보
- **파일명**: UI 컴포넌트 가이드
- **fileKey**: `4WBzsSdOqAjZjtUUESKI31`
- **URL**: https://www.figma.com/design/4WBzsSdOqAjZjtUUESKI31
- **팀**: IX NEXT (`team::1598944422832936785`)
- **폴더**: 퍼블리싱

## 페이지 구성
- `🎨 Foundation` (id: 0:1) — Colors, Typography, Spacing 토큰 시각화
- `🧩 Components` (id: 5:2) — 컴포넌트 섹션 19개

## Variables 현황
- **Color 컬렉션** (id: VariableCollectionId:1:2): 22개 변수
  - Primary(3), Secondary(3), Gray(9), Semantic(4), Base(3)
  - 네이밍: `color/primary/main`, `color/gray/100` 등 슬래시 계층 구조
  - 스코프: `["ALL_FILLS", "STROKE_COLOR"]`
  - CSS Syntax: `var(--color-primary-main)` 형태
- **Spacing 컬렉션** (id: VariableCollectionId:2:2): 10개 변수
  - 값: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 (px)
  - 네이밍: `spacing/4`, `spacing/8` 등
  - 스코프: `["GAP", "WIDTH_HEIGHT"]`

## Text Styles 현황
- 56개 등록 (14 sizes × 4 weights)
- 폰트: Inter
- 네이밍: `h1/bold`, `body2/regular`, `caption1/semibold` 등
- 사이즈: h1(48)~h6(20), body1(18)~body5(13), caption1(12)~caption3(10)
- 웨이트: regular(400), medium(500), semibold(Semi Bold), bold(700)
- Line Height: heading계열 120%, body계열 160%, caption계열 140%

## Components 페이지 섹션 목록
1. Button, 2. Input / TextField, 3. Select / Dropdown
4. Checkbox, 5. Radio, 6. Toggle / Switch
7. Badge / Tag, 8. Alert / Toast, 9. Modal / Dialog
10. Card, 11. Table, 12. Pagination
13. Tabs, 14. Breadcrumb, 15. Avatar
16. Tooltip, 17. Progress / Loading, 18. Accordion, 19. Chip / Filter

각 섹션: 1400×400px, 80px 간격, Section 노드 타입
