<template>
    <AppLayout>
        <SideToolbar :show="showSidebar" @onClickOutside="closeSidebar" class="z-20">
            <template #content>
                <TabGroup
                    vertical
                    :defaultIndex="0"
                    @change="onChangedTab"
                    :selectedIndex="selectedTab"
                >
                    <div
                        class="absolute top-0 left-0 w-[3rem] h-full bg-slate-50 dark:bg-slate-700"
                        @click.stop="showSidebar = true"
                    >
                        <TabList>
                            <Tab v-slot="{ selected }" as="template">
                                <div
                                    class="p-4 w-[3rem] border-b-[1px] border-x-[1px] border-slate-200 dark:border-slate-600 cursor-pointer hover:shadow-md hover:text-teal-500 dark:shadow-slate-600"
                                    :class="{
                                        'cursor-pointer hover:shadow-md hover:text-slate-500': true,
                                        'text-teal-500': selected,
                                    }"
                                >
                                    <svg-plus class="w-5 h-5" />
                                </div>
                            </Tab>
                            <Tab v-slot="{ selected }" as="template" :disabled="!editing">
                                <div
                                    class="p-4 w-[3rem] border-b-[1px] border-x-[1px] border-slate-200 dark:border-slate-600 dark:hover:text-teal-300 dark:shadow-slate-600"
                                    :class="{
                                        'cursor-pointer hover:shadow-md hover:text-slate-500':
                                            editing,
                                        'text-slate-300 dark:text-slate-500 dark:hover:text-slate-500':
                                            !editing,
                                        'text-teal-500': editing && selected,
                                    }"
                                >
                                    <svg-pencil class="w-5 h-5" />
                                </div>
                            </Tab>
                        </TabList>
                    </div>
                    <div class="absolute inset-x-[3rem] h-full overflow-auto">
                        <TabPanels>
                            <TabPanel :unmount="false">
                                <create-form ref="createForm" @create-cancelled="closeSidebar"></create-form>
                            </TabPanel>
                            <TabPanel :unmount="false">
                                <edit-form
                                    v-if="editing"
                                    :key="editing"
                                    :product="editing"
                                    ref="editForm"
                                    @item-edited="resetSidebar"
                                    @edit-cancelled="resetSidebar"
                                    @item-deleted="resetSidebar"
                                    @abandon-cancelled="openSidebar"
                                ></edit-form>
                            </TabPanel>
                        </TabPanels>
                    </div>
                </TabGroup>
            </template>
        </SideToolbar>

        <div class="py-4 lg:py-6 mr-[32rem]">
            <div class="px-1 mx-auto sm:px-6 sm:pr-14 lg:px-8 lg:pr-20">
                <div class="flex flex-col">
                    <div class="flex justify-between mt-2 xs:mt-0">
                        <div
                            class="self-center text-sm text-slate-500 whitespace-nowrap dark:text-slate-400"
                        >
                            <span
                                class="text-xl font-semibold text-slate-800 dark:text-slate-100"
                            >{{ products.total }} Products.</span>
                            Page
                            <span
                                class="font-semibold text-slate-800 dark:text-slate-100"
                            >
                                {{
                                    products.current_page
                                }}
                            </span>
                            of {{ products.last_page }}.
                        </div>
                        <PaginateButtons @pagination-clicked="onPaginate" :records="products"></PaginateButtons>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div
                                class="py-2 shadow-md sm:rounded-lg bg-slate-200 dark:bg-slate-700"
                            >
                                <table class="min-w-full">
                                    <thead class="bg-slate-200 dark:bg-slate-700">
                                        <tr>
                                            <th
                                                class="px-6 py-3 text-sm font-medium tracking-wider text-left uppercase text-slate-700 dark:text-slate-400"
                                            >
                                                <SortableField
                                                    name="name"
                                                    @order-changed="onOrderChange"
                                                    @order-removed="onOrderRemove"
                                                >Name</SortableField>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-slate-200 dark:bg-slate-700">
                                            <td
                                                class="px-6 pb-3 text-sm font-medium tracking-wider text-left uppercase text-slate-700 dark:text-slate-400"
                                            >
                                                <SearchableInputField
                                                    name="name"
                                                    @term-searched="onTermSearched"
                                                    @term-reset="onTermReset"
                                                    placeholder="Search"
                                                    ref="searchBox"
                                                />
                                            </td>
                                        </tr>
                                        <tr
                                            @click="onClick(p)"
                                            v-for="p in products.data"
                                            :key="p.id"
                                            class="border-b dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
                                            :class="{
                                                'bg-slate-100 dark:bg-slate-700': p == editing,
                                                'bg-white dark:bg-slate-800': p != editing,
                                            }"
                                        >
                                            <td
                                                class="px-6 py-2 text-sm font-medium text-slate-900 dark:text-white"
                                            >
                                                <siwei-copiable-text
                                                    :text="p.name"
                                                    class="hover:underline hover:decoration-teal-500 decoration-dashed decoration-2 underline-offset-2"
                                                >{{ p.name }}</siwei-copiable-text>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-3 mt-4 text-sm text-slate-500 whitespace-nowrap dark:text-slate-400 place-content-between"
                >
                    <div class="text-left"></div>

                    <div class="text-center">
                        <PaginateIndicator :records="products"></PaginateIndicator>
                    </div>

                    <div class="flex justify-end">
                        <PaginateButtons @pagination-clicked="onPaginate" :records="products"></PaginateButtons>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script setup>
import { defineComponent, onMounted, ref, nextTick } from 'vue'
import AppLayout from "../../Layout/AppLayout.vue";
import useSearchSort from "../../composables/useSearchSort";
import useSidebar from "../../composables/useSidebar";
import SideToolbar from '../../components/side-toolbar/SideToolbar.vue';
import SearchableInputField from '../../components/sort-filter/SearchableInputField.vue';
import SortableField from '../../components/sort-filter/SortableField.vue';
import PaginateButtons from '../../components/pagination/PaginateButtons.vue';
import PaginateIndicator from '../../components/pagination/PaginateIndicator.vue';
import SiweiCopiableText from "../../components/copiable-text/CopiableText.vue";
import CreateForm from './CreateForm.vue';
import EditForm from './EditForm.vue';

const props = defineProps({ products: Object })

const searchBox = ref(null)

const {
    sorting,
    query,
    onTermSearched,
    onPaginate,
    onTermReset,
    onOrderChange,
    onOrderRemove,
} = useSearchSort()

const {
    showSidebar,
    editing,
    selectedTab,
    closeSidebar,
    openSidebar,
    onChangedTab,
    resetSidebar,
} = useSidebar()

onMounted(() => {
    searchBox.value.focus()
})

const onClick = (record) => {
    // load data
    editing.value = record

    // Show sidebar
    showSidebar.value = true

    nextTick(() => {
        selectedTab.value = 1;
    });
}
</script>