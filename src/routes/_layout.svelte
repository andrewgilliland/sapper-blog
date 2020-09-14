<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  let date = new Date();
  let year = date.getFullYear();
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    box-sizing: border-box;
  }

  footer {
    border-top: 1px solid #e1e1e1;
    padding: 1rem;
    text-align: center;
  }

  .site-layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .container {
    max-width: 940px;
    margin: 0 auto;
  }
</style>

<div class="site-layout">
  <Nav {segment} />

  <main>
    <div class="container">
      <slot />
    </div>
  </main>

  <footer>Copyright {year}</footer>
</div>
