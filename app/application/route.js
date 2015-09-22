import Ember from 'ember';

export default Ember.Route.extend({
  title: null,
  actions:{
    transitionTo(where){
      this.transitionTo(where);
    }
  }
});
