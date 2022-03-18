import { ref, watch } from "vue";

/**
 * Note by Siwei: 
 * 
 * Please use form.isDirty if your form does not have nested objects because this is an overkill. 
 * This function is only implemented because Inertia is not able to check nested by the time written (06/02/2022)
 * This function checks all the nested objects.
 * 
 * @param {*} form Inertia form
 * @returns 
 */
export default function useInertiaFormDirtyCheck(form) {
    let isDirty = ref(false)

    // Form dirty check
    let rawOriginalValue = JSON.parse(JSON.stringify(form));
    delete rawOriginalValue['errors'];
    delete rawOriginalValue['hasErrors'];
    delete rawOriginalValue['isDirty'];
    delete rawOriginalValue['processing'];
    delete rawOriginalValue['recentlySuccessful'];
    delete rawOriginalValue['wasSuccessful'];
    delete rawOriginalValue['__rememberable'];
    watch(form, (currentValue, oldValue) => {
      if(!currentValue.processing){
        let rawCurrentValue = JSON.parse(JSON.stringify(currentValue));
        delete rawCurrentValue['errors'];
        delete rawCurrentValue['hasErrors'];
        delete rawCurrentValue['isDirty'];
        delete rawCurrentValue['processing'];
        delete rawCurrentValue['recentlySuccessful'];
        delete rawCurrentValue['wasSuccessful'];
        delete rawCurrentValue['__rememberable'];
        isDirty.value = JSON.stringify(rawCurrentValue) != JSON.stringify(rawOriginalValue)
        // Prevent refresh browser window, pop up confirmation before leaving page if form is dirty.
        window.onbeforeunload = () => (isDirty.value ? true : null);
      }
    }, { deep: true });

    return {
        isDirty
    };
}
