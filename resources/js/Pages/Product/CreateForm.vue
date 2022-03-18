<template>
  <form
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
      <div class="mt-2 text-lg font-semibold lg:mt-4">Create {{ form.name }}</div>
      <div class="text-gray-400">
        Creating product
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
    </div>
  </form>

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
import { defineComponent, ref } from "vue"
import { Inertia } from "@inertiajs/inertia"
import useInertiaFormDirtyCheck from "../../composables/useInertiaFormDirtyCheck";

export default defineComponent({
  emits: ["item-created", "create-cancelled"],

  setup() {
    const emptyForm = {
      name: "",
      alias: "",
    }

    const form = Inertia.form(emptyForm);
    const beingDeleted = ref(null)
    const beingAbandoned = ref(null)
    
    const { isDirty } = useInertiaFormDirtyCheck(form)

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
      this.$nextTick(() => {
        if (this.$refs.nameField) {
          this.$refs.nameField.focus()
        }
      })
    },
    onSubmit() {
      this.form.post(route("product.store"), {
        onSuccess: () => {
          this.form.reset()
        }
      });
    },
    onCancel(event) {
      if(event) event.target.blur()
      if (!this.isDirty)
        this.$emit("edit-cancelled") // Form is not dirty, just cancel
      else
        this.beingAbandoned = true // Show confirmation
    },
    onAbandon() {
      // Reset form
      this.form.reset()

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
    onDelete() {
      this.beingDeleted = true
    },
  },
})
</script>