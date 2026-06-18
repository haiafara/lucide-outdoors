// Generates a static gallery page (_site/index.html) listing every icon
// exported by the built package. Run after `npm run build`.
import { mkdir, writeFile } from 'node:fs/promises'
import { readFile } from 'node:fs/promises'
import * as icons from '../../dist/esm/lucide-outdoors.js'

const ROOT_ATTRS = [
  'xmlns="http://www.w3.org/2000/svg"',
  'width="24"',
  'height="24"',
  'viewBox="0 0 24 24"',
  'fill="none"',
  'stroke="currentColor"',
  'stroke-width="2"',
  'stroke-linecap="round"',
  'stroke-linejoin="round"',
].join(' ')

const escapeAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;')

const toKebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// An IconNode is an array of [tag, attrs] tuples.
const isIconNode = (v) =>
  Array.isArray(v) && v.every((c) => Array.isArray(c) && typeof c[0] === 'string')

const renderSvg = (node) => {
  const children = node
    .map(([tag, attrs]) => {
      const a = Object.entries(attrs)
        .filter(([k]) => k !== 'key')
        .map(([k, val]) => `${k}="${escapeAttr(val)}"`)
        .join(' ')
      return `<${tag} ${a} />`
    })
    .join('')
  return `<svg ${ROOT_ATTRS}>${children}</svg>`
}

const entries = Object.entries(icons)
  .filter(([, v]) => isIconNode(v))
  .sort(([a], [b]) => a.localeCompare(b))

const pkg = JSON.parse(await readFile(new URL('../../package.json', import.meta.url)))

const cards = entries
  .map(([name, node]) => {
    const kebab = toKebab(name)
    return `    <figure class="icon" title="${name}">
      ${renderSvg(node)}
      <figcaption><code>${name}</code><span>${kebab}</span></figcaption>
    </figure>`
  })
  .join('\n')

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>lucide-outdoors — icon gallery</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    font-family: ui-sans-serif, system-ui, sans-serif;
    margin: 0; padding: 48px 32px; max-width: 1100px; margin-inline: auto;
    color: #1a1a1a; background: #fafafa;
  }
  header { margin-bottom: 40px; }
  h1 { font-size: 24px; font-weight: 650; margin: 0 0 8px; }
  .sub { color: #666; font-size: 14px; margin: 0; }
  .count { font-variant-numeric: tabular-nums; }
  .grid {
    display: grid; gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  .icon {
    margin: 0; background: #fff; border: 1px solid #e8e8e8; border-radius: 10px;
    padding: 20px 12px 12px; display: flex; flex-direction: column;
    align-items: center; gap: 12px; transition: border-color .15s, box-shadow .15s;
  }
  .icon:hover { border-color: #bbb; box-shadow: 0 2px 8px rgba(0,0,0,.06); }
  .icon svg { width: 40px; height: 40px; color: #1a1a1a; }
  figcaption { display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; }
  figcaption code { font-size: 12px; font-weight: 600; }
  figcaption span { font-size: 10px; color: #999; }
  @media (prefers-color-scheme: dark) {
    body { color: #e8e8e8; background: #111; }
    .sub { color: #999; }
    .icon { background: #1a1a1a; border-color: #2a2a2a; }
    .icon:hover { border-color: #444; }
    .icon svg { color: #e8e8e8; }
    figcaption span { color: #777; }
  }
</style>
</head>
<body>
<header>
  <h1>lucide-outdoors</h1>
  <p class="sub">${pkg.description || ''}</p>
  <p class="sub"><span class="count">${entries.length}</span> icons · v${pkg.version} · use the <code>code</code> name to import, the lower name with <code>resolveIcon()</code></p>
</header>
<div class="grid">
${cards}
</div>
</body>
</html>
`

await mkdir(new URL('../../_site', import.meta.url), { recursive: true })
await writeFile(new URL('../../_site/index.html', import.meta.url), html)
console.log(`Generated _site/index.html with ${entries.length} icons`)
