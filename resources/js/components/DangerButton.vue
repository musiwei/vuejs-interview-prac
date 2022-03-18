<template>
    <button :type="type" :disabled="loading" class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition">
        <div v-if="loading" class="mr-2">
            <div style="border-top-color:transparent"
                class="w-4 h-4 border-4 border-teal-500 border-double rounded-full animate-spin"></div>
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
                default: 'button',
            },
        }
    })
</script>
