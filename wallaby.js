module.exports = function (wallaby) {
  process.env.NODE_PATH += ':' + require('path').join(wallaby.localProjectDir, 'node_modules');
  return {
    files: [
      'index.js',
      {pattern: 'server.js', instrument: false}
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    env: {
      type: 'node'
    }
  };
};