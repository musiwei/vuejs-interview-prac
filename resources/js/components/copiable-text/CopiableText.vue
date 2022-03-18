<template>
  <div>
    <span
      class="relative cursor-pointer"
      @click.prevent.stop="copy(text, $event)"
      @mouseover="showInstruction = true"
      @mouseleave="showInstruction = false"
    >
      <slot></slot>
      <span v-if="showInstruction" class="absolute top-0 inline-flex -right-16">
        <svg-ctrl class="self-center w-6 h-6" />
        +
        <svg-mouse-left class="self-center w-5 h-5"
      /></span>
    </span>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    text: {
      Text
    }
  },
  setup() {
    const showInstruction = ref(false)

    return {
      showInstruction
    }
  },
  methods: {
    async copy(mytext, e) {
      if (e.ctrlKey) {
        try {
          await navigator.clipboard.writeText(mytext);
          this.$notify({ group: "info", title: "Copied to clipboard:", text: mytext }, 2000)
        } catch ($e) {
          this.$notify({ group: "error", title: "Oops", text: 'Unable to copy' }, 2000)
        }
      }
    }
  }
})
</script>
