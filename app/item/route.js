import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('item', params.item_id);
    },

    actions: {
        destroyItem(item) {
            item.destroyRecord();
            this.transitionTo('index');
        },
        updateItem(item, params) {
            Object.keys(params).forEach( function(key){
                if(params[key]!==undefined){
                    item.set(key, params[key]);
                }
            });
            item.save();
            this.transitionTo('item');
        },
        saveFeedback(params) {
            var newFeedback = this.store.createRecord('feedback', params);
            var item = params.item;
            item.get('feedbacks'). addObject(newFeedback);
            newFeedback.save().then(function(){
                return item.save();
            });
            this.transitionTo('item',item);
        },

        // rateStore(params) {
        //     var newRate = this.store.createRecord('feedback', params);
        //     newRate.save();
        //     this.transitionTo('index');
        // }
    }
});
