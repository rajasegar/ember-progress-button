import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('progress-bar', 'Integration | Component | progress bar', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#progress-bar}}
      template block text
    {{/progress-bar}}
  `);

  assert.equal(this.$('span').length, 3);
});

test('it should yield the content', function(assert) {
  this.render(hbs`
    {{#progress-bar}}
      template block text
    {{/progress-bar}}
  `);
  assert.equal(this.$('.content').text().trim(), 'template block text');

});

test('it should have a progress element inside', function(assert) {
  this.render(hbs`
    {{#progress-bar}}
      template block text
    {{/progress-bar}}
  `);
  assert.equal(this.$('.progress').length, 1);

});

test('it should have a progress-inner element', function(assert) {
  this.render(hbs`
    {{#progress-bar}}
      template block text
    {{/progress-bar}}
  `);
  assert.equal(this.$('.progress-inner').length, 1);

});

test('it should have a default style attribute', function(assert) {
  this.set('progressStyle','width:0%;opacity:0');
  this.render(hbs`
    {{#progress-bar progressStyle=progressStyle}}
      template block text
    {{/progress-bar}}
  `);
  assert.equal(this.$('.progress-inner').attr('style'), 'width:0%;opacity:0');

});



