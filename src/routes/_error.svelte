<script>
	export let status;
	export let error;
  import SeoTags from '../components/SeoTags.svelte'

  let dpage = {
    title: "Error: {status}",
    description: "Error page description",
    titleSuffix: " | Sapper SEO Trial [Error]"
	}
	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
  <title>{status + ' | Hardcoded Title'}</title>
  <SeoTags {dpage} />
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
