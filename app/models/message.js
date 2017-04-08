import DS from 'ember-data';

//exporting the attributes of the parent class
export default DS.Model.extend({
  profile: DS.attr(),
  // no: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  favourite_quote: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  question: DS.attr(),
  reviews: DS.hasMany('review', {
    async: true
  }),
  likes: DS.attr(),
  dislikes: DS.attr()
});
