<script>
  import SeoTags from '../components/SeoTags.svelte'
  import PageHeader from '../components/PageHeader.svelte'

  let dpage = {
    title: "About",
    description: "About  page description",
    titleSuffix: " | Sapper SEO Trial"
  }
</script>

<svelte:head>
  <title>About | Hardcoded Title</title>
  <SeoTags {dpage} />
</svelte:head>

<PageHeader {dpage} />

<p>This is the 'about' page. There's not much here.</p>
