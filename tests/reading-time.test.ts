import { describe, expect, it } from 'bun:test';
import { getReadTime } from '../src/lib/reading-time';

describe('getReadTime', () => {
  it('returns 1 min read for short text', () => {
    expect(getReadTime('Hello world, this is a short test.')).toBe('1 min read');
  });

  it('calculates reading time for 400 words correctly', () => {
    const words = new Array(400).fill('word').join(' ');
    expect(getReadTime(words)).toBe('2 min read');
  });

  it('handles empty input gracefully with minimum 1 min read', () => {
    expect(getReadTime('')).toBe('1 min read');
  });
});
