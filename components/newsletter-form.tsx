'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type State = 'idle' | 'loading' | 'done' | 'error';

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'loading') return;
    setState('loading');
    setMessage('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'newsletter', email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setState('error');
        setMessage(data.error ?? 'Something went wrong. Try again.');
        return;
      }
      setState('done');
      setMessage("You're on the list. Talk soon.");
      setEmail('');
    } catch {
      setState('error');
      setMessage('Network error. Try again.');
    }
  }

  if (state === 'done') {
    return (
      <p className={cn('text-sm font-medium text-white/80', className)}>
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn('space-y-2', className)} noValidate>
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className="h-11 w-full rounded-input border border-white/15 bg-white/5 px-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/40"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="h-11 shrink-0 rounded-input bg-primary px-4 font-sans text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {state === 'loading' ? '…' : 'Notify me'}
        </button>
      </div>
      {state === 'error' && (
        <p className="text-xs font-medium text-white/70">{message}</p>
      )}
    </form>
  );
}
