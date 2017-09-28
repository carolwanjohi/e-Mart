import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        rateStore(params) {
            this.sendAction('rateStore', params)
        }
    }
});
