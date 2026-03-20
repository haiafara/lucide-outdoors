# lucide-outdoors Style Guide

Icons in this package must follow the lucide design system for visual consistency.

## Quick Reference

- **Canvas**: 24 x 24 px
- **Padding**: 1 px minimum on all sides
- **Stroke**: 2 px, centered, round caps, round joins
- **Border radius**: 2 px (shapes >= 8px), 1 px (smaller shapes)
- **Spacing**: 2 px between distinct elements
- **Path precision**: 3 decimal places

## Allowed Elements

`path`, `line`, `polygon`, `polyline`, `circle`, `ellipse`, `rect`

No `<use>`, `<g>`, transforms, or filters. No explicit `fill`/`stroke` on children (they inherit `stroke="currentColor"` and `fill="none"` from the root).

Exception: use `fill: 'currentColor'` on individual elements only when a solid fill is intentional (e.g., a pupil, a backpack).

## Adding an Icon

1. Design at 24x24 in Figma, Inkscape, or [Lucide Studio](https://studio.lucide.dev/edit)
2. Export as SVG, optimize with SVGOMG or Lucide Studio's "Tidy"
3. Create `src/icons/my-icon.ts`:

```ts
import type { IconNode } from '../types'

export const myIcon: IconNode = [
  ['path', { d: 'M...', key: 'my-icon-1' }],
  ['circle', { cx: '12', cy: '12', r: '3', key: 'my-icon-2' }],
]
```

4. Re-export from `src/icons/index.ts` and `src/index.ts`

All attribute values must be **strings**. Each element needs a unique `key`.

## Naming

- File names: `lower-kebab-case.ts`
- Export names: `camelCase` (these are data, not components)
- Describe what the icon depicts, not its use case
