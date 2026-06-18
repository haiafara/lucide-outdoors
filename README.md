# lucide-outdoors

Outdoor and activity icon data for the [Lucide](https://lucide.dev) icon ecosystem.

Provides `IconNode` arrays (the same format Lucide uses internally) for outdoor activity and POI icons not included in the core Lucide library.

## Install

```bash
npm install lucide-outdoors
```

## Usage

```ts
import { hiking, waterfall, campfire } from 'lucide-outdoors'

// Each icon is an IconNode array:
// [elementName: string, attrs: Record<string, string>][]
console.log(hiking)
// [
//   ['circle', { cx: '12', cy: '4', r: '2', key: 'hiking-1' }],
//   ['path', { d: 'M12 6 L12 14', key: 'hiking-2' }],
//   ...
// ]
```

Use with [`lucide-outdoors-vue`](https://github.com/haiafara/lucide-outdoors-vue) to get ready-made Vue components.

## Icons

All icon keys are unique to this package — none collide with core Lucide. Where Lucide already
ships an equivalent (e.g. `house`, `flame`, `mountain`), use Lucide's icon directly.

### Trail activity icons

| Export | Icon key |
|---|---|
| `hiking` | `hiking` |
| `walking` | `walking` |
| `running` | `running` |
| `trailRunning` | `trail-running` |
| `biking` | `biking` |
| `roadCycling` | `road-cycling` |
| `gravelBiking` | `gravel-biking` |
| `mountainBiking` | `mountain-biking` |
| `eRoadCycling` | `e-road-cycling` |
| `eGravelBiking` | `e-gravel-biking` |
| `eMountainBiking` | `e-mountain-biking` |
| `skiing` | `skiing` |
| `crossCountrySkiing` | `cross-country-skiing` |
| `snowboarding` | `snowboarding` |
| `skis` | `skis` |

### POI icons

| Export | Icon key |
|---|---|
| `water` | `water` |
| `waterfall` | `waterfall` |
| `cave` | `cave` |
| `mountainTree` | `mountain-tree` |
| `panorama` | `panorama` |
| `ruins` | `ruins` |
| `monument` | `monument` |
| `trailSign` | `trail-sign` |
| `campfire` | `campfire` |
| `tentTreeAlt` | `tent-tree-alt` |

## Design

Icons follow the [Lucide design system](https://lucide.dev/guide/design/icon-design-guide): 24x24 canvas, 2px stroke, round caps and joins.

See [STYLE_GUIDE.md](./STYLE_GUIDE.md) for the full spec.

## License

ISC
