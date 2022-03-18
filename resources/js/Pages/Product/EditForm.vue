<template>
  <form
    v-if="product"
    @submit.prevent="onSubmit"
    @keydown.esc.stop="onCancel"
    class=""
  >
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-75 translate-x-[29rem]"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-75 translate-x-[29rem]"
    >
      <div
        v-if="isDirty"
        class="
          z-10
          bg-slate-50
          flex
          justify-center
          h-[3em]
          dark:bg-slate-700
        "
      >
        <SiweiButton
          type="submit"
          class="m-2"
          :loading="form.processing"
          @click="onSubmit"
        >
          Save
        </SiweiButton>
        <SiweiSecondaryButton type="button" class="m-2" @click="onCancel">
          Cancel
        </SiweiSecondaryButton>
      </div>
    </transition>
    <div class="mx-4 text-xs">
      <div class="mt-2 text-lg font-semibold lg:mt-4">Edit {{ form.name }}</div>
      <div class="text-gray-400">
        Editing product
      </div>

      <section class="pt-3">
        <SiweiLabel for="name">
          Name
          <span class="text-rose-500">*</span>
        </SiweiLabel>
        <SiweiInput
          v-model.trim="form.name"
          id="name"
          type="text"
          class="block w-full p-1 mt-1"
          placeholder="Name"
          ref="nameField"
          autocomplete="off"
        />
        <div v-if="form.errors.name" class="mt-1 text-rose-500">
          {{ form.errors.name }}
        </div>
      </section>

      <section class="pt-3">
        <div
          class="py-1 text-sm font-semibold text-teal-500 uppercase dark:text-teal-500"
        >
          Advanced
        </div>
        <SiweiDangerButton
          type="button"
          class="block w-full"
          @click="onConfirmDelete"
          :loading="beingDeleted"
        >
          Delete
        </SiweiDangerButton>
      </section>
    </div>
  </form>

  <SiweiConfirmationModal :show="beingDeleted" @close="beingDeleted = null">
    <template #title> Delete </template>

    <template #content> Are you sure? This cannot be undone. </template>

    <template #footer>
      <SiweiDangerButton @click="onDelete" :loading="form.processing">
        Delete
      </SiweiDangerButton>

      <SiweiSecondaryButton class="ml-3" @click="beingDeleted = null">
        Cancel
      </SiweiSecondaryButton>
    </template>
  </SiweiConfirmationModal>

  <SiweiConfirmationModal :show="beingAbandoned" @close="beingAbandoned = null">
    <template #title>Leave without saving? </template>

    <template #content> You have unsaved changes in the side panel. </template>

    <template #footer>
      <SiweiDangerButton
        class="mr-3"
        @click="onAbandon"
        :loading="form.processing"
      >
        Abandon change
      </SiweiDangerButton>

      <SiweiSecondaryButton @click="onAbandonCancel">
        Cancel
      </SiweiSecondaryButton>
    </template>
  </SiweiConfirmationModal>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs, watch } from "vue"
import { Inertia } from "@inertiajs/inertia"
import useInertiaFormDirtyCheck from "../../composables/useInertiaFormDirtyCheck";

export default defineComponent({
  emits: ["item-edited", "edit-cancelled", "item-deleted", "same-with-postal", "abandon-cancelled"],

  props: {
    product: {
      required: true,
    },
  },

  setup(props) {
    const initForm = {
      name: props.product.name,
    }
    let form = Inertia.form(initForm)
    const beingDeleted = ref(null)
    const beingAbandoned = ref(null)

    const { isDirty } = useInertiaFormDirtyCheck(form)

    onMounted(() => {
      window.onbeforeunload = () => (isDirty.value ? true : null);
    })

    return {
      form,
      beingDeleted,
      beingAbandoned,
      isDirty
    }
  },

  methods: {
    focus() {
      // Focus on name field
      this.$refs.nameField.focus()
    },
    onSubmit() {
      this.form.put(route("product.update", { id: this.product.id, }), {
        onSuccess: () => { 
          this.$emit("item-edited")
         }
      })
    },
    onCancel(event) {
      if(event) event.target.blur()
      if (!this.isDirty)
        this.$emit("edit-cancelled") // Form is not dirty, just cancel
      else
        this.beingAbandoned = true // Show confirmation
    },
    onAbandon() {
      // Close confirmation
      this.beingAbandoned = null

      // Reset form dirty status so no more confirmation
      this.isDirty = false

      this.$emit("edit-cancelled")
    },
    onAbandonCancel() {
      // Close confirmation
      this.beingAbandoned = null

      this.$emit("abandon-cancelled")
    },
    onConfirmDelete() {
      this.beingDeleted = true
    },
    onDelete() {
      this.form.delete(route("product.destroy", { id: this.product.id, }), {
        onSuccess: () => { 
          
          this.beingDeleted = null
          this.$emit("item-deleted")
         }
      })
    },
  },
})
</script>