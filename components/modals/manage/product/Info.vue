<template>
  <VDialog
    scrim="var(--scrim)"
    transition="dialog-bottom-transition"
    :model-value="showModal"
    :persistent="loading"
    :max-width="maxWidth"
    content-class="generic__modal"
    @update:modelValue="closeModal"
  >
    <VCard class="generic__modal-card">
      <div class="card__wrapper content-area justify_auto ga-0">
        <div class="topHeader h-mc flex_between pb-[24px]">
          <div
            class="flex items-center gap-[2px] max-w-max border-[1px] px-[12px] h-[3.6rem] rounded-[40px] min-w-max border-bc-11 bg-main-20"
          >
            <span class="font-rhd text-lg capitalize text-font-3"
              >Add New Information</span
            >
          </div>
          <ModalsCloseBtn @closeModal="closeModal" />
        </div>
        <section class="card__content__area form__section form__section2 form__section4">
          <VRow>
            <!-- Title -->
            <VCol :cols="12" class="pb-0">
              <label for="info-title" class="text-sm text-font-2 inline-block mb-[6px]">
                Title <span class="text-main-4 font-Inter">*</span>
              </label>
              <input id="info-title" type="text" placeholder="Enter title" />
            </VCol>
            <!-- Description -->
            <VCol :cols="12" class="pb-0">
              <label
                for="info-description"
                class="text-sm text-font-2 inline-block mb-[6px]"
              >
                Description
              </label>
              <textarea
                placeholder="Enter description"
                name=""
                id="info-description"
                cols="30"
                rows="10"
              ></textarea>
            </VCol>
            <!-- description Image -->
            <VCol :cols="12">
              <label
                for="description-image"
                class="text-sm text-font-2 inline-block mb-[6px]"
              >
                Description Image
              </label>
              <ImageSelect label="DI" input-label="description-image" ref="imageSelect" />
            </VCol>
            <!-- Video link -->
            <VCol :cols="12">
              <label for="info-video" class="text-sm text-font-2 inline-block mb-[6px]">
                Video link
              </label>
              <input
                id="info-video"
                type="url"
                placeholder="https://youtu.be/mzpMpj0FHTU?si=D4hfR2ly-kr37knV"
              />
            </VCol>
            <!-- buttons-->
            <VCol :cols="12">
              <div class="flex_between sm:gap-[16px] gap-[10px] flex-wrap">
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
                  @click="closeModal()"
                />
                <BaseButton
                  class="pill"
                  height="3.6rem"
                  min-height="auto"
                  width="max-content"
                  color="var(--bg_color6)"
                  text="Save"
                  :text-style="{
                    fontSize: 'var(--text_sm)',
                    color: 'var(--text_dark3)',
                  }"
                />
              </div>
            </VCol>
          </VRow>
        </section>
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
  on("openManageProductInfoModal", () => {
    openModal();
  });
});
onUnmounted(() => {
  off("openManageProductInfoModal");
});
</script>

<style scoped lang="scss">
.imageSection {
  width: 6.4rem;
  min-width: 6.4rem;
  height: 6.4rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  border: 1px solid #b8d0ff;
  cursor: pointer;
  margin-inline: auto;
  color: var(--bg_color6);
  transition: all 500ms;
  * {
    color: inherit;
    transition: all 500ms;
  }
  & > * {
    position: relative;
    z-index: 0;
  }
  &:has(span) {
    background-color: #cddeff;
    span {
      display: block;
      font-size: var(--text_p);
      font-weight: 600;
      text-transform: uppercase;
      background: linear-gradient(180deg, #5c729a 0%, #314468 122.22%);
      text-shadow: 4px 4px 5px rgba(16, 24, 40, 0.6);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: inherit;
  }
  .iconImg {
    position: absolute;
    z-index: 1;
    bottom: -10px;
    right: 0;
    border-radius: inherit;
    width: 32px;
    height: 32px;
    aspect-ratio: 1/1;
    border: 1px solid #97a4c099;
    background-color: #fff;
  }
  &:not(.disabled):hover {
    border-color: currentColor;
    .iconImg {
      border-color: currentColor;
      svg {
        path {
          fill: currentColor;
        }
      }
    }
  }
  &.disabled {
    cursor: auto;
    user-select: none;
  }
}
.previewText {
  border-color: var(--bg_color6) !important;
}
.isDragging {
  border-color: var(--bg_color6) !important;
  & > * {
    opacity: 0;
  }
  &::after {
    content: "Drop!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--text_light);
    background: var(--bg_color6);
    font-size: 3.6rem;
    font-weight: 600;
    font-family: Lora, sans-serif;
  }
}
</style>
