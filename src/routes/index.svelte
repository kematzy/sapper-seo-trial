<style>
  figure {
    text-align: center;
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1rem 1rem 3rem 0;
  }
</style>

<script context="module">
  import { seo } from '../stores.js'

  export async function preload() {
    await seo.update(state => {
      state.title = "Sapper SEO Trial"
      state.description = "Home page description"
      return state
    });
  }
</script>

<script>
  import PageHeader from '../components/PageHeader.svelte'
</script>

<PageHeader dpage="{$seo}" />

<p>DRY-ing up SEO tags generation in Sapper / Svelte apps</p>

<figure>
  <img alt='Borat' src='great-success.png'>
  <figcaption>IT WORKS SOMEHOW!</figcaption>
</figure>
