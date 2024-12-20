'use client';

import { useTheme } from 'next-themes';
import { ComponentProps } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';

type ThemeSwitcherProps = {
  className?: ComponentProps<'button'>['className'];
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant="secondary"
      size="icon"
      aria-label={m.themeToggleLabel()}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="dark:hidden" />
      <Icons.moon className="hidden dark:block" />
    </Button>
  );
};
