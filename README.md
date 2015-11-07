# Angular blog app

In order to learn Angular, I've created a blog app following some posts about good practices of the framework.

## Posts

- [Sane, scalable Angular apps are tricky, but not impossible. Lessons learned from PayPal Checkout.](https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef#.sgpclfe2b)
- [ng-best-practices](https://www.outlearn.com/learn/vkarpov15/ng-best-practices)
- [Refactoring Angular Apps to Component Style](http://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html)

## Directives approach

The approach I've chosen to use has 3 types of directives:

- _pages_: `E` directives with isolated scope that holds a entire page, used on `routes.js` (see `page` directive and the `routes.js` file)
- _components_: `E` directives with isolated scope, work like React components. Every external data must be passed as attributes (see `post` directive)
- _helpers_: `A` directives with "normal" scope, used for helpers and concerns (see `time` directive)

## API

To the API I've used [matheusazzi/blog-fake-api](https://github.com/matheusazzi/blog-fake-api), you must have it running together with this project.

## Run the project

First, install the dependencies:

```sh
  $ npm install && bower install
```

To run the project, use `gulp serve`.

## Gulp tasks

- `gulp`: Show the list of tasks;
- `gulp serve`: Open a server for the project on the browser and watch changes on files;
- `gulp watch`: Build the project and watch for changes of HTML, JS and CSS files; 
- `gulp build`: Build the project;
- `gulp test`: Run all the tests;
- `gulp lint`: Lint the code.

## License

### The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
