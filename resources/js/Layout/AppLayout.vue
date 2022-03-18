<template>
    <div>
        <div class="min-h-screen bg-slate-100 dark:bg-slate-900">
            <nav class="bg-white border-slate-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-800">
                <div class="flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" class="flex items-center">
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >Siwei's Case Study</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul
                            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                        >
                            <li>
                                <!-- Dark Mode Switch -->
                                <div class="relative ml-3">
                                    <button
                                        v-if="isDarkMode"
                                        @click="onLightMode"
                                        id="theme-toggle"
                                        type="button"
                                        class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg text-sm p-2.5"
                                    >
                                        <svg
                                            id="theme-toggle-light-icon"
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        v-else
                                        @click="onDarkMode"
                                        id="theme-toggle"
                                        type="button"
                                        class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg text-sm p-2.5"
                                    >
                                        <svg
                                            id="theme-toggle-dark-icon"
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main class="relative w-full dark:bg-slate-900">
                <slot></slot>
                <SiweiFlashMessage/>
                <!-- <online-chat/> -->
            </main>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue'
import SiweiFlashMessage from "../components/flash-message/FlashMessage.vue";

let isDarkMode = ref(0)


onMounted(() => {

    if (Boolean(Number(localStorage.getItem('isDarkMode'))) == true) {
        isDarkMode.value = 1
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})

const onDarkMode = () => {
    document.documentElement.classList.add('dark')
    isDarkMode.value = 1
    localStorage.setItem('isDarkMode', 1)
}

const onLightMode = () => {
    document.documentElement.classList.remove('dark')
    isDarkMode.value = 0
    localStorage.setItem('isDarkMode', 0)
}

</script>