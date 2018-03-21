import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('progress-button', 'Integration | Component | progress button', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#progress-button}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should have a progress-button class', function(assert) {
  this.render(hbs`
    {{#progress-button}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').length, 1);

});

test('it should have a default style=fill', function(assert) {
  this.render(hbs`
    {{#progress-button}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').data('style'), "fill");

});

test('it should have a default horizontal layout', function(assert) {
  this.render(hbs`
    {{#progress-button}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').data('horizontal'), "");

});

test('it should have vertical layout if vertical=true', function(assert) {
  this.render(hbs`
    {{#progress-button vertical=true}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').data('vertical'), "");

});

test('it should not have horizontal layout if vertical=true', function(assert) {
  this.render(hbs`
    {{#progress-button vertical=true}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').data('horizontal'), undefined);

});

test('it should have an appropriate data-style based on the style attribute', function(assert) {
  this.render(hbs`
    {{#progress-button style="shrink"}}
      template block text
    {{/progress-button}}
  `);

  assert.equal(this.$('.progress-button').data('style'), "shrink");

});

test('it should have data-perspective if style is either rotate or flip', function(assert) {

  this.render(hbs`{{#progress-button  style="rotate-back" }}Submit{{/progress-button}}`);

  assert.equal(this.$('.progress-button').data('perspective'), "");

  this.render(hbs`{{#progress-button  style="flip-open" }}Submit{{/progress-button}}`);

  assert.equal(this.$('.progress-button').data('perspective'), "");

});

