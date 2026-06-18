# lucide-outdoors-vue

Outdoor and activity icons as Vue 3 components, built on top of [`lucide-vue-next`](https://github.com/lucide-icons/lucide).

## Install

```bash
npm install lucide-outdoors-vue lucide-vue-next
```

## Usage

```vue
<script setup>
import { ActivityHiking, Waterfall, Campfire } from 'lucide-outdoors-vue'
</script>

<template>
  <ActivityHiking :size="24" />
  <Campfire class="text-orange-600" />
  <Waterfall stroke-width="1.5" />
</template>
```

All props accepted by `lucide-vue-next` components work here too: `size`, `color`, `stroke-width`, `absolute-stroke-width`, and any SVG attribute.

## Icons

Component names are unique to this package. Where Lucide already ships an equivalent
(`House`, `Flame`, `Mountain`, …), use the `lucide-vue-next` component directly.

### Activities

| Component | Trail type |
|---|---|
| `ActivityHiking` | Hiking |
| `ActivityWalking` | Walking |
| `ActivityRunning` | Running |
| `ActivityTrailRunning` | Trail Running |
| `ActivityBiking` | (generic cycling) |
| `ActivityRoadCycling` | Road Cycling |
| `ActivityGravelBiking` | Gravel Biking |
| `ActivityMountainBiking` | Mountain Biking |
| `ActivityERoadCycling` | E-Road Cycling |
| `ActivityEGravelBiking` | E-Gravel Biking |
| `ActivityEMountainBiking` | E-Mountain Biking |
| `ActivitySkiing` | Skiing / Ski Touring |
| `ActivityCrossCountrySkiing` | Cross-Country Skiing |
| `ActivitySnowboarding` | Snowboarding / Splitboarding |

### Points of interest

| Component | POI category |
|---|---|
| `Water` | Lake |
| `Waterfall` | Waterfall |
| `Cave` | Cave |
| `MountainTree` | Forested peak |
| `Panorama` | Viewpoint |
| `Ruins` | Ruins |
| `Monument` | Monument |
| `TrailSign` | Trailhead |
| `Campfire` | Campsite / fire |
| `TentTreeAlt` | Campsite |

## License

ISC
