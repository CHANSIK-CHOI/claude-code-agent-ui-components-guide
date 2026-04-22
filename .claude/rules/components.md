## 컴포넌트 제작 규칙

###
- className은 BEM 스타일로 CamelCase 사용
- 컴포넌트 명칭은 PascalCase 사용

### Props 설계
- 명시적 props만 직접 선언: `variant`, `size`, `disabled`, `error`, `loading`, `className`, `label`, `icon`
- 나머지는 `...rest`로 연결된 HTML 태그에 위임
- 타입은 연결 태그 기준 확장: `React.InputHTMLAttributes<HTMLInputElement>` 등

### Variant 구성
- CVA(`class-variance-authority`) 필수 사용
- `base` → `variants` → `defaultVariants` 순서로 정의
- 상태: `disabled`, `error`, `loading` 반드시 포함

### 스타일링
- **SCSS 모듈 사용**: `ComponentName.module.scss`
- Width 기본 `100%`
- 디자인 토큰은 SCSS 변수로 관리: `$color-primary`, `var(--color-primary)` 등
- raw hex 직접 사용 금지, 반드시 토큰 변수 참조
- Typography도 SCSS mixin 또는 변수로 정의 후 사용

### 파일 구조
```
components/ui/ComponentName/
├── ComponentName.tsx
├── ComponentName.module.scss
└── ComponentName.stories.tsx
```

### Storybook
- 명시적 props만 `argTypes`에 정의
- `...rest` 위임 대상 태그를 `docs.description`에 명시
- 컴포넌트 수정 시 스토리 파일 반드시 함께 업데이트