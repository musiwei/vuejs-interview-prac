import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import { Inertia } from "@inertiajs/inertia"

/**
 * Enable search and sort component's onPage filtering
 * 
 * @param {*} urlQuerySentTo url to search against. Default value: current route. 
 * @param {*} reloadFn reload function. Default value: null. 
 * @returns {*} Object returns all the listeners
 */
export default function useSearchSort(urlQuerySentTo = route(route().current()), reloadFn = null) {
    const sorting = ref([]);
    const query = ref({});

    watch(
        query,
        debounce((currentValue, oldValue) => {
            if(!reloadFn) {
                Inertia.get(urlQuerySentTo, query.value, {
                    preserveState: true,
                    replace: true,
                });
            } else {
                reloadFn(query.value)
            }
        }, 500),
        { deep: true }
    );

    const onTermSearched = (name, value) => {
        delete query.value['page']
        query.value[`filter[${name}]`] = value;
    };

    const onPaginate = (page) => {
        if(page) query.value['page'] = page
      }

    const onTermReset = (name) => {
        delete query.value[`filter[${name}]`];
    };

    const onOrderChange = (orderToRemove, orderToAdd) => {
        sorting.value = sorting.value.filter(
            (e) => e !== orderToRemove && e !== orderToAdd
        );
        sorting.value.push(orderToAdd);

        // Remove duplicates
        sorting.value = sorting.value.filter(function (item, pos, array) {
            return array.indexOf(item) == pos;
        });

        query.value["sort"] = sorting.value.join(",");
    };

    const onOrderRemove = (name) => {
        sorting.value = sorting.value.filter(
            (e) => e !== name && e !== `-${name}`
        );
        query.value["sort"] = sorting.value.join(",");
    };

    return {
        sorting,
        query,
        onTermSearched,
        onPaginate,
        onTermReset,
        onOrderChange,
        onOrderRemove,
    };
}
