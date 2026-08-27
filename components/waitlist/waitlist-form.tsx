'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Checkbox, Select, Switch, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { LEVELS, TRACKS } from '@/lib/tracks';
import { HEAR_ABOUT, LEARNING_MODES } from '@/lib/waitlist';
import { cn } from '@/lib/utils';

const TIMEZONES = [
  'West Africa (WAT / GMT+1)',
  'UK & Ireland (GMT/BST)',
  'Central Europe (CET)',
  'US Eastern (ET)',
  'US Pacific (PT)',
  'India (IST)',
  'Somewhere else',
];

type Values = {
  name: string;
  email: string;
  tracks: string[];
  level: string;
  mode: string;
  timezone: string;
  goal: string;
  wantsToTeach: boolean;
  hearAbout: string;
  consent: boolean;
  company: string;
};

export function WaitlistForm({
  defaultTrack,
  defaultTeach = false,
}: {
  defaultTrack?: string;
  defaultTeach?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const form = useForm<Values>({
    initialValues: {
      name: '',
      email: '',
      tracks:
        defaultTrack && TRACKS.some((t) => t.slug === defaultTrack)
          ? [defaultTrack]
          : [],
      level: '',
      mode: '',
      timezone: '',
      goal: '',
      wantsToTeach: defaultTeach,
      hearAbout: '',
      consent: false,
      company: '',
    },
    validate: {
      name: (v) => (v.trim().length < 2 ? 'Please tell us your name' : null),
      email: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
          ? null
          : 'Enter a valid email address',
      tracks: (v) => (v.length === 0 ? 'Pick at least one track' : null),
      level: (v) => (v ? null : 'Select your current level'),
      consent: (v) => (v ? null : 'Please accept to continue'),
    },
  });

  async function onSubmit(values: Values) {
    setServerError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'waitlist', ...values }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setServerError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError('Network error. Please try again.');
    }
  }

  if (submitted) {
    return <SuccessCard />;
  }

  const selectedTracks = form.getValues().tracks;

  return (
    <form
      onSubmit={form.onSubmit(onSubmit)}
      noValidate
      className="rounded-app border border-stroke-ink/60 bg-surface p-6 shadow-[0_24px_60px_-30px_rgb(11_22_63/0.3)] sm:p-9"
    >
      <div className="space-y-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput
            label="Your name"
            placeholder="Full name"
            withAsterisk
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="you@example.com"
            withAsterisk
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </div>

        <Field
          label="Which tracks are you interested in?"
          hint="Select all that apply — this is what tells us where demand is."
          error={form.errors.tracks as string | undefined}
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {TRACKS.map((track) => {
              const active = selectedTracks.includes(track.slug);
              return (
                <button
                  type="button"
                  key={track.slug}
                  aria-pressed={active}
                  onClick={() => {
                    const next = active
                      ? selectedTracks.filter((s) => s !== track.slug)
                      : [...selectedTracks, track.slug];
                    form.setFieldValue('tracks', next);
                  }}
                  className={cn(
                    'rounded-input border px-4 py-3 text-left transition-colors',
                    active
                      ? 'border-primary bg-brand-soft'
                      : 'border-stroke-ink/60 hover:border-primary/60',
                  )}
                >
                  <span className="block font-sans text-sm font-semibold text-text">
                    {track.name}
                  </span>
                  <span className="mt-0.5 block font-hand text-base leading-tight text-text-light">
                    {track.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </Field>

        <Field
          label="Your current level"
          hint={
            LEVELS.find((l) => l.id === form.getValues().level)?.hint ??
            'Roughly where are you right now?'
          }
          error={form.errors.level as string | undefined}
        >
          <div
            role="radiogroup"
            aria-label="Your current level"
            className="grid grid-cols-3 gap-2"
          >
            {LEVELS.map((l) => {
              const active = form.getValues().level === l.id;
              return (
                <button
                  type="button"
                  key={l.id}
                  role="radio"
                  aria-checked={active}
                  onClick={() => form.setFieldValue('level', l.id)}
                  className={cn(
                    'rounded-input border px-3 py-2.5 font-sans text-sm font-semibold transition-colors',
                    active
                      ? 'border-primary bg-primary text-white'
                      : 'border-stroke-ink/60 text-text-light hover:border-primary/60',
                  )}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            label="Preferred learning mode"
            placeholder="Choose one"
            data={LEARNING_MODES.map((m) => ({
              value: m.value,
              label: m.label,
            }))}
            {...form.getInputProps('mode')}
            value={form.getValues().mode || null}
            onChange={(v) => form.setFieldValue('mode', v ?? '')}
          />
          <Select
            label="Where are you based?"
            placeholder="Choose a region"
            data={TIMEZONES}
            {...form.getInputProps('timezone')}
            value={form.getValues().timezone || null}
            onChange={(v) => form.setFieldValue('timezone', v ?? '')}
          />
        </div>

        <Textarea
          label="What are you hoping to change?"
          description="Optional — a new role, a product idea, more confidence."
          autosize
          minRows={3}
          key={form.key('goal')}
          {...form.getInputProps('goal')}
        />

        <div className="rounded-input border border-dashed border-stroke-ink/70 bg-subtle-surface p-4">
          <Switch
            label="I'd also be interested in teaching or mentoring"
            description="We build the trainer team around the same demand signal."
            key={form.key('wantsToTeach')}
            {...form.getInputProps('wantsToTeach', { type: 'checkbox' })}
          />
        </div>

        <Select
          label="How did you hear about Dida?"
          placeholder="Optional"
          data={HEAR_ABOUT.map((h) => ({ value: h.value, label: h.label }))}
          {...form.getInputProps('hearAbout')}
          value={form.getValues().hearAbout || null}
          onChange={(v) => form.setFieldValue('hearAbout', v ?? '')}
        />

        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
          key={form.key('company')}
          {...form.getInputProps('company')}
        />

        <Checkbox
          label="Send me occasional Dida updates about cohorts and launch news."
          key={form.key('consent')}
          {...form.getInputProps('consent', { type: 'checkbox' })}
        />

        {serverError && (
          <p className="rounded-input bg-error-soft px-4 py-3 text-sm font-medium text-error">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={form.submitting}
          className="h-14 w-full rounded-btn bg-primary py-4 font-sans font-semibold text-white shadow-[0_16px_36px_-16px_rgb(23_63_234/0.55)] transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {form.submitting ? 'Adding your name…' : 'Add my name to the list →'}
        </button>

        <p className="text-center text-xs leading-relaxed text-text-light">
          No spam, ever. You can ask us to remove your details at any time.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-sans text-sm font-semibold text-text">{label}</p>
      {hint && <p className="mt-0.5 font-sans text-xs text-text-light">{hint}</p>}
      <div className="mt-2.5">{children}</div>
      {error && (
        <p className="mt-1.5 font-sans text-xs font-medium text-error">{error}</p>
      )}
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="rounded-app border border-stroke-ink/60 bg-surface p-8 text-center shadow-[0_24px_60px_-30px_rgb(11_22_63/0.3)] sm:p-12">
      <p className="font-hand text-2xl text-primary">that&rsquo;s it</p>
      <div className="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-success-soft text-2xl text-success">
        ✓
      </div>
      <h2 className="mt-6 font-display text-[1.7rem] font-semibold tracking-[-0.01em] text-text">
        Your name is on the list.
      </h2>
      <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-text-light">
        Thanks for helping shape the first cohort. We&rsquo;ll be in touch as the
        track you picked takes shape — keep an eye on your inbox.
      </p>
      <div className="mt-7 flex flex-col items-center gap-3">
        <a
          href="https://x.com/intent/tweet?text=I%20just%20added%20my%20name%20to%20the%20Dida%20list%20%E2%80%94%20a%20practical%2C%20mentor-led%20tech%20bootcamp."
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-btn bg-primary px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Tell a friend ↗
        </a>
        <Link
          href="/"
          className="font-sans text-sm font-semibold text-text-light transition-colors hover:text-primary"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
