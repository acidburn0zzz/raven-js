const tsConfig = require('./tsconfig.json');
tsConfig.compilerOptions.baseUrl = `../../${tsConfig.compilerOptions.baseUrl}`;

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon', 'karma-typescript'],
    basePath: process.cwd(),
    // files: ['src/**/*.ts', 'tests/**/*.ts'],
    // preprocessors: {
    //   'src/**/*.ts': ['karma-typescript', 'coverage'],
    //   'tests/**/*.ts': ['karma-typescript'],
    // },
    files: ['tests/**/*.ts'],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript', 'coverage'],
      'tests/**/*.ts': ['karma-typescript'],
    },
    karmaTypescriptConfig: tsConfig,
    reporters: ['progress', 'coverage', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
  });
};
