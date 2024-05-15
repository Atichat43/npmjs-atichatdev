export * from './is-nullish';

export function helpers(): string {
  return 'helpers';
}

export const isBoolean = (value: unknown): boolean =>
  typeof value === 'boolean';
