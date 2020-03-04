<script context="module">
  import { seo } from '../stores.js'

  export async function preload() {
    seo.update(state => {
      state.title = "About"
      state.description = "About page description"
      return state
    });
  }
</script>

<script>
  import PageHeader from '../components/PageHeader.svelte'
</script>

<PageHeader dpage="{$seo}" />

<p>This is the 'about' page. There's not much here.</p>
