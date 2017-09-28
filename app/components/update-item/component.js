import Ember from 'ember';

export default Ember.Component.extend({
    updateItemForm: false,
    actions: {
        updateItemForm() {
            this.set('updateItemForm', true);
        },
        update(item){
            var params = {
                name: this.get('name'),
                description: this.get('description'),
                cost: this.get('cost')
            };
            this.set('updateItemForm', false)
            this.sendAction('updateItem', item, params)

        }

    }
});
