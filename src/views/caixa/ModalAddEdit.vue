<template>
  <div class="modal" tabindex="-1" aria-hidden="true" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Adicionar Movimentação</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb-3">
              <input-base
                v-model="form.descricao"
                type="text"
                placeholder="Descrição"
                label="Descrição"
              ></input-base>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <input-currency
                  v-model="form.valor"
                  placeholder="Valor"
                  label="Valor"
                ></input-currency>
              </div>
              <div class="col-md-6">
                <input-base
                  v-model="form.data"
                  type="date"
                  placeholder="Data"
                  label="Data"
                ></input-base>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveForm">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputAll from '../../components/Inputs/index'

export default {
  props: {
  },
  components: {
    ...InputAll
  },
  data() {
    return {
      form: {
        descricao: null,
        valor: null,
        data: null
      }
    }
  },
  methods: {
    saveForm() {
      this.$emit('salveForm', this.form)
    }
  }
}
</script>
