<template>
  <div class="container form-signin w-100 m-auto">
    <form class="text-center">
			<img
				class="mb-4"
				height="57"
				src="@/assets/logo.png"
				alt=""
			/>
      <h1 class="h3 mb-3 fw-normal">Cadastro</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Seu Nome"
        />
        <label for="floatingInput">Seu Nome</label>
      </div>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Seu E-mail"
        />
        <label for="floatingInput">Seu E-mail</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Sua Senha"
        />
        <label for="floatingPassword">Sua Senha</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Cadastrar</button>

      <p class="mt-5 mb-3 text-body-secondary">
        Já possui conta? <router-link to="/login">Entrar</router-link>
      </p>

      <p class="mt-5 mb-3 text-body-secondary">Copyright © 2024 Biblioteca Virtual</p>
    </form>
  </div>
</template>

<script>
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}

.form-control {
	background-color: #212529 !important;
}

.form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>