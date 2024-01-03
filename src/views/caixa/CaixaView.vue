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
            @click="openModal"
            data-bs-toggle="modal" 
            data-bs-target="#myModal"
          >
            {{ buttonAdd }}
          </button>
        </div>
      </div>
      <tabela :dados-tabela="dataTable"></tabela>
    </div>
  </div>
  <modal-add-edit :is-visible="showModal" @close="closeModal"></modal-add-edit>
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
    ModalAddEdit,
  },
  mounted() {
    this.getDataTable()
  },
  data() {
    return {
      cardTitle: 'Caixa',
      cardSubtitle: '',
      buttonAdd: 'Adicionar',
      dataTable: null,
      showModal: false,
    }
  },
  methods: {
    async getDataTable() {
      this.dataTable = (await api.list('movimentacao_caixa')).reverse()
    },
    // async addCashMovement(form) {
    //   await api.post('movimentacao_caixa', form)
    // },
    openModal() {
      console.log('openModalAddEdit', this.showModal)
      this.showModal = true
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scope></style>
