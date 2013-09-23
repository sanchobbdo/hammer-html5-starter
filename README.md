![image](https://dl.dropboxusercontent.com/u/2402696/external/logo-sancho.png)

# Front-end Starter - Hammer
This is a template to kickstart an HTML5 project using [Hammer for Mac](http://hammerformac.com/). A starting point with a scalable, maintainable CSS architecture for Sancho BBDO projects.

- Autor: Adrian Quevedo [adrianquevedo.com](http://adrianquevedo.com)
- Twitter: [@adrianengine](http://twitter.com/adrianengine)

## Features
- [Hammer for Mac](http://hammerformac.com/) Template.
- [SMACSS](http://smacss.com/) modules with [BEM](http://bem.info/method/) syntax for modifiers & subcomponents.
- [Bourbon Neat](http://neat.bourbon.io/) as a grid framework.
- [Normalize.css](http://necolas.github.com/normalize.css/).
- [Placeholder.js](http://mths.be/placeholder).
- [Parsley.js](http://parsleyjs.org/).
- Standalone IE8 & 9 stylesheets.
- JS Hint and CSS lint configuration files included.

## Getting started

### [Download the Hammer.template file](hammer-html5-starter.hammer)

## Modules
With the exception of [base element styles](/assets/css/base) & [global state classes](/assets/css/_state.scss), everything is a standalone, reusable module that doesn't change regardless of the context it appears in.

Grid classes and "unique" things like your site header & footer aren't special. IDs aren't welcome. Everything - **everything** - is a module.

### Simple module
Here's what a simple module, might look like:
```SCSS
.simple-widget {
	color: goldenrod;
}
```

### Complex module
Here's a slightly more complex module:
```SCSS
// The canonical fancy-widget class
.fancy-widget {
	color: fuchsia;
}

// A modified fancy-widget
.fancy-widget--important {
	@extend .fancy-widget;
	font-weight: bold;
}

// Hey look, module-specific states are just modifiers too!
// The "is" keyword indicates that this is a state class.
.fancy-widget--is-loading {
	background: url(spinner.gif);
}

// It's up to you whether you add a state class on top of the module class...
// <b class="fancy-widget fancy-widget--is-loading">
// or @extend the original so you can replace it...
// <b class="fancy-widget--is-loading">
//
// We usually end up with a combination of both.

// Sometimes it's easier to update a  single state attribute with JS instead of
// faffing about with adding & removing state classes. That's ok.
.fancy-widget[data-state=is-loading] {
	background: url(spinner.gif);
}

// A subcomponent (some component that must be a child of .fancy-widget)
// Generally subcomponent classes exist purely to position an element inside the module.
// Whatever is inside a subcomponent can usually be extracted out into its own module.
.fancy-widget__close-button {
	margin-left: 20px;
}
```

## Media queries
Breakpoint-specific styles are kept right inside their module via Neat's [`new-breakpoint`](http://neat.bourbon.io/docs/#new-breakpoint) mixin.
```SCSS
.my-module {
	color: floralwhite;

	@include media($tablet) {
		color: plum;
	}

	@include media($desktop) {
		color: burlywood;
	}
}
```

## Internet Explorer
Like breakpoint-specific styles, IE-specific styles are kept with the selector they belong to, but are only output in a seperate `app-ie8.css` (or 9) stylesheet that is included with conditional comments ([hat tip](http://jakearchibald.github.com/sass-ie/)).

```SCSS
.my-module {
	color: olive;

	@if $lt-ie9 {
		position: relative;
	}

	@if $ie8 {
		color: lime;
	}

	@if $ie9 {
		color: cadetblue;
	}
}
```

## Further reading
Ideas borrowed from many places, including:
- [SMACSS](http://smacss.com/) by Jonathan Snook
- [Clean out your Sass junk drawer](http://gist.io/4436524) by Dale Sand
- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by Nicolas Gallagher
- [MindBEMding - getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by Harry Roberts
- [IE-friendly mobile-first CSS with Sass 3.2](http://jakearchibald.github.com/sass-ie/) by Jake Archibald
- [How to Scale and Maintain Legacy CSS with Sass and SMACSS](http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/) by Ben Smithett.

## License
The MIT License (MIT)

Copyright (c) 2013 Sancho BBDO

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
