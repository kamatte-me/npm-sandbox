import type { AutoRc } from 'auto';

export default function rc(): AutoRc {
  return {
    plugins: ['npm', 'released', 'all-contributors', 'first-time-contributor'],
  };
}
