<main class="container">
  <nav>
    <ul>
      <li>
        <a href="/">
          <strong>Mi BLog</strong>
        </a>
      </li>
    </ul>
    <MainNavLinks />
  </nav>
  <section class="full-width full-height a-flex a-center a-align-items-center a-flex-direction-column">
    <h1>Bienvenido a mi blog</h1>
    <a href="/login" role="button">Iniciar Sesión</a>
  </section>
</main>


<script lang="ts">
  import 'a-flexbox/a-flexbox.css';
  import MainNavLinks from "../components/MainNavLinks.svelte";
</script>

<style>
  .full-height {
    height: calc(100vh - 100px);
  }
</style>
