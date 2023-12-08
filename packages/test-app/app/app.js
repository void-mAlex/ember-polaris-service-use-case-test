import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-app/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  engines = {
    engine1: {
      dependencies: {
        // services: ['api'],
        externalRoutes: {
          application: 'application',
          content: 'content',
        },
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
