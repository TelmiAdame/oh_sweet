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
      <div>
        <table class="table table-striped table-hover">
          <thead class="table-primary">
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
             
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import FullLayout from '../../components/FullLayout/full-layout.vue'
export default {
  components: {
    FullLayout
  },
  mounted() {},
  data() {
    return {
      cardTitle: 'Caixa',
      cardSubtitle: '',
      buttonSearch: 'Buscar'
    }
  }
}
</script>

<style>
</style>
