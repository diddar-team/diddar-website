'use client';

import { useEffect, useState } from 'react';
import {
  computePricing,
  formatMoney,
  getPricing,
  type ComputedPricing,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';
import { CONTACT_EMAIL } from '@/lib/site';

function Row({
  label,
  standard,
  payable,
  tag,
  symbol,
}: {
  label: string;
  standard: number;
  payable: number;
  tag: string;
  symbol: string;
}) {
  const discounted = payable < standard;
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="min-w-0">
        <p className="font-sans text-sm font-medium text-text">{label}</p>
        <span className="mt-0.5 inline-flex items-center rounded-full bg-accent/12 px-2 py-0.5 font-sans text-[0.68rem] font-semibold text-accent">
          {tag}
        </span>
      </div>
      <div className="shrink-0 text-right">
        {discounted && (
          <span className="mr-1.5 font-sans text-[0.8rem] text-muted line-through">
            {formatMoney(symbol, standard)}
          </span>
        )}
        <span
          className={cn(
            'font-display text-base font-semibold',
            payable === 0 ? 'text-accent' : 'text-text',
          )}
        >
          {formatMoney(symbol, payable)}
        </span>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex justify-between">
          <div className="h-4 w-32 rounded bg-stroke" />
          <div className="h-4 w-20 rounded bg-stroke" />
        </div>
      ))}
      <div className="h-px bg-stroke" />
      <div className="flex justify-between">
        <div className="h-6 w-24 rounded bg-stroke" />
        <div className="h-6 w-28 rounded bg-stroke" />
      </div>
    </div>
  );
}

export function PricingBreakdown({ className }: { className?: string }) {
  const [data, setData] = useState<ComputedPricing | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    getPricing()
      .then((p) => alive && setData(computePricing(p)))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div
      className={cn(
        'rounded-2xl border border-stroke bg-surface p-5 shadow-[0_16px_40px_-24px_rgba(11,22,63,0.3)] sm:p-6',
        className,
      )}
    >
      {!data && !failed && <Skeleton />}

      {failed && (
        <p className="font-sans text-sm text-text-light">
          Pricing is loading slowly — refresh to see the full breakdown, or ask
          us anything at {CONTACT_EMAIL}.
        </p>
      )}

      {data && (
        <>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-sans text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white">
              {data.earlyReserver.label}
            </span>
          </div>

          <div className="mt-2 divide-y divide-stroke">
            <Row
              label="Registration fee"
              standard={data.registration.standard}
              payable={data.registration.payable}
              symbol={data.symbol}
              tag={
                data.registration.free
                  ? '100% scholarship'
                  : `${data.registration.discountPercent}% off`
              }
            />
            <Row
              label="Training — one-time payment"
              standard={data.training.standard}
              payable={data.training.payable}
              symbol={data.symbol}
              tag={`Save ${formatMoney(data.symbol, data.training.saved)}`}
            />
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-stroke pt-4">
            <div>
              <p className="font-sans text-sm font-medium text-text">
                Your all-in cost
              </p>
              <p className="font-sans text-[0.8rem] font-semibold text-accent">
                You save {formatMoney(data.symbol, data.totalSaved)}
              </p>
            </div>
            <p className="font-display text-2xl font-semibold text-text">
              {formatMoney(data.symbol, data.allInNow)}
            </p>
          </div>

          <p className="mt-5 font-sans text-[0.8rem] leading-relaxed text-muted">
            Nothing is charged now. Payment only happens once you are offered —
            and accept — a place in a cohort. {data.earlyReserver.note}
          </p>
        </>
      )}
    </div>
  );
}
