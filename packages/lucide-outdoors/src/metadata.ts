// Per-icon metadata (designer credit, etc.), keyed by the icon's kebab-case name —
// the same key used by resolveIcon() in lucide-outdoors-vue.

export interface IconAuthor {
  /** Display name of the icon's designer. */
  name: string
  /** GitHub username (no leading @). */
  github: string
}

export interface IconMeta {
  /** Who designed the icon. */
  author: IconAuthor
}

const bogdan: IconAuthor = {
  name: 'Bogdan Rosu',
  github: 'bogdanspn',
}

export const iconMetadata: Record<string, IconMeta> = {
  // Activities
  'activity-hiking': { author: bogdan },
  'activity-walking': { author: bogdan },
  'activity-running': { author: bogdan },
  'activity-trail-running': { author: bogdan },
  'activity-biking': { author: bogdan },
  'activity-road-cycling': { author: bogdan },
  'activity-gravel-biking': { author: bogdan },
  'activity-mountain-biking': { author: bogdan },
  'activity-e-road-cycling': { author: bogdan },
  'activity-e-gravel-biking': { author: bogdan },
  'activity-e-mountain-biking': { author: bogdan },
  'activity-skiing': { author: bogdan },
  'activity-cross-country-skiing': { author: bogdan },
  'activity-snowboarding': { author: bogdan },

  // Points of interest
  'water': { author: bogdan },
  'waterfall': { author: bogdan },
  'cave': { author: bogdan },
  'mountain-tree': { author: bogdan },
  'panorama': { author: bogdan },
  'ruins': { author: bogdan },
  'monument': { author: bogdan },
  'trail-sign': { author: bogdan },
  'campfire': { author: bogdan },
  'tent-tree-alt': { author: bogdan },
}
