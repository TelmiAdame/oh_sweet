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
            class="btn rounded-pill btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalMovimentacaoCaixa"
          >
            {{ buttonAdd }}
          </button>
        </div>
      </div>
      <tabela :dados-tabela="dataTable" @removeItem="removeCashMovement"></tabela>
    </div>
  </div>
  <modal-add-edit @saveForm="addCashMovement"></modal-add-edit>
</template>
<script>
import FullLayout from '../../components/FullLayout/full-layout.vue'
import Tabela from '../../components/Tabela/tabela-padrao.vue'
import ModalAddEdit from './ModalAddEdit.vue'
import api from '../../api/api'

export default {
  components: {
    FullLayout,
    Tabela,
    ModalAddEdit
  },
  mounted() {
    this.getDataTable()
  },
  data() {
    return {
      cardTitle: 'Caixa',
      cardSubtitle: '',
      buttonAdd: 'Adicionar',
      dataTable: null
    }
  },
  methods: {
    async getDataTable() {
      console.log('atualizou')
      this.dataTable = (await api.list('movimentacao_caixa')).reverse()
    },
    async addCashMovement(form) {
      await api.post('movimentacao_caixa', form)
      await this.getDataTable()
    },
    async removeCashMovement(id) {
      await api.remove('movimentacao_caixa', id)
      await this.getDataTable()
    },
    openModal() {
      console.log('openModalAddEdit')
    }
  }
}
</script>

<style scope></style>
