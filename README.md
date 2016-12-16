#MajoraAdminTheme
===

Simple Bootstrap 4 admin theme, helps to provide a clean admin interface.

##Necessary code

The dist folder contains the compiled .css file which is a concatenated and minified version of all the scss files inside src/scss.

##Basic components

A lot of predefined components are available.

You can see all of them by launching the `index.html` file.

Each one of the components is inside a comment block signaling the start and end of the necessary code for that component.


##Edit the styles

To edit any of the styles, update the sass files inside the scss folder.

To generate a new version of the dist css, run:
`npm run build`

##Edit the demo

To update the demo file or add new components, you can work with npm scritps and browser sync to facilitate de developement.

Run `npm run watch` to start watching files modification and compile on change, as well as live reloading your browser.
