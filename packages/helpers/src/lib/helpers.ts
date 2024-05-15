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

export const isNumber = (value: unknown): boolean => typeof value === 'number';

export const isObject = (value: unknown): boolean =>
  typeof value === 'object' && value !== null;

export const isFunction = (value: unknown): boolean =>
  typeof value === 'function';

export const isArray = (value: unknown): boolean => Array.isArray(value);
