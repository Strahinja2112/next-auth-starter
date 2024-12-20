'use client';

import { signIn } from 'next-auth/react';
import { useTransition } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/i18n';

export const SignInButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleSignIn = () => {
    startTransition(async () => {
      await signIn('github');
    });
  };

  return (
    <Button onClick={handleSignIn} disabled={isPending}>
      {isPending && <Icons.loader className="mr-2 size-4 animate-spin" />}
      {content.signIn()}
    </Button>
  );
};
