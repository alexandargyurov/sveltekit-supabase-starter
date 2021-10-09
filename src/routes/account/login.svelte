<script context="module">
  import { browser, dev } from '$app/env';

  import Login from '$lib/components/Account/Login/Login.svelte';

  import Meta from '$lib/Meta.svelte';

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
</script>

<Meta pageTitle="Login" pageDescription="Access your account" />

<div class="content">
  <Login />
</div>
