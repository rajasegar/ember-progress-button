import Ember from 'ember';
import layout from '../templates/components/progress-button';

const {
  get,
  set,
  computed,
  observer,
  deprecate,
  getWithDefault,
  Component,
  String: { htmlSafe }
} = Ember;

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['progress-button'],
  classNameBindings: ['isLoading:state-loading','status'],
  attributeBindings: [
    'isDisabled:disabled',
    'style:data-style',
    'horizontal:data-horizontal',
    'vertical:data-vertical',
    'perspective:data-perspective'
  ],
  isDisabled: computed.reads('isLoading'),
  isLoading: false,
  style: 'fill',
  status: null,
  statusTime: 1500,
  dataStyle: true,
  vertical: false,
  horizontal: computed.not('vertical'),
  perspective: computed('style', function() {
    let _style = this.get('style');
    return _style.indexOf('rotate') >= 0 || _style.indexOf('flip') >= 0;
  }),
  progress: 0,
  progressPercentage: computed('progress', 'isLoading', function() {
    return (this.get('isLoading')) ? 100 * this.get('progress') + '%' : '0%';
  }),
  progressOpacity: computed('isLoading', function() {
    return (this.get('isLoading')) ? 1 : 0;
  }),

  _stop(status) {

    let _statusClass = status >= 0 ? 'state-success' : 'state-error';
    this.set('status', _statusClass);
    this.set('isLoading', false);

    Ember.run.later(this, function() {
      this.set('progress', 0);
    },0);

    Ember.run.later(this, function() {
      this.set('status', null);
    }, get(this, 'statusTime'));
  },

  progressStyle: computed('vertical','progressPercentage','progressOpacity', function() {
    let _style = "height:0;width:0;opacity:0";
    if(this.get('vertical')) {
      _style = `height:${this.get('progressPercentage')};opacity:${this.get('progressOpacity')}`;
    } else {
      _style = `width:${this.get('progressPercentage')};opacity:${this.get('progressOpacity')}`;
    }
    return htmlSafe(_style);
  }),

  handleActionPromise: observer('promise', function() {

    let promise = get(this, 'promise');

    if(!promise) {
      return;
    }

    promise.then(() => {
      this._stop(1);
    }, () => {
      this._stop(-1);
    }).catch(() => {
      this._stop(-1);
    });
  }),

  click() {

    this.set('isLoading', true);
    this.set('progress', 0);

    let params = getWithDefault(this, 'params', []);
    let callbackHandler = (promise) => {
      set(this, 'promise', promise);
    };

    if(typeof this.get('action') === 'function') {
      let deprecatingCallbackHandler = function(promise) {
        deprecate(`When using closure style actions with ember-progress-button,
                   please return the promise instead of using the callback argument.
                   The callback for closure actions will be removed in future versions.`,
                  false,
                  { id: 'ember-progress-button.action-callback', until: '1.0.0' });

        callbackHandler(promise);
      };

      let promise = get(this, 'action')(deprecatingCallbackHandler, ...params);

      if (promise && typeof promise.then === 'function') {
        callbackHandler(promise);
      }
    } else {
      let actionArguments = ['action', callbackHandler, ...params];
      this.sendAction(...actionArguments);
    }

    let _this = this;
    Ember.run.later(this, function() {
      let progress = 0;
      let interval = setInterval( function() {
        progress = Math.min( progress + Math.random() * 0.1, 1 );
        _this.set('progress', progress);

        if( progress === 1 ) {
          // _this._stop(1);
          clearInterval( interval );
        }
      }, 200 );
    }, 0);

    // If this is part of a form, it will perform an HTML form
    // submission without returning false to prevent action bubbling
    return false;

  }
});
