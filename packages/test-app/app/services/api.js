import Service, { service } from 'ember-polaris-service';
import SharedApi from 'shared-addon/services/shared-api';

export default class ApiService extends Service {
  @service(SharedApi) api;
  name = 'test-app/service/api.js';
}
