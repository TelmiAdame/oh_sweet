<template>
  <div>
    <table class="table table-striped table-hover">
      <thead class="table-head">
        <tr class="table-header">
          <th v-for="(item, key) in listHeader" :key="key" scope="col">{{ item }}</th>
        </tr>
      </thead>
      <tbody v-for="(movimentacao, key) in dadosTabela" :key="key">
        <tr>
          <td>{{ movimentacao.descricao }}</td>
          <td>{{ movimentacao.data }}</td>
          <td>{{ movimentacao.saldo }}</td>
          <td>{{ movimentacao.valor }}</td>
          <td>editar/excluir</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    dadosTabela: { type: Array, default: () => [] }
  },
  mounted() {},
  data() {
    return {
      listHeader: ['Descrição', 'Data', 'Saldo', 'Movimentação', 'Ações']
    }
  }
}
</script>

<style>
</style>