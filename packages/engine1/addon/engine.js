import Engine from '@ember/engine';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

const modulePrefix = 'engine1';

export default class EngineOne extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;
  dependencies = {
    externalRoutes: ['application', 'content'],
    // services: ['api'],
  };
}

loadInitializers(EngineOne, modulePrefix);
