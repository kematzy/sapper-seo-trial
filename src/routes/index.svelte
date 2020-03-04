<style>
  h2, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 4em;
    }
  }
</style>

<script>
  import { seo } from '../stores.js'
  import PageHeader from '../components/PageHeader.svelte'

  seo.update(state => {
    state.title = "Sapper SEO Trial"
    state.description = "Home page description"
    return state
  })
</script>

<PageHeader dpage="{$seo}" />

<h2>Sapper SEO stores version</h2>

<figure>
  <img alt='Borat' src='great-success.png'>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
