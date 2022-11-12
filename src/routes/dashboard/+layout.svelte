<main class="container-fluid a-flex">
  <aside>
    <h3>Bienvenido</h3>
    <nav>
      <ul>
        <li><a href="/dashboard">Inicio</a></li>
        <li><a href="/dashboard/posts">Publicaciones</a></li>
        <li><a href="/dashboard/categories">Categorias</a></li>
        <li><a href="/dashboard/tags">Etiquetas</a></li>
        <li><a href="/dashboard/pages">Páginas</a></li>
        <li><a href="/dashboard/media">Multimedia</a></li>
        <li><a href="/dashboard/comments">Comentarios</a></li>
        <li><a href="/dashboard/users">Usuarios</a></li>
      </ul>
    </nav>
    <button class="contrast outline" on:click={logout}>Cerrar sesión</button>
  </aside>
  <section class="container">
    <slot />
  </section>
</main>

<script>
	import axios from 'axios';
  import 'a-flexbox/a-flexbox.css';
  import { tokenStore } from '../../store';
  import { goto } from '$app/navigation';

  function logout() {
    tokenStore.set('');
    axios.defaults.headers.Authorization = '';
    goto('/');
  }
</script>

<style>
  aside {
    width: 300px;
    border-right: 1px solid lightgray;
    height: 100vh;
  }

  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.25rem !important;
  }
</style>