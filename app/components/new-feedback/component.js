import Ember from 'ember';

export default Ember.Component.extend({
    newFeedbackForm: false,
    rateStoreForm: false,
    actions: {
        newFeedbackFormShow(){
            this.set('newFeedbackForm', true);
        },
        saveFeedback(){
            var params = {
                content: this.get('content') ? this.get('content'): null,
                rating: this.get('rating') ? this.get('rating'): null,
                item: this.get('item')
            };
            this.set('newFeedbackForm', false);
            this.sendAction('saveFeedback', params)
        },

        // rateStoreFormShow() {
        //     this.set('rateStoreForm', true)
        // },

        // rateStore() {
        //     var params = {
        //         rate: this.get('rate'), 
        //     }

        //     this.set('rateStoreForm', false),
        //     this.sendAction('rateStore', params)
        // }
    }
});
