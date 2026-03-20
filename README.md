# lucide-outdoors

Outdoor and activity icon data for the [Lucide](https://lucide.dev) icon ecosystem.

Provides `IconNode` arrays (the same format Lucide uses internally) for outdoor activity and POI icons not included in the core Lucide library.

## Install

```bash
npm install lucide-outdoors
```

## Usage

```ts
import { hiking, mountain, waterfall } from 'lucide-outdoors'

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

### Trail activity icons

| Export | Icon key |
|---|---|
| `hiking` | `hiking` |
| `walking` | `walking` |
| `running` | `running` |
| `biking` | `biking` |
| `roadCycling` | `road-cycling` |
| `gravelBiking` | `gravel-biking` |
| `mountainBiking` | `mountain-biking` |
| `eRoadCycling` | `e-road-cycling` |
| `eGravelBiking` | `e-gravel-biking` |
| `eMountainBiking` | `e-mountain-biking` |
| `skiing` | `skiing` |
| `snowboarding` | `snowboarding` |

### POI icons

| Export | Icon key |
|---|---|
| `mountain` | `mountain` |
| `water` | `water` |
| `church` | `church` |
| `trailSign` | `trail-sign` |
| `eye` | `eye` |
| `home` | `home` |
| `waterfall` | `waterfall` |
| `cave` | `cave` |
| `monument` | `monument` |

## Design

Icons follow the [Lucide design system](https://lucide.dev/guide/design/icon-design-guide): 24x24 canvas, 2px stroke, round caps and joins.

See [STYLE_GUIDE.md](./STYLE_GUIDE.md) for the full spec.

## License

ISC
