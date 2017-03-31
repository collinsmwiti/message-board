import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        profile: this.get('profile'),
        author: this.get('author'),
        city: this.get('city'),
        favourite_quote: this.get('favourite_quote'),
        content: this.get('content'),
        question: this.get('question'),
        image: this.get('image'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
