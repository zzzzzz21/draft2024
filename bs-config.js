module.exports = {
  files: ['dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js'],
  open: 'external',
  external: true,
  startPath: 'special/draft2024/',
  watch: true,
  server: {
    baseDir: 'dist',
    https: true,
  },
  notify: false,
};
