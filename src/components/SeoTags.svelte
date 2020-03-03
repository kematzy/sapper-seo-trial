<script>
  export let dpage = {
    title: "Default Page Title",
    titleSuffix: " | Default Title Suffix",
    description: "Default Page Description",
  }
</script>

<!-- BEGIN SEO -->
<title>{dpage.title + dpage.titleSuffix}</title>
<meta name="description" content="{dpage.description}" />

<meta property="og:title" content="{dpage.title}" />
<meta property="og:description" content="{dpage.description}" />

<meta property="twitter:title" content="{dpage.title}" />
<meta property="twitter:description" content="{dpage.description}" />
<!-- /END SEO -->
