type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

/** Small classnames joiner. User-supplied classes should be passed last so
 *  they take precedence in source order. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value) return;
    if (typeof value === 'string' || typeof value === 'number') {
      out.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (typeof value === 'object') {
      for (const [key, active] of Object.entries(value)) {
        if (active) out.push(key);
      }
    }
  };

  inputs.forEach(walk);
  return out.join(' ');
}
