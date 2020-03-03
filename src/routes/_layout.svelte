<script>
	import Nav from '../components/Nav.svelte';

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

	h3 {
		font-weight: bold;
		color: #777;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>

	<div style="margin-top: 4rem; border-top: 1px solid #ccc; padding: 1rem 0;">
		<h3>About This Example</h3>
		<p>This example explores how to DRY up the whole SEO tags generation on pages.</p>
		<p>
			For some reason, the <code>&lt;SeoTags /&gt;</code> component within the <code>&lt;svelte:head&gt;</code>
			<strong>causes the tag output to repeat on each page visit, causing multiple copies of the output in <code>&lt;head&gt;</code> </strong>.
		</p>
		<p>Inspect HTML output.</p>
	</div>
</main>