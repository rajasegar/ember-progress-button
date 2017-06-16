# ember-progress-buttons

Better User experience with asynchronous actions using Buttons with stylish progress indicators.
This can be used as an aesthetic alternative to *ember-async-button*

The underlying thing which drives the component click action is a Promise just like your ember-async-button,
but it will show you a progress indicator until the promise object is fulfilled, resolved or rejected.

Hence here you need to specify different texts for different promise states but it will show indications
through progress, success and error animations for pending, resolved and rejected states respectively.

Based on the stylish progress button styles by Codrops
[Article](https://tympanus.net/codrops/2013/12/12/progress-button-styles/)

## Demo
[Demo](http://gleaming-observation.surge.sh)

## Installation
```shell
ember install ember-progress-button
```

## Usage

```hbs
{{#progress-button action=(action 'promiseAction') style="shrink"}}Submit{{/progress-button}}
```

## Properties
Ember progress buttons take only two properties:
- action => for the action performed when you click the button
- style => the type of progress bar you want on the button

## Styles
Ember progress buttons come with about 18 different styles for progress indications.
Just give any one of the following values for the style attribute of the component.
- fill (default)
- fill with vertical=true
- shrink
- shrink with vertical=true
- rotate-angle-bottom
- rotate-angle-top
- rotate-angle-left
- rotate-angle-right
- rotate-side-down
- rotate-side-up
- rotate-side-left
- rotate-side-right
- rotate-back
- flip-open
- slide-down
- move-up
- top-line
- lateral-lines with vertical=true

Some of the above styles may require the *vertical* attribute set to true such as *fill*, *shrink* and *lateral-lines*.

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


## Credits
* [Codrops](https://tympanus.net/codrops)
* [Mary Lou](https://github.com/crnacura)
