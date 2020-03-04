<script>
	import Nav from '../components/Nav.svelte';
	import SeoTags from '../components/SeoTags.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h3, h4 {
		font-weight: bold;
		color: #777;
	}
	li {
		margin-bottom: 1rem;
	}
	pre {
		background-color: #f0f0f0;
		border: 1px solid #ddd;
		padding: .5rem 1rem;
	}
</style>

<svelte:head>
	<SeoTags />
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>

	<div style="margin-top: 4rem; border-top: 1px solid #ccc; padding: 1rem 0;">
		<h3>About This Example</h3>

		<p>
			<strong>Please Note!</strong>
			<br>
			This is the solution I came up with, after some advice, and it may be 
			entirely wrong. I'm just learning Sapper/Svelte at the moment, so I'm 100% certain that 
			things could be much improved.
		</p>

		<h4>How does it work?</h4>
		<p>
			It's fairly easy to use and understand by just looking at <a href="https://github.com/kematzy/sapper-seo-trial" title="view the code repository on GitHub">the code for this website</a>.
		</p>
		<p>
			But these are the basic steps:
		</p>

		<ol>
			<li>
				The main part of the solution is the <code>SeoTags.svelte</code> component that generates
				the HTML output tags.
			</li>
			<li>
				The <code>SeoTags.svelte</code> component loads the data from the <code>./stores.js</code> 
				store, which in turn kind of depends upon a <code>./data/settings.json</code> file for all 
				global default values.
			</li>
			<li>
				The <code>SeoTags.svelte</code> component is loaded in the <code>./routes/_layout.svelte</code> 
				and added to a <code>&lt;svelte:head&gt;</code> section.
			</li>
			
			<li>
				To change the SEO output on each page you need to <code>{@html 'import { seo } from "./stores.js"'}</code> and then update the required SEO fields like this:

				<pre>{@html "seo.update(state => {\n  state.title = 'New Title'\n  state.description = 'New description'\n  return state\n})" }</pre>

			</li>

			<li>
				That's basically all you need to do.
			</li>
		</ol>
	</div>
</main>
