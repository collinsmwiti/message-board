import DS from 'ember-data';

export default DS.Model.extend({
  profile: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  content: DS.attr(),
  rating: DS.attr(),
  answer: DS.attr(),
  image: DS.attr(),
  rental: DS.belongsTo('message', {
    async: true
  })
});
