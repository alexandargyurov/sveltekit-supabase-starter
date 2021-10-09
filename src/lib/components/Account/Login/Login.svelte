<script context="module">
  import * as yup from 'yup';

  import { goto } from '$app/navigation';

  import supabase from '$lib/utils/db';
  import { setCookie } from '$lib/utils/setCookie';

  import { createForm } from 'svelte-forms-lib';

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    }),
    onSubmit: async (values) => {
      let { error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password
      });

      if (!error) {
        const authToken = JSON.parse(localStorage.getItem('supabase.auth.token'));

        setCookie('access_token', authToken.currentSession.access_token, authToken.expiresAt);
        setCookie('refresh_token', authToken.currentSession.refresh_token, authToken.expiresAt);

        window.location.pathname = '/account';
      }
    }
  });
</script>

<h1>Login</h1>

<form on:submit={handleSubmit}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <div class="control has-icons-left">
      <input
        class="input"
        class:is-danger={$errors.email}
        type="email"
        name="email"
        placeholder="Email input"
        on:change={handleChange}
        bind:value={$form.email}
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope" />
      </span>
    </div>
    {#if $errors.email}
      <p class="help is-danger">{$errors.email}</p>
    {/if}
  </div>

  <div class="field">
    <label class="label" for="password">Password</label>
    <div class="control has-icons-left">
      <input
        class="input"
        class:is-danger={$errors.password}
        type="password"
        name="password"
        placeholder="Password"
        on:change={handleChange}
        bind:value={$form.password}
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user" />
      </span>
    </div>
    {#if $errors.password}
      <p class="help is-danger">{$errors.password}</p>
    {/if}
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</form>
