<script>
  import { seo } from '../stores.js'
  import PageHeader from '../components/PageHeader.svelte'

  seo.update(state => {
    state.title = "About"
    state.description = "About page description"
    return state
  })
</script>

<PageHeader dpage="{$seo}" />

<p>This is the 'about' page. There's not much here.</p>
