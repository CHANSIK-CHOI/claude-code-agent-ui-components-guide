'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';
import React from 'react';
import styles from './Button.module.scss';

// ---------------------------------------------------------------------------
// CVA variant 정의 — Button / ButtonLink 공용
// ---------------------------------------------------------------------------

export const buttonVariants = cva(styles.ButtonRoot, {
  variants: {
    variant: {
      primary:   styles['ButtonRoot--primary'],
      secondary: styles['ButtonRoot--secondary'],
      outline:   styles['ButtonRoot--outline'],
      ghost:     styles['ButtonRoot--ghost'],
      danger:    styles['ButtonRoot--danger'],
    },
    size: {
      sm: styles['ButtonRoot--sm'],
      md: styles['ButtonRoot--md'],
      lg: styles['ButtonRoot--lg'],
    },
    iconOnly: {
      true:  styles['ButtonRoot--iconOnly'],
      false: undefined,
    },
    fitWidth: {
      true:  styles['ButtonRoot--fitWidth'],
      false: undefined,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    fitWidth: false,
  },
});

// ---------------------------------------------------------------------------
// 공유 Props 인터페이스
// ---------------------------------------------------------------------------

export interface ButtonSharedProps extends VariantProps<typeof buttonVariants> {
  /** 버튼 레이블 텍스트 (iconOnly 모드 아닐 때 필수) */
  label?: string;
  /** 레이블 왼쪽 아이콘 — loading 중에는 spinner로 대체됨 */
  leftIcon?: React.ReactNode;
  /** 레이블 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** iconOnly 모드에서 표시할 아이콘 */
  icon?: React.ReactNode;
  /** 로딩 상태 — 클릭 차단, spinner 표시 */
  loading?: boolean;
  /** 에러 상태 — 에러 색상 일시 적용 */
  error?: boolean;
  /** 콘텐츠 크기에 맞게 너비 축소 (기본은 부모 너비 100%) */
  fitWidth?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// buildButtonClass — 최종 클래스 문자열 빌더
// ---------------------------------------------------------------------------

export function buildButtonClass({
  variant,
  size,
  iconOnly,
  fitWidth,
  error,
  loading,
  className,
}: Pick<ButtonSharedProps, 'variant' | 'size' | 'iconOnly' | 'fitWidth' | 'error' | 'loading' | 'className'>): string {
  return [
    buttonVariants({ variant, size, iconOnly, fitWidth }),
    error   ? styles['ButtonRoot--error']   : '',
    loading ? styles['ButtonRoot--loading'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
}

// ---------------------------------------------------------------------------
// ButtonContent — 내부 콘텐츠 렌더러 (Button / ButtonLink 공용)
// ---------------------------------------------------------------------------

interface ButtonContentProps {
  iconOnly?: boolean | null;
  loading?: boolean;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  children?: React.ReactNode;
}

export function ButtonContent({
  iconOnly,
  loading,
  icon,
  leftIcon,
  rightIcon,
  label,
  children,
}: ButtonContentProps) {
  if (iconOnly) {
    return (
      <>
        {loading ? (
          <LoaderCircle className={styles.ButtonRoot__spinner} aria-hidden="true" />
        ) : (
          <span className={styles.ButtonRoot__icon}>{icon}</span>
        )}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <LoaderCircle className={styles.ButtonRoot__spinner} aria-hidden="true" />
      ) : leftIcon ? (
        <span className={styles.ButtonRoot__leftIcon}>{leftIcon}</span>
      ) : null}

      <span className={styles.ButtonRoot__label}>{children ?? label}</span>

      {rightIcon && !loading && (
        <span className={styles.ButtonRoot__rightIcon}>{rightIcon}</span>
      )}
    </>
  );
}
