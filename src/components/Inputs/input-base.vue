<template>
  <div>
    <label for="recipient-name" class="col-form-label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="updateValue"
      :type="type"
      :placeholder="placeholder"
      :class="`form-control form-control-sm focus-ring focus-ring-light` + `${classe}`"
      id="recipient-name"
      :readonly="readonly"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    modelValue: { type: [String, Number, Date], default: null },
    disabled: { type:Boolean, default: false },
    readonly: { type:Boolean, default: false },
    classe: { type: String, default: null },
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
