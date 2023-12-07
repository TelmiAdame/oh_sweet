<template>
  <div>
    <table class="table table-striped table-hover table-borderless">
      <thead class="table-head table-dark">
        <tr class="table-header">
          <th
            v-for="(item, key) in listHeader"
            :key="key"
            scope="col"
            class=""
            style="background-color: #494367"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody v-for="(movimentacao, key) in dadosTabela" :key="key">
        <tr>
          <td>{{ movimentacao.descricao }}</td>
          <td>{{ movimentacao.data }}</td>
          <td>{{ movimentacao.saldo }}</td>
          <td>{{ movimentacao.valor }}</td>
          <td>
            <span role="button" class="me-2"
              ><icon icon="mdi:edit" :inline="true" :horizontalFlip="true" color="green"
            /></span>
            <span role="button"
              ><icon icon="mdi:delete" :inline="true" :horizontalFlip="true" color="red"
            /></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  props: {
    dadosTabela: { type: Array, default: () => [] }
  },
  mounted() {},
  data() {
    return {
      listHeader: ['Descrição', 'Data/Hora', 'Saldo', 'Movimentação', 'Ações']
    }
  }
}
</script>

<style>
</style>