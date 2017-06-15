import Ember from 'ember';

const {
  RSVP: { Promise },
  run: { later }
} = Ember;

export default Ember.Controller.extend({
  actions: {
    promiseAction() {
      return new Promise((resolve) =>{
        later(function() {
          console.log('Promise Action from application controller'); // eslint-disable-line
          resolve();
        }, 5000);
      });
    },

    rejectPromiseAction() {
      return new Promise((resolve, reject) =>{
        later(function() {
          console.log('Reject Promise Action from application controller'); // eslint-disable-line
          reject();
        }, 1000);
      });
    }
  }
});
