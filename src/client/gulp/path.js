var PATH = {
  ASSETS: {
    SRC: './assets/**',
    DEST: 'build/assets'
  },
  BUILD: 'build',
  HTML: {
    SRC: './*.html',
    WATCH: './*.html',
  },
  IMAGES: {
    SRC: './assets/images/**',
    DEST: './build/assets/images',
  },
  OUT: 'build.js',
  SRC: '.',
  STYLE: {
    SRC: './css/app.scss',
    WATCH: './css/**'
  },
  TESTS: {
    SRC: 'test/*.spec.js'
  },
  ENTRY_POINT: './js/app.jsx'
};

module.exports = PATH;
