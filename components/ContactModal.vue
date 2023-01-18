<template>
  <div @click="openModal">
    <slot></slot>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-30">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
            <button @click="closeModal" class="rounded p-2 border absolute right-5 top-4 hover:bg-gray-100/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <g id="close">
                    <path
                      id="x"
                      d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
                    />
                  </g>
                </svg>
              </button>
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 mb-4"
              >
                Сотрудничество
              </DialogTitle>
              <FormKit
                type="form"
                id="registration-example"
                submit-label="Register"
                @submit="submitHandler"
                :actions="false"
                #default="{ value }"
              >
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <FormKit
                    type="text"
                    label="Email"
                    validation="required|email"
                  />
                  <FormKit
                    type="text"
                    label="Название компании"
                    validation="required"
                  />
                  <FormKit type="text" label="Телефон" validation="required" />
                  <FormKit type="text" label="Имя" validation="required" />
                </div>
                <FormKit type="textarea" label="Ваше сообщение" :classes="{
                    wrapper: '$reset max-w-[100%]'
                }"/>
                <FormKit
                  type="file"
                  label="Файл"
                  :classes="{
                    wrapper: '$reset max-w-[100%]'
                }"
                  accept=".pdf,.doc,.docx,.xml,.md,.csv"
                  help="Добавить файл."
                />
                <FormKit
                  type="submit"
                  :classes="{
                    input:
                      '$reset inline-block bg-red-500 hover:bg-red-700 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3',
                  }"
                />
              </FormKit>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

const submitHandler = () => {
  console.log("submit");
};

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
