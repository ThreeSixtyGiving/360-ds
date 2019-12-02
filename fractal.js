'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const nunj = require('@frctl/nunjucks')({})

// Set engine to nunjucks
fractal.components.engine(nunj);
fractal.components.set("ext", ".njk");

/* Set the title of the project */
fractal.set('project.title', '360Giving Design System - Components');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

// Set Fractal's assets path
fractal.web.set('static.path', __dirname + '/public');

fractal.web.set('builder.dest', __dirname + '/build');

fractal.components.set('default.status', 'wip');

const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: "navy"
});

fractal.web.theme(myCustomisedTheme);