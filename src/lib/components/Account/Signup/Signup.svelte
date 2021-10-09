<script context="module">
  import * as yup from 'yup';

  import { createForm } from 'svelte-forms-lib';

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: '',
      email: '',
      terms: false
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(),
      email: yup.string().email().required(),
      terms: yup.bool().oneOf([true], 'You must accept the terms and conditions')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
</script>

<h1>Signup</h1>

<form on:submit={handleSubmit}>
  <div class="field">
    <label class="label" for="username">Username</label>
    <div class="control has-icons-left">
      <input
        class="input"
        class:is-danger={$errors.email}
        type="text"
        name="username"
        placeholder="Text input"
        on:change={handleChange}
        bind:value={$form.username}
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user" />
      </span>
    </div>
    {#if $errors.username}
      <p class="help is-danger">{$errors.username}</p>
    {/if}
  </div>

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
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        I agree to the <a href="/" class="is-link">terms and conditions</a>
      </label>
    </div>
    {#if $errors.terms}
      <p class="help is-danger">{$errors.terms}</p>
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
