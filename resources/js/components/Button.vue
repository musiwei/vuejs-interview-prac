<template>
  <button
    :type="type"
    :disabled="loading"
    class="
      inline-flex
      items-center
      px-4
      py-2
      bg-slate-600
      border border-transparent
      rounded-md
      font-semibold
      text-xs text-white
      uppercase
      tracking-widest
      hover:bg-slate-400
      active:bg-slate-900
      focus:outline-none focus:border-slate-900 focus:ring focus:ring-slate-300
      disabled:opacity-25
      dark:bg-slate-100 dark:text-slate-700
      dark:hover:bg-slate-200 dark:hover:text-slate-600
      dark:active:bg-slate-300 dark:active:text-slate-500
      transition
    "
  >
    <div v-if="loading" class="mr-2">
      <siwei-spinner></siwei-spinner>
    </div>
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
      default: 'submit',
    },
  }
})
</script>
