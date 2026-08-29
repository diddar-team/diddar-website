'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Checkbox, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { LEVELS, TRACKS } from '@/lib/tracks';
import { HEAR_ABOUT } from '@/lib/waitlist';
import { APP_NAME } from '@/lib/site';

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
  track: string;
  level: string;
  timezone: string;
  goal: string;
  hearAbout: string;
  consent: boolean;
  company: string;
};

export function WaitlistForm({ defaultTrack }: { defaultTrack?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const form = useForm<Values>({
    initialValues: {
      name: '',
      email: '',
      track:
        defaultTrack && TRACKS.some((t) => t.slug === defaultTrack)
          ? defaultTrack
          : '',
      level: '',
      timezone: '',
      goal: '',
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
      track: (v) => (!v ? 'Pick a track you are interested in' : null),
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

  return (
    <form
      onSubmit={form.onSubmit(onSubmit)}
      noValidate
      className="rounded-[18px] p-5 shadow-[0_20px_50px_-28px_rgba(11,22,63,0.28)] sm:p-7 transition-colors"
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--stroke)',
      }}
    >
      <div className="space-y-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput
            label={<span style={{ color: 'var(--text)' }}>Your name</span>}
            placeholder="Full name"
            withAsterisk
            key={form.key('name')}
            {...form.getInputProps('name')}
            styles={{
              input: {
                background: 'var(--surface)',
                borderColor: 'var(--stroke)',
                color: 'var(--text)',
              },
            }}
          />
          <TextInput
            label={<span style={{ color: 'var(--text)' }}>Email</span>}
            placeholder="you@example.com"
            withAsterisk
            key={form.key('email')}
            {...form.getInputProps('email')}
            styles={{
              input: {
                background: 'var(--surface)',
                borderColor: 'var(--stroke)',
                color: 'var(--text)',
              },
            }}
          />
        </div>

        <Field
          label="Which track are you interested in?"
          hint="Select one — this is what tells us where demand is."
          error={form.errors.track as string | undefined}
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {TRACKS.map((track) => {
              const active = form.getValues().track === track.slug;
              return (
                <button
                  type="button"
                  key={track.slug}
                  role="radio"
                  aria-checked={active}
                  onClick={() => form.setFieldValue('track', track.slug)}
                  className="rounded-input border px-4 py-3 text-left transition-colors"
                  style={
                    active
                      ? {
                          borderColor: 'var(--primary)',
                          background: 'var(--brand-soft)',
                        }
                      : {
                          borderColor: 'var(--stroke)',
                          background: 'transparent',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.borderColor = 'var(--stroke)';
                  }}
                >
                  <span
                    className="block font-sans text-sm font-semibold"
                    style={{ color: 'var(--text)' }}
                  >
                    {track.name}
                  </span>
                  <span
                    className="mt-0.5 block font-sans text-xs font-medium"
                    style={{ color: 'var(--text-light)' }}
                  >
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
            className="grid grid-cols-2 gap-2"
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
                  className="rounded-input border px-3 py-2.5 font-sans text-sm font-semibold transition-colors"
                  style={
                    active
                      ? {
                          borderColor: 'var(--primary)',
                          background: 'var(--primary)',
                          color: '#fff',
                        }
                      : {
                          borderColor: 'var(--stroke)',
                          background: 'transparent',
                          color: 'var(--text-light)',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.borderColor = 'var(--stroke)';
                  }}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </Field>

        <div className="grid gap-5">
          <Select
            label={<span style={{ color: 'var(--text)' }}>Where are you based?</span>}
            placeholder="Choose a region"
            data={TIMEZONES}
            {...form.getInputProps('timezone')}
            value={form.getValues().timezone || null}
            onChange={(v) => form.setFieldValue('timezone', v ?? '')}
            styles={{
              input: {
                background: 'var(--surface)',
                borderColor: 'var(--stroke)',
                color: 'var(--text)',
              },
            }}
          />
        </div>

        <Textarea
          label={<span style={{ color: 'var(--text)' }}>What are you hoping to change?</span>}
          description={<span style={{ color: 'var(--text-light)' }}>Optional — a new role, a product idea, more confidence.</span>}
          autosize
          minRows={3}
          key={form.key('goal')}
          {...form.getInputProps('goal')}
          styles={{
            input: {
              background: 'var(--surface)',
              borderColor: 'var(--stroke)',
              color: 'var(--text)',
            },
          }}
        />

        <Select
          label={
            <span style={{ color: 'var(--text)' }}>
              How did you hear about {APP_NAME}?
            </span>
          }
          placeholder="Optional"
          data={HEAR_ABOUT.map((h) => ({ value: h.value, label: h.label }))}
          {...form.getInputProps('hearAbout')}
          value={form.getValues().hearAbout || null}
          onChange={(v) => form.setFieldValue('hearAbout', v ?? '')}
          styles={{
            input: {
              background: 'var(--surface)',
              borderColor: 'var(--stroke)',
              color: 'var(--text)',
            },
          }}
        />

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
          label={
            <span style={{ color: 'var(--text)' }}>
              Send me occasional {APP_NAME} updates about cohorts and launch
              news.
            </span>
          }
          key={form.key('consent')}
          {...form.getInputProps('consent', { type: 'checkbox' })}
        />

        {serverError && (
          <p className="rounded-input bg-error/15 px-4 py-3 text-sm font-medium text-error">
            {serverError}
          </p>
        )}

        <div
          className="rounded-input px-4 py-3 text-[0.82rem] leading-relaxed"
          style={{
            background: 'var(--brand-soft)',
            color: 'var(--text-light)',
          }}
        >
          Free to add your name. Cohort places carry a one-time training fee —
          reserve now and the{' '}
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>
            registration fee is waived
          </span>
          .{' '}
          <Link
            href="/#scholarship"
            className="font-semibold underline underline-offset-2"
            style={{ color: 'var(--accent)' }}
          >
            See the full breakdown
          </Link>
        </div>

        <button
          type="submit"
          disabled={form.submitting}
          className="btn-glow relative overflow-hidden h-14 w-full rounded-btn bg-primary py-4 font-sans font-semibold text-white shadow-[0_16px_36px_-16px_rgb(23_63_234/0.55)] transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {form.submitting ? 'Adding your name…' : 'Add my name to the list →'}
        </button>

        <p
          className="text-center text-xs leading-relaxed"
          style={{ color: 'var(--text-light)' }}
        >
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
      <p className="font-sans text-sm font-semibold" style={{ color: 'var(--text)' }}>
        {label}
      </p>
      {hint && (
        <p className="mt-0.5 font-sans text-xs" style={{ color: 'var(--text-light)' }}>
          {hint}
        </p>
      )}
      <div className="mt-2.5">{children}</div>
      {error && (
        <p className="mt-1.5 font-sans text-xs font-medium text-error">{error}</p>
      )}
    </div>
  );
}

function SuccessCard() {
  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    `I just added my name to the ${APP_NAME} list — a practical, mentor-led tech bootcamp.`,
  )}`;

  return (
    <div
      className="rounded-[20px] p-8 text-center shadow-[0_24px_60px_-30px_rgba(11,22,63,0.3)] sm:p-12"
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--stroke)',
      }}
    >
      <p className="font-hand text-2xl" style={{ color: 'var(--primary)' }}>
        that&rsquo;s it
      </p>
      <div className="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-success/15 text-2xl text-success">
        ✓
      </div>
      <h2
        className="mt-6 h3-b"
        style={{ color: 'var(--text)' }}
      >
        Your name is on the list.
      </h2>
      <p
        className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed"
        style={{ color: 'var(--text-light)' }}
      >
        Thanks for helping shape the first cohort. We&rsquo;ll be in touch as the
        track you picked takes shape — keep an eye on your inbox.
      </p>

      <div
        className="mx-auto mt-6 max-w-sm rounded-input px-4 py-3 text-left text-[0.82rem] leading-relaxed"
        style={{ background: 'var(--brand-soft)', color: 'var(--text-light)' }}
      >
        <span className="font-semibold" style={{ color: 'var(--accent)' }}>
          Early-reserver scholarship secured.
        </span>{' '}
        Your registration fee is waived. If you accept a cohort seat, the only
        cost is a one-time training fee —{' '}
        <Link
          href="/#scholarship"
          className="font-semibold underline underline-offset-2"
          style={{ color: 'var(--accent)' }}
        >
          see the numbers
        </Link>
        .
      </div>

      <div className="mt-7 flex flex-col items-center gap-3">
        <a
          href={shareUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-btn bg-primary px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Tell a friend ↗
        </a>
        <Link
          href="/"
          className="font-sans text-sm font-semibold transition-colors"
          style={{ color: 'var(--text-light)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-light)';
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
