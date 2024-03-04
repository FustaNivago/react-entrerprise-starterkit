import { interpolateString } from './localization.utils';

describe('interpolation tests', () => {
  test('no parameters', () => {
    const testStr = 'test string';
    const result = interpolateString(testStr);
    expect(result).toBe('test string');
  });

  test('2 matching parameters', () => {
    const testStr = 'test string {0} and {1}';
    const result = interpolateString(testStr, ['first', 'second']);
    expect(result).toBe('test string first and second');
  });

  test('1 missing parameter', () => {
    const testStr = 'test string {0} and {1}';
    const result = interpolateString(testStr, ['first']);
    expect(result).toBe('test string first and ');
  });

  test('1 extra parameter', () => {
    const testStr = 'test string {0} and {1}';
    const result = interpolateString(testStr, ['first', 'second', 'third']);
    expect(result).toBe('test string first and second');
  });
});
