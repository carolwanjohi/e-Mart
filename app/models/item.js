import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    cost: DS.attr(),
    feedbacks: DS.hasMany('feedback', {async: true})

});
