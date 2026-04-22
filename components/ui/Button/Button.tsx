'use client';

import React from 'react';
import { buildButtonClass, ButtonContent, ButtonSharedProps } from './ButtonBase';

// ---------------------------------------------------------------------------
// Props 타입 정의
// ---------------------------------------------------------------------------

export interface ButtonProps
  extends ButtonSharedProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonSharedProps> {}

// ---------------------------------------------------------------------------
// Button 컴포넌트 — <button> 기반 래퍼
// ---------------------------------------------------------------------------

export function Button({
  variant,
  size,
  iconOnly,
  fitWidth,
  label,
  leftIcon,
  rightIcon,
  icon,
  loading = false,
  error = false,
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  if (process.env.NODE_ENV === 'development' && iconOnly && !rest['aria-label']) {
    console.warn('[Button] iconOnly 모드에서는 aria-label이 필수입니다.');
  }

  const rootClass = buildButtonClass({ variant, size, iconOnly, fitWidth, error, loading, className });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) return;
    rest.onClick?.(e);
  };

  return (
    <button
      type="button"
      {...rest}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={loading ? true : undefined}
      aria-busy={loading || undefined}
      className={rootClass}
    >
      <ButtonContent
        iconOnly={iconOnly}
        loading={loading}
        icon={icon}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        label={label}
      >
        {children}
      </ButtonContent>
    </button>
  );
}

export default Button;
