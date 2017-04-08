import DS from 'ember-data';

//exporting the attributes of the child class
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
