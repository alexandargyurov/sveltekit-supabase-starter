<script lang="ts">
  import '../app.scss';
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <!-- <link rel="manifest" href="/my.webmanifest" /> -->

  <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
  <meta name="theme-color" content="#FFF" media="(prefers-color-scheme: light)" />
</svelte:head>

<header>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- navbar items, navbar burger... -->
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
      </a>

      <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/"> About </a>
            <a class="navbar-item" href="/"> Jobs </a>
            <a class="navbar-item" href="/"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" href="/"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/account?signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/account?login"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<slot />
