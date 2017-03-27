// this is quick and dirty... real apps generally need something
// more sophisticated. More info:
// https://github.com/sveltejs/svelte/issues/409
require( 'svelte/ssr/register' );
const fs = require( 'fs' );
const App = require( '../src/App.html' );

const { css } = App.renderCss();

fs.writeFileSync( 'public/main.css', css );