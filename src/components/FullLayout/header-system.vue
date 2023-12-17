<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary px-3">
      <img
        src="../../assets/logo_oh_sweet.png"
        alt="logo_oh_sweet"
        width="45"
        class="d-inline-block align-text-top me-5"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <!-- TODO  criar lista de link para nave -->
        <ul class="navbar-nav">
          <li>
            <a class="nav-item nav-link active text-light"  @click="openViewHome">Home</a>
          </li>
          <a class="nav-item nav-link text-light" @click="openView">Caixa</a>
          <a class="nav-link disabled" aria-disabled="true">Venda</a>
          <a class="nav-link disabled" aria-disabled="true">Pedido</a>
          <a class="nav-link disabled" aria-disabled="true">Estoque</a>
        </ul>
      </div>
      <div>
        <form class="d-flex" role="search">
          <span class="mt-1 mx-2"><icon 
            icon="bi:search"
            :inline="true"
            :horizontalFlip="true"
            color="#ffff"
            /></span>
          <input
            class="form-control form-control-sm me-2 rounded-pill"
            type="search"
            placeholder=""
            aria-label="Buscar"
          />
        </form>
      </div>
    </nav>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  mounted(){},
  data() {
    return {
      
    }
  },
  methods: {
    openView() {
      this.$router.push({ name: "caixa" });
    },
    openViewHome() {
       this.$router.push({ name: "home" });
    }
  }
}
</script>
