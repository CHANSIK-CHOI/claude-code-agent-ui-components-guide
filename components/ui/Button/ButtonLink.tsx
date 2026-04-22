'use client';

import React from 'react';
import { buildButtonClass, ButtonContent, ButtonSharedProps } from './ButtonBase';

// ---------------------------------------------------------------------------
// Props 타입 정의
// ---------------------------------------------------------------------------

export interface ButtonLinkProps
  extends ButtonSharedProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonSharedProps> {
  /** 이동 URL (필수) */
  href: string;
}

// ---------------------------------------------------------------------------
// ButtonLink 컴포넌트 — <a> 기반 래퍼
// ---------------------------------------------------------------------------

export function ButtonLink({
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
  href,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  if (process.env.NODE_ENV === 'development' && iconOnly && !rest['aria-label']) {
    console.warn('[ButtonLink] iconOnly 모드에서는 aria-label이 필수입니다.');
  }

  const rootClass = buildButtonClass({ variant, size, iconOnly, fitWidth, error, loading, className });

  const isInactive = disabled || loading;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInactive) {
      e.preventDefault();
      return;
    }
    rest.onClick?.(e);
  };

  return (
    <a
      {...rest}
      href={isInactive ? undefined : href}
      aria-disabled={isInactive ? true : undefined}
      aria-busy={loading || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
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
    </a>
  );
}

export default ButtonLink;
