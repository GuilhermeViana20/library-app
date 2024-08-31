<template>
  <div class="container form-signin w-100 m-auto">
    <form class="text-center" @submit.prevent="login">
      <img class="mb-4" height="57" src="@/assets/logo.png" alt="" />
      <h1 class="h3 mb-3 fw-normal">Acesso</h1>

      <div class="form-floating">
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Seu E-mail"
        />
        <label for="floatingInput">Seu E-mail</label>
      </div>
      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Sua Senha"
        />
        <label for="floatingPassword">Sua Senha</label>
      </div>

      <div class="form-check text-start my-3">
        <input
          class="form-check-input"
          type="checkbox"
          value="remember-me"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Lembre de mim
        </label>
      </div>
      <button class="btn btn-primary w-100 py-2" type="submit">Acessar</button>

      <p class="mt-5 mb-3 text-body-secondary">
        Não possui conta? <router-link to="/register">Cadastre-se</router-link>
      </p>
      
      <p class="mt-5 mb-3 text-body-secondary">
        Copyright © 2024 Biblioteca Virtual
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/login', {
          email: this.email,
          password: this.password,
        });

        this.$toast.success("Usuário logado com sucesso!");

        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('token_type', response.data.token_type);

        this.$router.push({ name: "Início" });
      } catch (error) {
        this.$toast.error(error.response.data.message);
        console.error("Erro ao logar:", error.response?.data?.message || "Erro desconhecido");
      }
    },
  },
};
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-control {
  background-color: #212529 !important;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>