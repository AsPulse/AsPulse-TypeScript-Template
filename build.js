const { build } = require('esbuild');
const { resolve } = require('path');

build({
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints: [resolve(__dirname, 'src/index.ts')],
  target: 'esnext',
  outfile: resolve(__dirname, 'dist/index.js'),
  bundle: true,
  minify: true,
  sourcemap: true,
}).catch(() => {});
