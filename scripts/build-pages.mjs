import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

// configure-pages supplies an empty path after a custom domain is configured.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/portfolio-v1';
if (basePath !== '' && !/^\/[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a path such as /portfolio-v1');
}
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build', '--webpack'], {
  stdio: 'inherit',
  env: { ...process.env, STATIC_EXPORT: 'true', NEXT_PUBLIC_BASE_PATH: basePath },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
writeFileSync('out/.nojekyll', '');
