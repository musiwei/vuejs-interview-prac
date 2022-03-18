require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import ProductList from "./Pages/Product/List.vue";
import Notifications from "notiwind";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import SvgPencil from "./components/svgs/Pencil.vue";
import SvgPlus from "./components/svgs/Plus.vue";
import SvgCross from "./components/svgs/Cross.vue";
import SvgKeyEsc from "./components/svgs/KeyEsc.vue";
import SvgFilter from "./components/svgs/Filter.vue";
import SvgCtrl from "./components/svgs/Ctrl.vue";
import SvgMouseLeft from "./components/svgs/MouseLeft.vue";
import SiweiButton from "./components/Button.vue";
import SiweiConfirmationModal from "./components/ConfirmationModal.vue";
import SiweiLabel from "./components/Label.vue";
import SiweiInput from "./components/Input.vue";
import SiweiDangerButton from "./components/DangerButton.vue";
import SiweiSecondaryButton from "./components/SecondaryButton.vue";
import SiweiSpinner from "./components/Spinner.vue";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Notifications)
            .mixin({
                components: {
                    TabGroup, TabList, Tab, TabPanels, TabPanel,
                    SvgPencil, SvgPlus, SvgCross, SvgKeyEsc, SvgFilter, SvgCtrl, SvgMouseLeft,
                    SiweiButton, SiweiConfirmationModal, SiweiLabel, SiweiInput, SiweiDangerButton, SiweiSecondaryButton, SiweiSpinner
                },
            })
            .mount(el);
    },
});

InertiaProgress.init();
