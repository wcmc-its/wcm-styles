# WCM Styles

The styles here are based on the [Weill Cornell Medicine Brand Guidelines](https://brand.weill.cornell.edu/).

These styles are built using [Webpack](https://webpack.js.org/). The ready to use styles are
found in the `dist` folder along with a sample `index.html` file as a demo. The demo is also
available through [this project's GitHub pages page](https://wcmc-its.github.io/wcm-styles/).

The `wcm.css` stylesheet includes [Bootstrap v4.0](http://getbootstrap.com/docs/4.0/)
(without Glyphicons) and [Font Awesome v4.7](http://fontawesome.io). For Bootstrap v3 see the [v0.3.x branch](../../tree/v0.3.x).

`wcm.js` includes [jQuery v3](https://jquery.com/) and [Popper.js v1](https://popper.js.org/)
along with the base Bootstrap libraries.

## Building

Install the dependencies with `npm` and then run the `build` script.

```
npm install
npm run build
```

## Developing

Let Webpack monitor your changes and rebuild in real time.

```
npm run watch
```

## Serving

If you'd like to use a local copy of these assets with another project you can use
[http-server](https://www.npmjs.com/package/http-server). There is a friendly project script
for this that uses port 8080 by default.

```
npm run serve
```
