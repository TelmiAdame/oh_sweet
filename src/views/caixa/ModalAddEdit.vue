<template>
  <div class="modal" tabindex="-1" aria-hidden="true" id="modalMovimentacaoCaixa">
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
          <pre>{{ form }}</pre>
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
                  :modelValue="form.data"
                  :readonly="false"
                  classe="form-control-plaintext"
                ></input-base>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveForm">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputAll from '../../components/Inputs/index'

export default {
  props: {
    dataEdit: { type: Object, default: () => {} }
  },
  components: {
    ...InputAll
  },
  data() {
    return {
      form: {
        descricao: null,
        valor: null,
        data: new Date().toISOString().split('T')[0],
      }
    }
  },
  mounted() {
    this.form.data = new Date().toISOString().split('T')[0]
  },
  watch: {
    dataEdit() {
      this.initialData()
    }
  },
  methods: {
    saveForm() {
      if (!this.dataEdit?.valor?.id) {
        
        this.$emit('saveForm', this.form)
      } else {
        this.$emit('editForm', this.form)
      }
    },
    initialData() {
      this.form = {
        id:this.dataEdit?.valor?.id,
        descricao: this.dataEdit?.descricao,
        valor: this.dataEdit?.valor,
        // data:
        //   this.dataEdit && this.dataEdit.data
        //     ? new Date().toISOString().split('T')[0]
        //     : null
      }
    }
  }
}
</script>
