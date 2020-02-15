# React Webpack boilerplate

## Set up

1. `cd` into the project root
2. run `npm install`
3. run `npm run start`

## Folder structure

- `dist` - Contains any auto-generated / distribution code
- `src` - Contains any source code
  - `assets` - Contains any images
  - `components` - Contains any component code
    - `ExampleComponent` - Contains any component js and scss
  - `app.js` - app entry point
  - `index.html` - app html template
 
## Build tools
 
The project uses Webpack for its build tools, which can be configured in `webpack.config.js`.
 
The project is configured to include the following:

- Babel support
- SASS support
- File loader (enables assets, e.g. imgs and svgs, to be used)
- Local server

The project has two npm scripts:

1. `start` - opens a local server and loads the app, watching for any changes
2. `build` - builds a version of app into the `dist` folder
