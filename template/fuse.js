process.env.DEBUG = 'finpo:*';

const fsbx = require('fuse-box');
const closure = require('fusebox-closure-plugin').default;
const eslinter = require('fuse-box-eslint-plugin');

const prodcution = process.argv[2] && (process.argv[2].toLowerCase() === 'build');
const fuse = fsbx.FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  log: !!prodcution,
  plugins: [
    fsbx.JSONPlugin(),
    [
      eslinter(),
      fsbx.BabelPlugin({
        presets: ['latest'],
      }),
    ],
    !!prodcution && closure({ compilationLevel: 'ADVANCED', languageOut: 'ES6' }),
  ],
});

const app = fuse.bundle('index').instructions('> index.js');
if (!prodcution) app.watch().completed(proc => proc.start());

fuse.run();
