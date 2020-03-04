<script>
  import { seo } from '../stores.js'
</script>

<!-- BEGIN SEO -->
<title>{$seo.title} | {$seo.titleSuffix}</title>
<meta name="description" content="{$seo.description}" />

<meta property="og:title" content="{$seo.title}" />
<meta property="og:description" content="{$seo.description}" />
<meta property="og:image" content="{$seo.image.src}" />
<meta property="og:image:alt" content="{$seo.image.alt}" />
<meta property="og:image:width" content="{$seo.image.width}"/>
<meta property="og:image:height" content="{$seo.image.height}" />
<meta property="og:site_name" content="{$seo.siteName}" />
<meta property="og:type" content="{$seo.ogType}" />
<meta property="og:locale" content="{$seo.siteLocale}" />

<meta property="twitter:title" content="{$seo.title}" />
<meta property="twitter:description" content="{$seo.description}" />
<meta name="twitter:title" content="{$seo.title}" />
<meta name="twitter:description" content="{$seo.description}" />
<meta property="twitter:image" content="{$seo.image.src}" />
<meta property="twitter:image:alt" content="{$seo.image.alt}" />
<meta name="twitter:card" content="{$seo.twitterCard || 'summary'}" />
<meta name="twitter:site" content="{$seo.twitter}" />
<!-- /END SEO -->
