import type { AutoRc } from 'auto';

export default function rc(): AutoRc {
  return {
    plugins: ['npm', 'all-contributors', 'first-time-contributor', 'released'],
  };
}
