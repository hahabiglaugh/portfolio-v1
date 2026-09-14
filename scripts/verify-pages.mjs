import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/portfolio-v1';
function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}
const routes = ['', 'about/', 'archive/', 'work/mynutchos/', 'work/xiaohongshu/', 'work/teaverse-chagee/'];
for (const route of routes) assert.ok(existsSync(`out/${route}index.html`), `Missing route: ${route}`);
let checked = 0;
function verifyUrl(url, source) {
  if (!url.startsWith('/') || url.startsWith('//')) return;
  assert.ok(!basePath || url.startsWith(`${basePath}/`), `Missing basePath: ${url} in ${source}`);
  const path = decodeURIComponent(url.slice(basePath.length).split(/[?#]/)[0]);
  assert.ok(existsSync(`out${path}`) || existsSync(`out${path}/index.html`), `Missing target: ${url} in ${source}`);
  checked++;
}
for (const file of walk('out').filter(file => /\.(html|css)$/.test(file))) {
  const content = readFileSync(file, 'utf8');
  for (const match of content.matchAll(/(?:href|src|poster)="([^"]+)"/g)) verifyUrl(match[1], file);
  for (const match of content.matchAll(/url\(["']?([^\s)'"?]+)[^)]*\)/g)) verifyUrl(match[1], file);
}
for (const source of walk('public')) {
  const target = join('out', source.slice('public'.length));
  assert.ok(existsSync(target), `Missing public file: ${source}`);
  assert.ok(readFileSync(source).equals(readFileSync(target)), `Changed public file: ${source}`);
}
console.log(`Verified ${routes.length} routes, ${checked} local references, and every public file at basePath "${basePath}".`);
