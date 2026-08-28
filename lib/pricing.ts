export type PricingResponse = {
  currency: string;
  symbol: string;
  registration: {
    standardFee: number;
    earlyReserverDiscountPercent: number;
  };
  training: {
    standardFee: number;
    currentFee: number;
    payment: string;
  };
  earlyReserver: {
    active: boolean;
    label: string;
    note: string;
  };
};

export const PRICING_CONFIG: PricingResponse = {
  currency: 'NGN',
  symbol: '₦',
  registration: {
    standardFee: 5000,
    earlyReserverDiscountPercent: 100,
  },
  training: {
    standardFee: 40000,
    currentFee: 25000,
    payment: 'one-time',
  },
  earlyReserver: {
    active: true,
    label: 'Early-reserver scholarship',
    note: 'Locked in for everyone who adds their name before the first cohort opens.',
  },
};

export type ComputedLine = {
  standard: number;
  payable: number;
  saved: number;
  discountPercent: number;
  free: boolean;
};

export type ComputedPricing = {
  symbol: string;
  registration: ComputedLine;
  training: ComputedLine;
  allInNow: number;
  allInStandard: number;
  totalSaved: number;
  earlyReserver: PricingResponse['earlyReserver'];
};

function line(standard: number, discountPercent: number): ComputedLine {
  const payable = Math.max(
    0,
    Math.round(standard * (1 - discountPercent / 100)),
  );
  return {
    standard,
    payable,
    saved: standard - payable,
    discountPercent,
    free: payable === 0,
  };
}

export function computePricing(p: PricingResponse): ComputedPricing {
  const registration = line(
    p.registration.standardFee,
    p.registration.earlyReserverDiscountPercent,
  );

  const trainingStandard = p.training.standardFee;
  const trainingPayable = Math.min(p.training.currentFee, trainingStandard);
  const trainingSaved = trainingStandard - trainingPayable;
  const training: ComputedLine = {
    standard: trainingStandard,
    payable: trainingPayable,
    saved: trainingSaved,
    discountPercent:
      trainingStandard > 0
        ? Math.round((trainingSaved / trainingStandard) * 100)
        : 0,
    free: trainingPayable === 0,
  };

  return {
    symbol: p.symbol,
    registration,
    training,
    allInNow: registration.payable + training.payable,
    allInStandard: registration.standard + training.standard,
    totalSaved: registration.saved + training.saved,
    earlyReserver: p.earlyReserver,
  };
}

export function formatMoney(symbol: string, amount: number): string {
  if (amount === 0) return 'Free';
  return `${symbol}${amount.toLocaleString('en-US')}`;
}

export async function getPricing(): Promise<PricingResponse> {
  const res = await fetch('/api/pricing', { cache: 'no-store' });
  if (!res.ok) throw new Error('pricing unavailable');
  return res.json();
}
