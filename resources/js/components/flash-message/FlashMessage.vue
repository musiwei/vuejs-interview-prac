<template>
  <NotificationGroup group="success">
    <div
      class="fixed inset-0 z-50 flex items-start justify-center p-6 px-4 py-6 pointer-events-none "
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="-translate-y-10 opacity-0 sm:-translate-y-20"
          enter-to="-translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md bg-slate-50 dark:bg-slate-700 dark:shadow-slate-700"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-teal-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-teal-500">{{
                  notification.title
                }}</span>
                <p class="text-sm text-slate-600 dark:text-slate-50">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

  <NotificationGroup group="error">
    <div
      class="fixed inset-0 z-50 flex items-start justify-center p-6 px-4 py-6 pointer-events-none "
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="-translate-y-10 opacity-0 sm:-translate-y-20"
          enter-to="-translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md bg-slate-50 dark:bg-slate-700 dark:shadow-slate-700"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-red-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="10"
                />
                <rect
                  x="7"
                  y="15.3137"
                  width="12"
                  height="2"
                  rx="1"
                  transform="rotate(-45 7 15.3137)"
                />
                <rect
                  x="8.41422"
                  y="7"
                  width="12"
                  height="2"
                  rx="1"
                  transform="rotate(45 8.41422 7)"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-red-500">{{
                  notification.title
                }}</span>
                <p class="text-sm text-slate-600 dark:text-slate-50">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

  <NotificationGroup group="warning">
    <div
      class="fixed inset-0 z-50 flex items-start justify-center p-6 px-4 py-6 pointer-events-none "
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="-translate-y-10 opacity-0 sm:-translate-y-20"
          enter-to="-translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md bg-slate-50 dark:bg-slate-700 dark:shadow-slate-700"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-amber-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-amber-500">{{
                  notification.title
                }}</span>
                <p class="text-sm text-slate-600 dark:text-slate-50">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

  <NotificationGroup group="info">
    <div
      class="fixed inset-0 z-50 flex items-start justify-center p-6 px-4 py-6 pointer-events-none "
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="-translate-y-10 opacity-0 sm:-translate-y-20"
          enter-to="-translate-y-0 opacity-100 sm:translate-y-0"
          leave="transition ease-in duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md bg-slate-50 dark:bg-slate-700 dark:shadow-slate-700"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg
                class="w-6 h-6 text-white rotate-180 fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-blue-500">{{
                  notification.title
                }}</span>
                <p class="text-sm text-slate-600 dark:text-slate-50">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { notify } from "notiwind"
import { usePage } from "@inertiajs/inertia-vue3";

export default defineComponent({
  setup() {
    // Print any messages in flash on page load
    onMounted(() => {
      if (usePage().props.value.flash.success)
        notify({ group: "success", title: "Success", text: usePage().props.value.flash.success }, 3000)
      if (usePage().props.value.flash.error)
        notify({ group: "error", title: "Oops", text: usePage().props.value.flash.error }, 3000)
      if (usePage().props.value.flash.warning)
        notify({ group: "warning", title: "Warning", text: usePage().props.value.flash.warning }, 3000)
      if (usePage().props.value.flash.info)
        notify({ group: "info", title: "Note", text: usePage().props.value.flash.info }, 3000)
    })
  },
  watch: {
    '$page.props.flash': {
      handler() {
        if (this.$page.props.flash.success)
          this.$notify({ group: "success", title: "Success", text: this.$page.props.flash.success }, 3000)
        if (this.$page.props.flash.error)
          this.$notify({ group: "error", title: "Oops", text: this.$page.props.flash.error }, 3000)
        if (this.$page.props.flash.warning)
          this.$notify({ group: "warning", title: "Warning", text: this.$page.props.flash.warning }, 3000)
        if (this.$page.props.flash.info)
          this.$notify({ group: "info", title: "Note", text: this.$page.props.flash.info }, 3000)
      },
      deep: true,
    }
  }
})
</script>
