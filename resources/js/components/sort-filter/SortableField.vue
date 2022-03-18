<template>
    <div class="inline-flex select-none cursor-pointer w-full text-slate-700 dark:text-slate-200" @click.self="onOrderChange">
        <slot></slot>
        <div v-if="ascending === null" class="self-center ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z"/></svg></div>
        <div v-if="ascending === true" class="self-center ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M 12 0 l 8 10 h -16 l 8 -10 z m 8 14 h -16"/></svg></div>
        <div v-if="ascending ===false" class="self-center ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M 12 0 l 8 10 h -16 l 8 10 l 8 -10 z"/></svg></div>
        <div v-if="ascending !== null" @click="onOrderRemove" class="self-center ml-1 cursor-pointer"><svg class="h-4 w-4 cursor-pointer mr-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" > <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg></div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    emits: ['order-changed', 'order-removed'],
    props: {
        name: {
            required: true,
            String
        },
    },
    setup(props) {
        const ascending = ref(null); // True is ascending order, false is descending order
        
        return {
            ascending
        }
    },
    methods: {
        onOrderChange() {
            if (this.ascending === null) this.ascending = true
            else this.ascending = !this.ascending

            // this.$emit("order-changed", order-to-remove, order-to-add)
            this.$emit("order-changed", !this.ascending? this.name : '-' + this.name, this.ascending? this.name : '-' + this.name)
        },

        onOrderRemove() {
            this.ascending = null
            this.$emit("order-removed", this.name)
        }
    }
})
</script>
