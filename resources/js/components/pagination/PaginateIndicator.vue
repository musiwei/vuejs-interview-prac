<template>
  Showing {{ records.from }} - {{ records.to }} of
  <span class="text-slate-800 font-semibold dark:text-slate-100">{{
    records.total
  }}</span>
  records. Page
  <span class="text-slate-800 font-semibold dark:text-slate-100">{{
    records.current_page
  }}</span>
  of {{ records.last_page }}.
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    records: {
      Object
    },
  },

  setup(props) {
  },
  
  methods: {},
});
</script>