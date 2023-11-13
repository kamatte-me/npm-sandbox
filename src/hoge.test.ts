import { expect, test } from 'vitest';

import { hoge } from './hoge';
import type { User } from './types/user';

test('hoge', () => {
  const user: User = { id: 1, name: 'kamatte me' };
  const actual = hoge(user);
  expect(actual).toBe(user.id);
});
