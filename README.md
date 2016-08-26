# odometeor


A wrapper for [odometer](http://github.hubspot.com/odometer/) by [HubSpot](http://www.hubspot.com/).

## Installation

```bash
meteor add cleandersonlobo:odometeor
```

## How to use
All of the [themes](http://github.hubspot.com/odometer/api/themes/) can be resized by setting the font-size of the .odometer element.

```js
  var el = document.querySelector('.some-element');
	od = new Odometer({
    el: el,
		value: 87123, // REQUIRED
		format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
		duration: 3000, // Change how long the javascript expects the CSS animation to take
		theme: 'car', // Specify the theme (if you have more than one theme css file on the page)
		animation: 'count' // Count is a simpler animation method which just increments the value
	};
  od.update(555)
  // or
  el.innerHTML = 555
};
```

### Changing value

The value of the odometer can be changed either:

**Using jQuery**

	$('.some-element').html(845);

**Just Javascript**

	document.querySelector('.some-element').innerHTML = 489;

### Get all odometeor

To get all instances of Odometeor, simply run `Odometeor.getInstances()`.

## Features

If you want a feature in the [library](https://github.com/HubSpot/odometer) that is not in this package, please open up an issue.
