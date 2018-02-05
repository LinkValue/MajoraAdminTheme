#MajoraAdminTheme
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLinkValue%2FMajoraAdminTheme.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FLinkValue%2FMajoraAdminTheme?ref=badge_shield)

===

Simple Bootstrap 3 admin theme, helps to provide a clean admin interface.

##Necessary code

The dist folder contains the compiled .css file which is a concatenated and minified version of all the scss files inside src/scss.

##Import in a project

To import this theme in any projet, just install it as a dependencies by running `npm i MajoraAdminTheme -S`.

You can then import the necessary stylesheet located inside `./node_modules/MajoraAdminTheme/dist/css/majora-theme.min.css`

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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLinkValue%2FMajoraAdminTheme.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FLinkValue%2FMajoraAdminTheme?ref=badge_large)