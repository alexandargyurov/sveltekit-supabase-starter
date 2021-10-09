<script context="module">
  import { browser, dev } from '$app/env';

  import Signup from '$lib/components/Account/Signup/Signup.svelte';

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

<Meta pageTitle="Signup" pageDescription="Access your account" />

<div class="content">
  <Signup />
</div>
