import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/lucide-outdoors.js',
      format: 'esm',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
  },
  // CJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/lucide-outdoors.js',
      format: 'cjs',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
  },
  // Type declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/lucide-outdoors.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
]
