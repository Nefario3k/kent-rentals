<template>
  <VDialog
    scrim="var(--scrim)"
    transition="dialog-bottom-transition"
    :model-value="showModal"
    :persistent="true"
    :max-width="maxWidth"
    content-class="generic__modal"
    @update:modelValue="closeModal"
  >
    <VCard class="generic__modal-card">
      <div class="card__wrapper content-area justify_auto ga-0">
        <section class="card__content__area space-y-[16px]">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16V50H52V16H16ZM42 24H22C22 24 20 24 20 22C20 22 20 20 22 20C24 20 42 20 42 20C42 20 44 20 44 22C44 24 42 24 42 24Z"
              fill="#E0D7DE"
            />
            <path
              d="M52 52C52 52 52 56 48 56C38.5 56 26 56 26 56C26 56 22 56 22 52H52Z"
              fill="#F8E38E"
            />
            <path d="M52 12H22C22 12 22 8 26 8H48C48 8 52 8 52 12Z" fill="#F8E38E" />
            <path
              d="M42 18H22C19.4 18 18 20.06 18 22C18 24.6 20.06 26 22 26H42C43.94 26 46 24.6 46 22C46 19.4 43.94 18 42 18ZM22 24C22 24 20 24 20 22C20 22 20 20 22 20H28C33.94 20 42 20 42 20C42 20 44 20 44 22C44 24 42 24 42 24H22Z"
              fill="#201A1E"
            />
            <path
              d="M44 22C44 24 42 24 42 24H28C26.9 24 26 23.1 26 22C26 20.9 26.9 20 28 20C33.94 20 42 20 42 20C42 20 44 20 44 22Z"
              fill="#F8E38E"
            />
            <path
              d="M53 34C53.56 34 54 33.558 54 33V12C54 7.6 50.42 6 48 6H16C11.6 6 10 9.58 10 12V52C10 56.4 13.58 58 16 58H48C52.4 58 54 54.42 54 52V37C54 36.44 53.56 36 53 36C52.44 36 52 36.44 52 37V52C52 52 52 56 48 56C44 56 16 56 16 56C16 56 12 56 12 52H45C45.56 52 46 51.56 46 51C46 50.44 45.56 50 45 50H12V14H52V33C52 33.558 52.44 34 53 34ZM12 12C12 12 12 8 16 8C20 8 48 8 48 8C48 8 52 8 52 12H12Z"
              fill="#433740"
            />
            <path
              d="M38 29C38 28.448 37.552 28 37 28H19C18.448 28 18 28.448 18 29C18 29.552 18.448 30 19 30H37C37.552 30 38 29.552 38 29Z"
              fill="#433740"
            />
            <path
              d="M46 29C46 28.448 45.552 28 45 28H41C40.448 28 40 28.448 40 29C40 29.552 40.448 30 41 30H45C45.552 30 46 29.552 46 29Z"
              fill="#433740"
            />
          </svg>
          <p class="font-cg font-semibold text-p text-font-3">
            Before Updating Your Rental Application
          </p>
          <div class="space-y-[12px]">
            <p class="font-Inter font-normal text-lg text-font-2">
              Important Infomation to Note Before Updating rental info
            </p>
            <ol>
              <li class="font-rhd text-md text-font-2">
                <strong class="text-font-3">Verification:</strong> Caretakers will present
                themselves for facial verification
              </li>
              <li class="font-rhd text-md text-font-2">
                <strong class="text-font-3">Info:</strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odit, aut?
              </li>
              <li class="font-rhd text-md text-font-2">
                <strong class="text-font-3">Summon:</strong> Summon Raikage!
              </li>
            </ol>
          </div>
          <div class="space-y-[12px] p-[16px] bg-main rounded-[16px]">
            <p class="font-Inter font-normal text-lg text-font-3">
              Steps on how to update rental application
            </p>
            <ol>
              <li class="font-rhd text-md text-font-2">Log In: You already are!</li>
              <li class="font-rhd text-md text-font-2">
                Info: Navigate to "My Proprties," add info
              </li>
              <li class="font-rhd text-md text-font-2">
                Edit Details: Go to "Edit Rental Application" and modify data
              </li>
              <li class="font-rhd text-md text-font-2">Verify: Await your caretakers</li>
            </ol>
          </div>
        </section>
        <div class="topHeader h-mc">
          <div
            class="flex_between sm:gap-[16px] gap-[10px] flex-wrap border-t-[1px] border-bc py-[24px]"
          >
            <BaseButton
              style="border: 1px solid var(--border_color2)"
              class="pill"
              height="3.6rem"
              min-width="auto"
              min-height="auto"
              width="max-content"
              color="var(--text_light)"
              text="Discard"
              :text-style="{
                fontSize: 'var(--text_sm)',
                color: 'var(--text_dark3)',
              }"
              to="/property/owned"
              @click="closeModal()"
            />
            <BaseButton
              class="pill"
              height="3.6rem"
              min-height="auto"
              width="max-content"
              color="var(--bg_color6)"
              text="Continue to Edit"
              :text-style="{
                fontSize: 'var(--text_sm)',
                color: 'var(--text_dark3)',
              }"
              @click="closeModal()"
            />
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<script lang="ts" setup>
const { on, off } = useEventBus();
const maxWidth = ref(750);
const loading = ref(false);
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  if (loading.value) return;
  showModal.value = false;
  setTimeout(() => {}, 200);
};

onMounted(() => {
  on("openCreateProductInfoModal", () => {
    openModal();
  });
});
onUnmounted(() => {
  off("openCreateProductInfoModal");
});
</script>

<style scoped lang="scss">
ol {
  // padding-left: 24px;
}
li {
  list-style-type: auto;
  list-style-position: inside;
}
</style>
