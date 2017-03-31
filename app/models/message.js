import DS from 'ember-data';

export default DS.Model.extend({
  profile: DS.attr(),
  no: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  favourite_quote: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  question: DS.attr(),
  reviews: DS.hasMany('review', {
    async: true
  })
});
