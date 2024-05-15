export * from './is-nullish';

export function helpers(): string {
  return 'helpers';
}

export const isBoolean = (value: unknown): boolean =>
  typeof value === 'boolean';

export const logVersion = (version: string): void => {
  console.log(`Version: ${version}`);
};

export const isString = (value: unknown): boolean => typeof value === 'string';
