'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: [
        '../engine1',
        '../engine2',
        '../other-addon',
        '../shared-addon',
      ],
    },
    // Add options here
  });

  return app.toTree();
};
