import Route from '@ember/routing/route';
import { service } from 'ember-polaris-service';
import Api from 'test-app/services/api';

export default class ContentRoute extends Route {
  @service(Api) api;
  model() {
    return this.api.name + ';' + this.api.api.name;
  }
}
