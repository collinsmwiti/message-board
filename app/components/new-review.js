import Ember from 'ember';

//exporting behavior of adding new reviews and saving them
export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        profile: this.get('profile'),
        author: this.get('author'),
        content: this.get('content'),
        rating: this.get('rating'),
        answer: this.get('answer'),
        image: this.get('image'),
        message: this.get('message')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
