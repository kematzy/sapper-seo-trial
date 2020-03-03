<script>
  export let dpage
</script>

<h1>{dpage.title || 'missing title'}</h1>
<p><strong>Note!</strong> this <code>PageHeader</code> is not repating when navigating between the pages</p>

<style>
  h1 {
    color: red;
  }
</style>
