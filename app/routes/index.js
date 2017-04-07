import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveMessage3(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    likeMessage(message) {
      var likes = message.get("likes");
      likes++;
      message.set('likes', likes);
      message.save();
      this.transitionTo('index');
    },
    dislikeMessage(message) {
      var dislikes = message.get("dislikes");
      dislikes++;
      message.set('dislikes', dislikes);
      message.save();
      this.transitionTo('index');
    }
  }
});
