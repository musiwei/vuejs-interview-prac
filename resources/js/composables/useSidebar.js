import { ref } from "vue";

/**
 * Contains all the sidebar functions for pages which use sidebar
 * 
 * @returns 
 */
export default function useSidebar() {
    const showSidebar = ref(false);
    // Entity to send to sidebar
    const editing = ref(null);
    // Current selected tab
    const selectedTab = ref(null);

    const closeSidebar = () => {
        showSidebar.value = false;
    };

    const openSidebar = () => {
        showSidebar.value = true;
    };

    const onChangedTab = (index) => {
        // Inform about the tab change
        selectedTab.value = index;
    };

    /**
     * Reset the sidebar
     * 
     * @param {*} close whether to close the sidebar after reset
     * @param {*} tabindex which tab to reset to, top -> bottom, starting from 0. 
     */
    const resetSidebar = (close = true, tabindex = 0) => {
        // Reset to default tab
        selectedTab.value = tabindex;
        editing.value = null;
        if(close) closeSidebar()
    };

    return {
        showSidebar,
        editing,
        selectedTab,
        closeSidebar,
        openSidebar,
        onChangedTab,
        resetSidebar,
    };
}
