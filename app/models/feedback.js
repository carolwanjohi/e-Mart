import DS from 'ember-data';

export default DS.Model.extend({
    content: DS.attr(),
    rating: DS.attr(),
    item: DS.belongsTo('item', {async: true}),
    rate: DS.attr()
});
