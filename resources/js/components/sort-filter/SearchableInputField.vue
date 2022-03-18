<template>
  <div
    class="relative z-0 flex items-center w-full h-8 overflow-hidden bg-white border rounded-lg border-slate-300 focus-within:shadow-md focus-within:border-teal-500 focus-within:ring focus-within:ring-teal-500 focus-within:ring-opacity-50 dark:bg-slate-600 dark:text-slate-50 dark:shadow-slate-800 dark:border-slate-500"
  >
    <div class="grid w-10 h-full text-gray-300 place-items-center">
      <svg-filter class="w-4 h-4"> </svg-filter>
    </div>
    <input
      v-model="value"
      ref="input"
      @keydown.esc="onClear"
      class="w-full h-full pr-2 text-xs bg-white outline-none peer placeholder:text-xs text-slate-700 dark:text-slate-50 dark:bg-slate-600"
    />
    <svg-cross
      v-if="value"
      @click="onClear"
      class="self-center w-4 h-4 mr-1 transition opacity-100 cursor-pointer hover:opacity-70"
    >
    </svg-cross>
    <svg-key-esc
      v-if="value"
      @click="onClear"
      class="self-center w-10 h-10 mr-2 transition opacity-100 cursor-pointer hover:opacity-70"
    >
    </svg-key-esc>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  emits: ['term-searched', 'term-reset'],

  props: {
    name: {
      required: true,
      String
    },
  },

  setup(props, { emit }) {
    const value = ref('')

    watch(value, (currentValue, oldValue) => {
      if (currentValue != oldValue) {
        emit('term-searched', props.name, value.value)
      }
    });

    return {
      value
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    },

    onClear(e) {
      this.value = ''
      this.$emit('term-reset', this.value)
    }
  }
})
</script>
