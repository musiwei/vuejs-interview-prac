<template>
  <button
    :type="type"
    :disabled="loading"
    class="
      inline-flex
      items-center
      px-4
      py-2
      bg-slate-50
      border border-slate-300
      rounded-md
      font-semibold
      text-xs text-slate-700
      uppercase
      tracking-widest
      shadow-sm
      hover:text-slate-500
      focus:outline-none focus:border-teal-300 focus:ring focus:ring-teal-200
      active:text-slate-800 active:bg-slate-50
      disabled:opacity-25
      dark:border-slate-500 dark:text-slate-200 dark:bg-slate-700
      dark:hover:text-bg-300 dark:hover:bg-slate-600
      dark:active:text-slate-400 dark:active:bg-slate-500
      transition
    "
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
    },
  }
})
</script>
