<template>
  <full-layout></full-layout>
  <div class="card m-3 d-flex align-items-stretch">
    <div class="card-body">
    <div class="col col-sm-12">
        <h5 class="card-title">{{ cardTitle }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardSubtitle }}</h6>
    </div>
    <div class="col col-sm-6 offset-md-6 mb-3">
        <div class="input-group">
          <input
            class="form-control form-control-sm me-2 rounded-pill"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button class="rounded-pill">
            {{ buttonSearch }}
          </button>
        </div>
      </div>
      <tabela
        :dados-tabela="dadosTabela"
      ></tabela>
    </div>
  </div>
</template>
<script>
import FullLayout from '../../components/FullLayout/full-layout.vue'
import Tabela from '../../components/Tabela/tabela.vue'
import api from '../../api/api'
export default {
  components: {
    FullLayout, 
    Tabela
  },
  mounted() {
    this.obterDadosTabela()
  },
  data() {
    return {
      cardTitle: 'Caixa',
      cardSubtitle: '',
      buttonSearch: 'Buscar',
      dadosTabela: null,
    }
  },
  methods: {
    async obterDadosTabela(){
      this.dadosTabela = (await api.list('movimentacao_caixa')).reverse()
    }
  }
}
</script>

<style scope>

</style>
