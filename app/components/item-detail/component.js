import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(item) {
            this.sendAction('destroyItem', item)
        }
    }
});
