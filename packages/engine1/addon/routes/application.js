import Route from '@ember/routing/route';
import { service } from 'ember-polaris-service';
import Api from 'test-app/services/api'; // <----------------- THIS is wrong to do in an engine;
import SharedApi from 'shared-addon/services/shared-api';
import InternalApi from 'shared-addon/services/internal-api'; // <-- not sure why this is discovered as it's not app re-exported likely would fail under embroider

// it seems to work but it goes against the purpose of the engine
// not sure how you would pass the key here nicely
// see addon/engine.js services comment on how it would be passed previously
// also test-app/app/app.js for the counterpart of passing the value received by addon/engine.js
// that doesn't work because it's not the base class it's expecting and likely not in the registry

export default class EngineTopRoute extends Route {
  @service(Api) api;
  @service(SharedApi) sharedApi;
  @service(InternalApi) internalApi;

  model() {
    return {
      apiName: this.api.name,
      sharedName: this.sharedApi.name,
      internalApi: this.internalApi.name,
      strictlyEquals: this.api.api === this.sharedApi, // this should be the same instance
    };
  }
}
