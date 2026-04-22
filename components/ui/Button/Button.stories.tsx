import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Plus, Settings } from 'lucide-react';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`...rest` props는 `<button>` 엘리먼트에 위임됩니다. `type`, `aria-label`, `onClick`, `onFocus`, `onBlur`, `onMouseEnter`, `onMouseLeave` 등 모든 네이티브 버튼 속성을 직접 사용할 수 있습니다.\n\n링크 역할이 필요한 경우 `ButtonLink` 컴포넌트를 사용하세요. `...rest` props는 `<a>` 엘리먼트에 위임됩니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: '버튼의 시각적 위계',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
    },
    iconOnly: {
      control: 'boolean',
      description: '아이콘만 표시하는 모드. true일 때 aria-label 필수',
    },
    fitWidth: {
      control: 'boolean',
      description: '콘텐츠 크기에 맞게 너비 축소 (기본값: 부모 너비 100%)',
    },
    label: {
      control: 'text',
      description: '버튼 레이블 텍스트 (children이 없을 때 사용)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 — JS 레벨에서 클릭 차단(hover/focus 유지), spinner 표시, leftIcon 대체. aria-disabled="true"로 보조기기에 전달.',
    },
    error: {
      control: 'boolean',
      description: '에러 상태 — 에러 색상 일시 적용',
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 — 네이티브 disabled, 클릭 및 포커스 차단. 보조기기에 자동 전달되므로 aria-disabled 불필요.',
    },
    leftIcon: { control: false },
    rightIcon: { control: false },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ---------------------------------------------------------------------------
// 기본 스토리
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: '버튼',
    variant: 'primary',
    size: 'md',
  },
};

// ---------------------------------------------------------------------------
// Variant 쇼케이스
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="outline" label="Outline" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="danger" label="Danger" />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Size 쇼케이스
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm" label="Small" />
      <Button size="md" label="Medium" />
      <Button size="lg" label="Large" />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 상태 쇼케이스
// ---------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Default" />
      <Button label="Loading" loading />
      <Button label="Disabled" disabled />
      <Button label="Error" error />
      <Button label="Loading + Disabled" loading disabled />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 아이콘 조합
// ---------------------------------------------------------------------------

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button label="Left Icon" leftIcon={<Plus size={16} />} />
      <Button label="Right Icon" rightIcon={<ArrowRight size={16} />} />
      <Button label="Both Icons" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} />
      <Button label="Loading" leftIcon={<Plus size={16} />} loading />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// iconOnly 모드
// ---------------------------------------------------------------------------

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button iconOnly icon={<Settings size={16} />} aria-label="설정" size="sm" />
      <Button iconOnly icon={<Settings size={16} />} aria-label="설정" size="md" />
      <Button iconOnly icon={<Settings size={16} />} aria-label="설정" size="lg" />
      <Button iconOnly icon={<Settings size={16} />} aria-label="로딩 중" loading size="md" />
      <Button iconOnly icon={<Settings size={16} />} aria-label="비활성" disabled size="md" />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Danger variant
// ---------------------------------------------------------------------------

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: '계정 삭제',
    size: 'md',
  },
};

// ---------------------------------------------------------------------------
// ButtonLink — 기본 스토리
// ---------------------------------------------------------------------------

export const LinkDefault: Story = {
  render: () => (
    <ButtonLink href="https://example.com" label="링크 버튼" target="_blank" rel="noopener noreferrer" />
  ),
};

// ---------------------------------------------------------------------------
// ButtonLink — Variant 쇼케이스
// ---------------------------------------------------------------------------

export const LinkVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonLink href="#" variant="primary" label="Primary" />
      <ButtonLink href="#" variant="secondary" label="Secondary" />
      <ButtonLink href="#" variant="outline" label="Outline" />
      <ButtonLink href="#" variant="ghost" label="Ghost" />
      <ButtonLink href="#" variant="danger" label="Danger" />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// ButtonLink — 상태 쇼케이스
// ---------------------------------------------------------------------------

export const LinkStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonLink href="#" label="Default" />
      <ButtonLink href="#" label="Loading" loading />
      <ButtonLink href="#" label="Disabled" disabled />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// 너비 동작 쇼케이스 — 기본(100%) vs fitWidth
// ---------------------------------------------------------------------------

export const FitWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          기본 동작 — 부모 너비(320px) 100% 채움
        </p>
        <div style={{ width: '320px', border: '1px dashed #ccc', padding: '8px' }}>
          <Button label="Button — 기본 (width: 100%)" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          fitWidth — 콘텐츠 크기에 맞게 축소
        </p>
        <div style={{ width: '320px', border: '1px dashed #ccc', padding: '8px' }}>
          <Button fitWidth label="Button — fitWidth" />
          <div style={{ marginTop: '8px' }}>
            <ButtonLink href="#" fitWidth variant="outline" label="ButtonLink — fitWidth" />
          </div>
        </div>
      </div>
    </div>
  ),
};
