<script lang="ts">
  import { browser, dev } from '$app/env';
  import { session } from '$app/stores';

  import Meta from '$lib/Meta.svelte';
  import Login from '$lib/components/Account/Login/Login.svelte';

  import './account.scss';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  const currentUser = $session.user;
</script>

<Meta pageTitle="Account" pageDescription="Access your account" />

<div class="content">
  {#if !currentUser}
    <Login />
  {:else}
    <h2>My account</h2>
  {/if}
</div>
