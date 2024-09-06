module.exports = {
    spec: 'test/**/test.spec.js',  // Path to your test files
    timeout: 5000,  // Test timeout in milliseconds
    reporter: 'spec',  // The output reporter for test results

  };


//additional configuration for mocha file
  // module.exports = {
  //   require: ['@babel/register'],
  //   reporter: 'spec',
  //   timeout: 5000,
  //   ui: 'bdd',
  //   recursive: true,
  //   spec: 'test/**/*.js',
  //   exclude: 'test/**/*.ignore.js',
  //   slow: 75
  // };
  
  
  