# lucide-outdoors

Monorepo for the lucide-outdoors icon set and its framework bindings.

**[Browse the icon gallery](https://haiafara.github.io/lucide-outdoors/)**

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

Both packages share one version and are released together.

1. Make sure everything works locally by running `npm install` and `npm run build`
2. Bump the `version` to the same value in both
   [`packages/lucide-outdoors/package.json`](packages/lucide-outdoors/package.json) and
   [`packages/lucide-outdoors-vue/package.json`](packages/lucide-outdoors-vue/package.json)
3. Add an entry for the new version in each package's `CHANGELOG.md`
   ([lucide-outdoors](packages/lucide-outdoors/CHANGELOG.md),
   [lucide-outdoors-vue](packages/lucide-outdoors-vue/CHANGELOG.md)) following the
   [Keep a Changelog](https://keepachangelog.com/) format
4. Commit and push the changes to `main`
5. Draft a new release on the [releases page](https://github.com/haiafara/lucide-outdoors/releases)
    - Create a tag with the prefix **v** and the version, eg: **v1.0.0**
    - Prefix the release title with the tag, eg: **v1.0.0 - Initial release**
6. Publish the release

The publish workflow validates that the release tag matches the `version` in both packages and
that each `CHANGELOG.md` has an entry for the version, then builds and publishes `lucide-outdoors`
first, then `lucide-outdoors-vue`, to npm with provenance via OIDC trusted publishing (no token
required).

## License

ISC
