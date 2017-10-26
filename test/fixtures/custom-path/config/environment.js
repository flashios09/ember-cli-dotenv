/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'custom-path',
    environment,
    rootURL: '/',
    locationType: 'auto',
    IN_PROCESS_ENV: process.env.IN_PROCESS_ENV
  };

  return ENV;
};
