import test, { describe } from 'node:test';
import assert from 'assert';
import { add, asyncAdd } from '../src';

describe('add', () => {
  test('should return 3', () => {
    assert.equal(add(1, 2), 3);
  });

  test('should return 0', () => {
    assert.equal(add(-1, 1), 0);
  });
});

describe('asyncAdd', () => {
  test('should return 3', async () => {
    assert.equal(await asyncAdd(1, 2), 3);
  });

  test('should return 0', async () => {
    assert.equal(await asyncAdd(-1, 1), 0);
  });
});
