<template>
  <full-layout></full-layout>
  <div class="card m-3 d-flex align-items-stretch">
    <div class="card-body">
      <div class="col col-sm-12">
        <h5 class="card-title">{{ cardTitle }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ balance }}</h6>
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
            @click="openModal"
          >
            {{ buttonAdd }}
          </button>
        </div>
      </div>
      <tabela
        :dados-tabela="dataTable"
        @removeItem="removeCashMovement"
        @editItem="openModal"
      ></tabela>
    </div>
  </div>
  <modal-add-edit @saveForm="addCashMovement"  @editForm="editCashMovement" :dataEdit="dataEdit" ></modal-add-edit>
</template>
<script>
import FullLayout from '../../components/FullLayout/full-layout.vue'
import Tabela from './TabelaCaixa.vue'
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
      balance: null,
      buttonAdd: 'Adicionar',
      dataTable: null,
      dataEdit: null,
      myModal:null,
    }
  },
  methods: {
    async getDataTable() {
      this.dataTable = await api.list('movimentacao_caixa')
      this.balance = this.dataTable.length ? this.dataTable[0].saldo : null
    },
    async addCashMovement(form) {
      this.closeModal()
      console.log('addCashMovement', form)
      let formatForm = {
        ...form,
        saldo: this.dataTable[0]?.saldo + parseFloat(form.valor)
      }

      await api.post('movimentacao_caixa', formatForm)
      await this.getDataTable()
    },
    async editSaldo(form) {
      let formatForm = {
        ...form,
        saldo: this.dataTable[0]?.saldo
      }

      await api.update('movimentacao_caixa', formatForm)
      await this.getDataTable()
    },
    editCashMovement(form) {
      this.closeModal()
      this.removeCashMovement(form,'edit')
      this.addCashMovement(form)
    },
    async removeCashMovement(form, actionEdit) {
      this.dataTable[0].saldo = this.dataTable[0].saldo - (parseFloat(form.valor))
      console.log('this.dataTable[0].saldo', this.dataTable[0].saldo)
      
      await api.remove('movimentacao_caixa', form.id)
      this.editSaldo(form)
      if(!actionEdit) await this.getDataTable()
    },
    openModal(dataMovimentacao) {
      const myModal = new bootstrap.Modal(document.getElementById('modalMovimentacaoCaixa'))
      myModal.show()
      if(dataMovimentacao) this.dataEdit = dataMovimentacao
    },
    closeModal(){
      const myModal = new bootstrap.Modal(document.getElementById('modalMovimentacaoCaixa'))
      myModal.hide()
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {backdrop.remove();}
    }
  }
}
</script>

