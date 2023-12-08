import Service, { service } from 'ember-polaris-service';
import InternalApi from 'shared-addon/services/internal-api';

export default class SharedApiService extends Service {
  @service(InternalApi) api;
  name = 'shared-addon/service/shared-api.js';
  count = 0;
  constructor(scope) {
    super(scope);
    console.log('instance count', ++this.count);
  }
}
