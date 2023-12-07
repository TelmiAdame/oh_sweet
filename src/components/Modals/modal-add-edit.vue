<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="!dataForm" class="modal-title">Adicionar Movimentação</h5>
          <h5 v-else class="modal-title">Editar Movimentação</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb-3">
              <input-text placeholder="Descrição" label="Descrição"></input-text>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <input-text placeholder="Valor" label="Valor"></input-text>
              </div>
              <div class="col-md-6">
                <input-text placeholder="Data" label="Data"></input-text>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button> -->
          <button type="button" class="btn btn-primary" @click="saveForm">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '../Inputs/input-text.vue'
export default {
  props:{
    dataForm: { type: Object, default: () => {}}
  },
  components: {
    InputText
  },
  mounted() {},
  data() {
    return {}
  },
  methods: {
    saveForm(){
      console.log('saveForm')
      
    }
  }
}
</script>

<style>
</style>