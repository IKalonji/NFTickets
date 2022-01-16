module.exports = {
  port: 5222,
  open: 'external',
  host: 'dev.localhost',
  server: {
    baseDir: './dist/nftickets',
    middleware: {
      1: require('compression')()
    }
  }
};
