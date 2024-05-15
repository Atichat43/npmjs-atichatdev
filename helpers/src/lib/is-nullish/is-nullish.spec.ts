import { isNullish } from './is-nullish';

it('should return true if the value is null', () => {
  expect(isNullish(null)).toBe(true);
});
