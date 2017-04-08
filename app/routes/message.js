import Ember from 'ember';

//exporting functionality of the route message.js
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },
  actions: {
    update(message, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          message.set(key, params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var message = params.message;
      message.get('messages').addObject(newReview);
      newReview.save().then(function() {
        return message.save();
      });
      this.transitionTo('message', message);
    },
    destroyMessage(message) {
      var review_deletions = message.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return message.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
  }
});
