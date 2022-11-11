<script>
import 'a-flexbox/a-flexbox.css';
import { goto } from '$app/navigation';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';
import { loginService } from '../../services/LoginService';
import { tokenStore } from '../../store';

let username = '';
let password = '';
let loading = false;

async function login() {
  loading = true;
  try {
    const response = await loginService({ username, password});
    const { data: { token }} = response;
    tokenStore.set(token);
    goto('/dashboard');
  } catch (err){
    console.log(err);
    Toastify({
        text: 'Hubo un error al traer al iniciar sesión',
        gravity: 'top',
        position: 'right',
        style: {
          background: '#e74c3c',
        }
      }).showToast();
  } finally {
    loading = false;
  }
}

</script>

<main class="full-height full-width a-flex a-center a-align-items-center">
  <article>
    <form on:submit|preventDefault={login}>
      <div class="a-flex a-space-between a-align-items-center">
        <h1>Iniciar sesión</h1>
        <a href="/">
          <i class="bi bi-house"></i>
        </a>
      </div>
      <label for="userName">Nombre usuario:</label>
      <input type="text" id="userName" name="userName" placeholder="Usuario" required bind:value={username}>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" placeholder="***********" bind:value={password}>
      <button type="submit" aria-busy={loading}>Ingresar</button>
    </form>
  </article>
</main>


<style>
  h1 {
    margin-bottom: 0.2rem !important;
  }

  article {
    padding: 2.5rem;
    min-width: 600px;
  }
</style>