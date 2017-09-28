import Ember from 'ember';

export default Ember.Component.extend({
    rateStoreForm: false,

    actions: {
        rateStoreFormShow() {
            this.set('rateStoreForm', true)
        },

        rateStore() {
            var params = {
                rate: this.get('rate'), 
            }

            this.set('rateStoreForm', false),
            this.sendAction('rateStore', params)
        }
    }
});
