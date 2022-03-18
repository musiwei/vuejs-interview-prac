<template>
  <label class="block font-medium text-xs text-slate-700 dark:text-slate-300">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot></slot></span>
    <span v-if="required" class="text-rose-500"> *</span>
  </label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { value: "", required: { type: Boolean, default: false } },
});
</script>
