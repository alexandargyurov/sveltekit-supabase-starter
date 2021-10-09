<script lang="ts">
  import { page } from '$app/stores';

  export let pageTitle: string;
  export let pageDescription: string;

  export let openGraphImage: {
    url: string;
    alt: string;
    width: string;
    height: string;
  } = undefined;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta property="og:title" content="{pageTitle} - My Site" />

  <meta property="og:description" content={pageDescription} />
  <meta name="description" content={pageDescription} />

  {#if openGraphImage}
    <meta property="og:image" content={openGraphImage.url} />
    <meta property="og:image:alt" content={openGraphImage.alt} />
    <meta property="og:image:width" content={openGraphImage.width} />
    <meta property="og:image:height" content={openGraphImage.height} />
  {/if}

  <meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta property="og:url" content={`http://${$page.host} + ${$page.path}`} />
  <link rel="canonical" href={`http://${$page.host} + ${$page.path}`} />
</svelte:head>
