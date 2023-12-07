<template>
  <div class="mb-3">
    <label for="recipient-name" class="col-form-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="form-control form-control-sm"
      id="recipient-name"
      @input="dataInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: ''},
    placeholder:{ type: String, default: ''},
    type:{ type: String, default: 'text'},
  },
  data() {
    return {
      dataInput: ''
    }
  }
}
</script>

<style>
</style>