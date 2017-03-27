import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';

const dev = !!process.env.DEV;

export default {
	entry: 'src/main.js',
	dest: 'public/bundle.js',
	format: 'iife',
	plugins: [
		svelte({
			css: dev
		}),
		!dev && uglify()
	]
};