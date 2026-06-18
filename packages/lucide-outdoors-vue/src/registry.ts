import {
  // Activities
  ActivityHiking, ActivityWalking, ActivityRunning, ActivityTrailRunning,
  ActivityBiking, ActivityRoadCycling, ActivityGravelBiking, ActivityMountainBiking,
  ActivityERoadCycling, ActivityEGravelBiking, ActivityEMountainBiking,
  ActivitySkiing, ActivityCrossCountrySkiing, ActivitySnowboarding,
  // Points of interest
  Water, Waterfall, Cave, MountainTree, Panorama, Ruins, Monument, TrailSign,
  Campfire, TentTreeAlt,
} from './icons'

const iconRegistry: Record<string, ReturnType<typeof Water>> = {
  // Activities
  'activity-hiking': ActivityHiking,
  'activity-walking': ActivityWalking,
  'activity-running': ActivityRunning,
  'activity-trail-running': ActivityTrailRunning,
  'activity-biking': ActivityBiking,
  'activity-road-cycling': ActivityRoadCycling,
  'activity-gravel-biking': ActivityGravelBiking,
  'activity-mountain-biking': ActivityMountainBiking,
  'activity-e-road-cycling': ActivityERoadCycling,
  'activity-e-gravel-biking': ActivityEGravelBiking,
  'activity-e-mountain-biking': ActivityEMountainBiking,
  'activity-skiing': ActivitySkiing,
  'activity-cross-country-skiing': ActivityCrossCountrySkiing,
  'activity-snowboarding': ActivitySnowboarding,
  // Points of interest
  'water': Water,
  'waterfall': Waterfall,
  'cave': Cave,
  'mountain-tree': MountainTree,
  'panorama': Panorama,
  'ruins': Ruins,
  'monument': Monument,
  'trail-sign': TrailSign,
  'campfire': Campfire,
  'tent-tree-alt': TentTreeAlt,
}

export function resolveIcon(name: string) {
  return iconRegistry[name]
}

export { iconRegistry }
