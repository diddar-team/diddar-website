import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/site';

type Tone = 'auto' | 'default' | 'light';

const MARK_SRC = {
  default: '/diddar-mark.png',
  light: '/diddar-mark-light.png',
};

const MARK_RATIO = '188 / 256';

export function BrandMark({
  className,
  tone = 'auto',
  priority = false,
}: {
  className?: string;
  tone?: Tone;
  priority?: boolean;
}) {
  if (tone !== 'auto') {
    return (
      <Image
        src={MARK_SRC[tone]}
        alt={APP_NAME}
        width={188}
        height={256}
        priority={priority}
        className={cn('h-7 w-auto', className)}
      />
    );
  }

  return (
    <span
      className={cn('relative inline-block h-7 shrink-0', className)}
      style={{ aspectRatio: MARK_RATIO }}
    >
      <Image
        src={MARK_SRC.default}
        alt={APP_NAME}
        fill
        sizes="32px"
        priority={priority}
        className="object-contain dark:hidden"
      />
      <Image
        src={MARK_SRC.light}
        alt=""
        aria-hidden
        fill
        sizes="32px"
        priority={priority}
        className="hidden object-contain dark:block"
      />
    </span>
  );
}

export function BrandLockup({
  className,
  href = '/',
  tone = 'auto',
  showName = true,
  priority = false,
}: {
  className?: string;
  href?: string;
  tone?: Tone;
  showName?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${APP_NAME} home`}
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-[1.5rem] font-semibold leading-none tracking-[-0.01em]',
        tone === 'light' ? 'text-white' : 'text-text',
        className,
      )}
    >
      <BrandMark tone={tone} priority={priority} />
      {showName && <span>{APP_NAME}</span>}
    </Link>
  );
}
