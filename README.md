# ember-progress-buttons

Better User experience with asynchronous actions using Buttons with stylish progress indicators.
This can be used as an aesthetic alternative to *ember-async-button*

Based on the stylish progress button styles by Codrops
[Article](https://tympanus.net/codrops/2013/12/12/progress-button-styles/)

## Demo
[Demo](http://gleaming-observation.surge.sh)

## Installation
```shell
ember install ember-progress-buttons
```

## Usage

```hbs
{{#progress-button action=(action 'promiseAction') style="shrink"}}Submit{{/progress-button}}
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
