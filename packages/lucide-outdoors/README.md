# lucide-outdoors

Outdoor and activity icon data for the [Lucide](https://lucide.dev) icon ecosystem.

Provides `IconNode` arrays (the same format Lucide uses internally) for outdoor activity and POI icons not included in the core Lucide library.

**🔗 [Browse the icon gallery →](https://haiafara.github.io/lucide-outdoors/)**

## Install

```bash
npm install lucide-outdoors
```

## Usage

```ts
import { activityHiking, waterfall, campfire } from 'lucide-outdoors'

// Each icon is an IconNode array:
// [elementName: string, attrs: Record<string, string>][]
console.log(activityHiking)
// [
//   ['circle', { cx: '12', cy: '4', r: '2', key: 'activity-hiking-1' }],
//   ['path', { d: 'M12 6 L12 14', key: 'activity-hiking-2' }],
//   ...
// ]
```

Use with [`lucide-outdoors-vue`](https://github.com/haiafara/lucide-outdoors-vue) to get ready-made Vue components.

## Icons

All icon keys are unique to this package — none collide with core Lucide. Where Lucide already
ships an equivalent (e.g. `house`, `flame`, `mountain`), use Lucide's icon directly.

### Activities

| Export | Icon key |
|---|---|
| `activityHiking` | `activity-hiking` |
| `activityWalking` | `activity-walking` |
| `activityRunning` | `activity-running` |
| `activityTrailRunning` | `activity-trail-running` |
| `activityBiking` | `activity-biking` |
| `activityRoadCycling` | `activity-road-cycling` |
| `activityGravelBiking` | `activity-gravel-biking` |
| `activityMountainBiking` | `activity-mountain-biking` |
| `activityERoadCycling` | `activity-e-road-cycling` |
| `activityEGravelBiking` | `activity-e-gravel-biking` |
| `activityEMountainBiking` | `activity-e-mountain-biking` |
| `activitySkiing` | `activity-skiing` |
| `activityCrossCountrySkiing` | `activity-cross-country-skiing` |
| `activitySnowboarding` | `activity-snowboarding` |

### Points of interest

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
