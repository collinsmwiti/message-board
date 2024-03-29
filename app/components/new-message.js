import Ember from 'ember';

//exporting behavior of adding new messages and saving them
export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },
    saveMessage1() {
      var params = {
        profile: this.get('profile'),
        author: this.get('author'),
        city: this.get('city'),
        favourite_quote: this.get('favourite_quote'),
        content: this.get('content'),
        question: this.get('question'),
        image: this.get('image'),
        likes: 0,
        dislikes: 0
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage2', params);
    }
  }
});
