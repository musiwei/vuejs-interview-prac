<template>
  <div class="backdrop-blur fixed right-0 border-t-[1px] border-slate-200 w-[32rem] shadow-md transition-all ease-in-out bg-white/50 dark:border-slate-600 dark:bg-slate-800/50 " ref="self" >
    <div class="relative h-[calc(100vh_-_6rem)]">
    <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  props: {
    show: {
      Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const self = ref(null);

    onClickOutside(self, (event) => {
      emit("onClickOutside");
    });

    return { self };
  },
});
</script>