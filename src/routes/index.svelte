<script>
  import { goto } from "@sapper/app";
  import Image from "svelte-image";
  import { fadeIn, fadeOut } from "../animate.js";

  function doThing() {
    console.log("doing thing");
    goto("/blog");
  }
</script>

<style>
  h1 {
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
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div in:fadeIn out:fadeOut>
  <h1>Great success!</h1>

  <figure>
    <Image alt="Success Kid" src="successkid.jpg" />
    <figcaption>Have fun with Sapper!</figcaption>
  </figure>

  <p>
    <strong>Try editing this file (src/routes/index.svelte) to test live
      reloading.</strong>
  </p>
  <button on:click={doThing}>Send me elsewhere</button>
</div>
