import EmberRouter from '@embroider/router';
import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('engine1', { resetNamespace: true, path: '/app1' });
  this.mount('engine2', { path: '/app2' });
  this.route('content');
});
