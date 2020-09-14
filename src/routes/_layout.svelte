<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  let date = new Date();
  let year = date.getFullYear();
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    text-align: center;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<footer>Copyright {year}</footer>
