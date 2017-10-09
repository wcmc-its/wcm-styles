# WCM Styles

These styles are built using [Webpack](https://webpack.js.org/). The ready to use styles are
found in the `dist` folder along with a sample `index.html` file as a demo.

The `wcm.css` stylesheet includes [Bootstrap v3.3](http://getbootstrap.com/docs/3.3/)
(without Glyphicons) and `wcm.js` includes jQuery v3 along with the base Bootstrap libraries.

## Building

Install the dependencies with `npm` and then run the `build` script.

```
npm install
npm run build
```

## Developing

Let webpack monitor your changes and rebuild in realtime.

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
