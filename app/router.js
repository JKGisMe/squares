import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = document.location.href;
      const title = Ember.getWithDefault(this, 'routeName', 'unknown');

      Ember.get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('squares', function() {
    this.route('new');
  });

  this.route('square', { path: '/square/:id' }, function() {
    this.route('edit');
  });
  this.route('privacy');
});

export default Router;
