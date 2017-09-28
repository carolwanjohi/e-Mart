import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash ({
            items: this.store.findAll('item'),
            feedbacks: this.store.findAll('feedback')
        });
    },

    actions: {

        rateStore(params) {
            var newRate = this.store.createRecord('feedback', params);
            newRate.save();
            this.transitionTo('index');
        }
    }
  
});
