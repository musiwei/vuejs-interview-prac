<template>
  <div class="flex content-center">
    <div v-if="paginate.showFirstPageBtn" @click="onLoad(records.first_page_url)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white cursor-pointer bg-slate-500 first:rounded-l last:rounded-r hover:bg-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor"/>
        <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor"/>
        </svg>
    </div>
    <div v-if="paginate.showPrevPageBtn" @click="onLoad(records.prev_page_url)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white cursor-pointer bg-slate-500 first:rounded-l last:rounded-r hover:bg-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="currentColor"/>
        </svg>
        Prev
    </div>
    <div v-if="paginate.showNextPageBtn" @click="onLoad(records.next_page_url)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border-0 border-l cursor-pointer bg-slate-500 first:rounded-l last:rounded-r border-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        Next
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"/>
        </svg>
    </div>
    <div v-if="paginate.showLastPageBtn" @click="onLoad(records.last_page_url)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white cursor-pointer bg-slate-500 first:rounded-l last:rounded-r hover:bg-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z" fill="currentColor"/>
        <path d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z" fill="currentColor"/>
        </svg>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  emits: ['pagination-clicked'],
  props: {
    records: {
      Object
    },
  },

  setup(props, {emit}) {
    const paginate = reactive ({
        showFirstPageBtn: computed(() => {
            return props.records.first_page_url && !(route().current() && route().params.page == 1) && !(route().current() && route().params.page == null)
        }),
        showPrevPageBtn: computed(() => {
            return props.records.prev_page_url
        }),
        showNextPageBtn: computed(() => {
            return props.records.next_page_url
        }),
        showLastPageBtn: computed(() => {
            return props.records.last_page_url && !(route().current() && route().params.page == props.records.last_page) && props.records.last_page != 1
        }),
    })

    const onLoad = (url) => {
      const regX = /page=([\d])/;
      const arr = url.match(regX);

      // return the page id
      emit('pagination-clicked', arr[1])
    }

    return {
      paginate,
      onLoad
    }
  },
  methods: {},
});
</script>