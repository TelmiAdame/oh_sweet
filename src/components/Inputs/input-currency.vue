<template>
  <div>
    <label for="recipient-name" class="col-form-label">{{ label }}</label>
    <div class="input-group input-group-sm">
      <span class="input-group-text">$</span>
      <input
        :value="modelValue"
        @input="updateValue"
        :type="type"
        :placeholder="placeholder"
        class="form-control form-control-sm focus-ring focus-ring-light"
        id="recipient-name"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    modelValue: { type: [String, Number], default: null }
  },
  data() {
    return {}
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style></style>
