import Ember from 'ember';

//exporting message popularity 
export function messagePopularity(params /*, hash*/ ) {
  var message = params[0];

  if (message.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(messagePopularity);
