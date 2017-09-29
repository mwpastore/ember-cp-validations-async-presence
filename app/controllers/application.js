import Ember from 'ember';

export default Ember.Controller.extend({
  foo: Ember.computed.readOnly('model'),

  actions: {
    setQux(foo) {
      this.store.createRecord('qux', {
        name: 'lkajslkjdf'
      }).get('foos').pushObject(foo);
    },

    addBar(foo) {
      foo.get('bars').createRecord({
        name: 'lkajslkjdf'
      });
    }
  }
});
