<template>
    <input class="text-xs text-slate-900 bg-slate-50 placeholder:text-xs placeholder-slate-300 border-slate-300 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 rounded-md shadow-sm dark:shadow-slate-700 dark:text-slate-50 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-500" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: ['modelValue'],

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    })
</script>
