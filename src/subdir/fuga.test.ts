import { expect, test } from 'vitest';

import type { User } from '../types/user';
import { fuga } from './fuga';

test('hoge', () => {
  const user: User = { id: 1, name: 'kamatte me' };
  const actual = fuga(user);
  expect(actual).toBe(user.name);
});
