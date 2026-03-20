# Lucide Outdoors Icon Design

Research on lucide's icon design system and how to create compatible icons for the `lucide-outdoors` package.

## Lucide Design Specifications

| Rule | Value |
|------|-------|
| Canvas | 24 x 24 px |
| Padding | 1 px minimum on all sides (22 x 22 drawable area) |
| Stroke width | 2 px, centered alignment |
| Stroke caps | Round |
| Stroke joins | Round |
| Border radius (shapes >= 8px) | 2 px |
| Border radius (shapes < 8px) | 1 px |
| Element spacing | 2 px between distinct elements |
| Path precision | 3 decimal places |

## Allowed SVG Elements

Only these child elements are permitted inside the root `<svg>`:

- `<path>`
- `<line>`
- `<polygon>`
- `<polyline>`
- `<circle>`
- `<ellipse>`
- `<rect>`

Prohibited: `<use>`, `<g>`, `<defs>`, transforms, filters, explicit `fill` or `stroke` on child elements (those inherit from the root SVG).

## Root SVG Attributes

Every icon SVG must use these exact root attributes:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
```

These are applied automatically by the lucide `Icon` component at runtime, so they do not appear in the `IconNode` data.

## Visual Principles

- **Optical volume**: Icons should have similar visual weight to lucide's reference `circle` and `square` icons. When blurred, an icon should not appear noticeably darker or lighter than those base shapes.
- **Visual centering**: Center by center of gravity, not bounding box.
- **Pixel perfection**: Align paths to the grid for sharp rendering on low-DPI screens.
- **Curve smoothness**: Continuous curves should join with mirrored angles using arcs or quadratic curves.

## Design Tools

Lucide provides guides for four desktop tools plus a web editor:

### Figma (recommended)
- Community file with the full library: https://www.figma.com/community/file/1080851853377107006/lucide-icons
- Create a 24x24 frame, set stroke to 2px centered, round caps/joins
- Use the spacing checker (Option/Alt key) to verify 2px element spacing
- Export: select frame, Export tab, SVG format

### Lucide Studio (web-based)
- URL: https://studio.lucide.dev/edit
- Built specifically for lucide icon creation
- "Tidy" button optimizes paths to 3 decimal precision
- Can submit PRs directly to the lucide repo

### Inkscape
- Create 24x24 px document with 1px grid spacing
- Stroke: 2px, rounded join, rounded cap
- Save as "Optimized SVG" with 2-space indentation

### Illustrator / Affinity Designer
- Official templates available in the lucide GitHub repo under `docs/public/templates/`
- After export, optimize with SVGOMG or `svgo --multipass`

## SVG to IconNode Conversion

The `IconNode` format is an array of tuples representing the children of the root `<svg>`:

```typescript
type IconNode = [elementName: string, attrs: Record<string, string>][]
```

Example -- an SVG like:

```xml
<svg ...>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 8v4l3 3" />
</svg>
```

Becomes:

```typescript
const myIcon: IconNode = [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M12 8v4l3 3' }],
]
```

All attribute values must be strings. Each element should have a unique `key` attribute for Vue rendering.

### Export and Optimization Workflow

1. Design the icon in your tool of choice following the specs above
2. Export as SVG
3. Optimize with one of:
   - Lucide Studio's "Tidy" button
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) (web)
   - `svgo --multipass` (CLI)
4. Extract the child elements into `IconNode` tuple format
5. Add to the appropriate `.ts` file in `packages/lucide-outdoors/src/icons/`

## Naming Conventions

Lucide uses:
- **lower-kebab-case** for icon names (e.g., `trail-sign`)
- **International English** (e.g., `color` not `colour`)
- **Descriptive naming** for what the icon depicts, not its use case
- **No numbered variants** -- use descriptive modifiers instead

Our `lucide-outdoors` package uses:
- **camelCase** for TypeScript export names in the core data package (e.g., `trailSign`)
- **PascalCase** for Vue component exports in `lucide-outdoors-vue` (e.g., `TrailSign`)
- **kebab-case** for the icon registry keys matching DB values (e.g., `trail-sign`)
- **`od-` prefix** on internal lucide names to avoid collisions (e.g., `od-trail-sign` produces CSS class `lucide-od-trail-sign`)

## References

- Icon Design Guide: https://lucide.dev/guide/design/icon-design-guide
- Figma Guide: https://lucide.dev/guide/design/figma-guide
- Inkscape Guide: https://lucide.dev/guide/design/inkscape-guide
- Contributing: https://lucide.dev/contributing
- Lucide Studio: https://studio.lucide.dev/edit
- Figma Community File: https://www.figma.com/community/file/1080851853377107006/lucide-icons
