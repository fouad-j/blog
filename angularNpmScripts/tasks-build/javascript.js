'use strict';
let template = require('npm-html2js');
let fs = require('fs');
let glob = require('glob'); // get array files from pattern

let sources = {
  scripts: [
    './src/app.js'
  ],
  dependenciesJS: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  templates: './src/**/*[^index].html'
};

let concat = opts => {
  let fileList = opts.src;
  let distPath = opts.dest;
  let out = fileList.map(filePath => fs.readFileSync(filePath, 'utf-8'));

  fs.writeFileSync(distPath, out.join('\n'), 'utf-8');
};

glob('./src/**/*[^spec].js', (er, files) => {
  // Get all JS Files
  sources.scripts = sources.scripts.concat(files);

  concat({
    src: sources.scripts,
    dest: './build/tmp/app.js'
  });
});

template({
  tplPath: sources.templates,
  output: './build/tmp/template.js',
  moduleName: 'app',
  basePath: '',
  quotes: '',
  exclude: ''
});

concat({
  src: sources.dependenciesJS,
  dest: './build/tmp/dependecies.js'
});

