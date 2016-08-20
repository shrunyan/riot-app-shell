'use strict'

import riot from 'rollup-plugin-riot'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  format: 'cjs',
  entry: 'src/app.js',
  dest: 'build/bundle.js',
  // HACK: to get around redux es source doing a process check. wtf?
  intro: 'var process={};process.env={};process.env.NODE_ENV = "production";',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: './node_modules/**'
    }),
    riot(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['es2015', {
          modules: false
        }]
      ],
      plugins: ['external-helpers']
    }),
    uglify()
  ]
}
