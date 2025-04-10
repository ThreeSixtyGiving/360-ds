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

## Generating full design system CSS

To generate the CSS for the entire design system run:

```bash
npm run compile-sass
```

This will output the generated CSS file to `build/360-ds/css/main.css`.

Alternatively, if you have already run `npm start`, the compiled CSS will be located at `public/css/main.css`. 


## Project Styles

### Generating styles

The following describes how to generate the compiled CSS.
You can compile the CSS for any project in `src/project-styles/` by passing the project/folder name to the `compile-css` command using the `--project` parameter.
This will output the file to a folder at the root of this project. 

Alternatively, you can pass a path to the `--path` parameter which will output the compiled CSS file to an appropriate location.

The following example will generate the CSS based on the **Grantnav** project and output it into the given path. This is the correct path when 360-ds is loaded as a submodule at the root of the Grantnav codebase 

```bash
npm run compile-sass -- --project 'grantnav' --path '../grantnav/frontend/static/css/'
```
