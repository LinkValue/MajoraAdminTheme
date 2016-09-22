#MajoraAdminTheme
===

Simple Bootstrap 3 admin theme, helps to provide a clean admin interface.

##Necessary code

All the code necessary for the theme is located inside the lib folder for external dependencies, inside the dist folder for the compiled css and inside the js folder for any related JavaScript functions.

##Basic components

A lot of predefined components are availables.

You can see all of them by launching the `index.html` file.

Each one of the components is inside a comment block signaling the start and end of the necessary code for that component.


##Edit the styles

To edit any of the styles, update the sass files inside the scss folder.

To generate a new version of the dist css, run:
`gulp sass`

##Edit the demo

To update the demo file or add new components, you can work with gulp and browser sync to facilitate de developement.

Run `gulp` to start watching files modification and compile on change, as well as live reloading your browser.
