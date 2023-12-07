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
          <button
            type="button"
            class="btn rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#modalAddEdit"
            @click="openModalAdd"
          >
            {{ buttonAdd }}
          </button>
        </div>
      </div>
      <tabela :dados-tabela="dadosTabela"></tabela>
      <modal-add-edit id="modalAddEdit"></modal-add-edit>
    </div>
  </div>
</template>
<script>
import FullLayout from '../../components/FullLayout/full-layout.vue'
import Tabela from '../../components/Tabela/tabela.vue'
import ModalAddEdit from '../../components/Modals/modal-add-edit.vue'
import api from '../../api/api'
export default {
  components: {
    FullLayout,
    Tabela,
    ModalAddEdit,
  },
  mounted() {
    this.obterDadosTabela()
  },
  data() {
    return {
      cardTitle: 'Caixa',
      cardSubtitle: '',
      buttonAdd: 'Adicionar',
      dadosTabela: null
    }
  },
  methods: {
    async obterDadosTabela() {
      this.dadosTabela = (await api.list('movimentacao_caixa')).reverse()
    },
    openModalAdd() {
      console.log('openModalAdd')
    }
  }
}
</script>

<style scope>
</style>
