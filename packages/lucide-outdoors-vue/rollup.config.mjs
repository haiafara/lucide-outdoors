import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const external = ['lucide-vue-next', 'lucide-outdoors', 'vue']

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/lucide-outdoors-vue.js',
      format: 'esm',
    },
    external,
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
  },
  // CJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/lucide-outdoors-vue.js',
      format: 'cjs',
    },
    external,
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
  },
  // Type declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/lucide-outdoors-vue.d.ts',
      format: 'esm',
    },
    external,
    plugins: [dts()],
  },
]
