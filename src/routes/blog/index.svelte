<script context="module">
  import { seo } from '../../stores.js'

  export async function preload({ params, query }) {
    await seo.update(state => {
      state.title = "Blog"
      state.description = "Blog page description"
      return state
    });
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>


<script>
  import PageHeader from '../../components/PageHeader.svelte'
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<PageHeader dpage="{$seo}" />

<h2>Recent posts</h2>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
  {/each}
</ul>
