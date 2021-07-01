# 360Giving Design System

This is the component library for 360Giving's design system. 

The included logos and designs are copyright © 360Giving and may not be used without permission of 360Giving.

## Installation 

```shell
npm i
```

## Build

```shell
npm start
```

[Fractal](https://fractal.build/guide/) should serve the library at [localhost:3000](http://localhost:3000/).


## Project Styles

We can build styles specific to a project using the `main.scss` files located in the `project-styles` folder, under the relevant project.
The associated command can be added to `gulpfile.js`.
This allows the addition of project specific overrides and keeps all style code in once place.
There is also a requirement for project specific paths baked into the generated css files.

For example, to build styles for grantnav run:

```bash
npm run sass-grantnav
# or
npx gulp sass-grantnav
```
