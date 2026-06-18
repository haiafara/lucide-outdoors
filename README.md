# lucide-outdoors

Monorepo for the lucide-outdoors icon set and its framework bindings.

| Package | Description |
|---|---|
| [`lucide-outdoors`](./packages/lucide-outdoors) | Outdoor & activity icon data (`IconNode` arrays) for the [Lucide](https://lucide.dev) ecosystem |
| [`lucide-outdoors-vue`](./packages/lucide-outdoors-vue) | The same icons as ready-made Vue 3 components, built on `lucide-vue-next` |

The two packages are developed and released in lockstep. `lucide-outdoors-vue` depends on
`lucide-outdoors`; in this repo that dependency resolves to the local workspace, so a clean
checkout builds without anything published to npm.

## Develop

```bash
npm install        # links the workspaces together
npm run build      # builds lucide-outdoors, then lucide-outdoors-vue
npm run demo       # regenerates the icon gallery into _site/
```

## Icon gallery

The full set is published to GitHub Pages on every push to `main`:
<https://haiafara.github.io/lucide-outdoors/>

## Release

Both packages share one version. Tag a release `vX.Y.Z` (with matching `version` in both
`packages/*/package.json` and a CHANGELOG entry in each); the publish workflow builds the
workspaces and publishes `lucide-outdoors` first, then `lucide-outdoors-vue`.

## License

ISC
