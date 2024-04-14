import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	plugins: [
		Unocss({
			extractors: [
				extractorSvelte()
			]
		}),
		sveltekit()
	],
});
