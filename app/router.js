import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('newTest');
  this.route('testList');
  this.route('contacts');
  this.route('categories', function() {
    this.route('add');
    this.route('update');
    this.route('contacts', function() {
      this.route('add');
      this.route('update');
    });
  });
});
