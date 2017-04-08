import Ember from 'ember';

//exporting the behavior of hiding and showing images and also for displaying like and dislike
export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    likeMessage(message) {
      this.sendAction('likeMessage', message);
    },
    dislikeMessage(message) {
      this.sendAction('dislikeMessage', message);
    }
  }
});
