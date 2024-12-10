<template>
  <div>
    <h3 class="font-rhd font-medium text-xl text-font-3 mb-[6px]">ID Verification</h3>
    <div class="cardItem h-full border-[1px] border-bc-13 bg-font rounded-[12px]">
      <div class="p-[16px] pb-0">
        <span class="text-xs text-font-2 inline-block"
          >Upload Nin and Voters card (png, gif, jpeg, jpg)</span
        >
      </div>
      <section
        class="card__content__area form__section form__section2 form__section4 p-[16px] overflow-hidden pr-0"
      >
        <div class="flex items-center w-full gap-[8px]">
          <div
            class="border-bc border-dashed border-[1px] min-w-[13.7rem] w-[13.7rem] h-[14rem] rounded-[12px] p-[12px] flex_center text-center cursor-pointer hover:border-main-6 relative overflow-hidden dragNdrop"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
            @click="chooseImgFile"
            :class="{ isDragging }"
          >
            <div>
              <div
                style="
                  box-shadow: 0px 0px 0px 1px rgba(16, 24, 40, 0.18),
                    0px -2px 0px 0px rgba(16, 24, 40, 0.05),
                    0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                "
                class="bg-main w-[4rem] h-[4rem] rounded-[8px] border-[1px] border-bc-5 flex_center mb-[12px] mx-auto"
              >
                <SvgUpload />
              </div>
              <span
                class="font-Inter text-xs text-font-2 inline-block"
                style="line-height: 16px"
                ><span class="text-font-3 font-semibold underline">Click to upload </span
                >or drag and drop</span
              >
            </div>
          </div>
          <div
            ref="scrollRef"
            class="flex items-center w-full gap-[8px] h-[14rem] rounded-tl-[12px] rounded-bl-[12px] overflow-auto pr-[16px] hidden__hover"
          >
            <template v-if="filesPreviews.length">
              <div
                v-for="(items, index) in filesPreviews"
                :key="index + items.id"
                class="relative border-bc border-dashed border-[1px] min-w-[13.7rem] w-[13.7rem] h-full rounded-[12px]"
              >
                <img
                  class="w-full h-full rounded-[12px] object-cover object-top"
                  :src="items.name"
                  :alt="items.title"
                />
                <BaseButton
                  title="Delete image"
                  style="padding: 0"
                  :elevation="1"
                  color="var(--danger_color6)"
                  min-height="auto"
                  min-width="auto"
                  class="aspect-auto absolute z-10 top-0 right-0 pill"
                  width="2.6rem"
                  height="2.6rem"
                  :svg="true"
                  svg-left="XMark"
                  svg-stroke="var(--danger_color5)"
                  svg-class="w-[1rem] h-[1rem]"
                  @click="deleteImage(index)"
                />
              </div>
            </template>
          </div>
        </div>
      </section>
      <!-- controls -->
      <Transition name="slide-fade">
        <div
          v-if="showControls"
          class="px-[16px] py-[8px] border-t border-bc-13 flex items-center justify-end gap-[8px]"
        >
          <BaseButton
            color="#00000000"
            min-height="auto"
            min-width="auto"
            class="aspect-auto"
            width="3.6rem"
            height="3.6rem"
            :svg="true"
            svg-left="angle/left"
            @mousedown="startMovement('prev')"
            @mouseup="stopMovement"
            @mouseleave="stopMovement"
          />
          <BaseButton
            color="#00000000"
            min-height="auto"
            min-width="auto"
            class="aspect-auto"
            width="3.6rem"
            height="3.6rem"
            :svg="true"
            svg-left="angle/right"
            @mousedown="startMovement('next')"
            @mouseup="stopMovement"
            @mouseleave="stopMovement"
          />
        </div>
      </Transition>
    </div>
    <input
      :disabled="loading"
      id="brand-Logo"
      style="display: none"
      type="file"
      ref="inputImg"
      :accept="allowedValues"
      :multiple="true"
      @input="selectImgFile"
    />
  </div>
</template>

<script lang="ts" setup>
const { $deepClone } = useNuxtApp();
const showControls = ref(false);
const interval = ref<any>(null);
const {
  loading,
  instance,
  filesPreview,
  isDragging,
  allowedValues,
  dragover,
  dragleave,
  drop,
  selectImgFile,
  chooseImgFile,
} = useImageSelect({ multiple: true, maxSize: 3, width: 1920, height: 1080 });
const filesPreviews = computed(() => $deepClone(filesPreview.value));

const setOnScroll = () => {
  const ref = instance?.proxy?.$refs?.scrollRef as HTMLElement;
  if (ref) {
    const contentHeight = ref.scrollHeight;
    const contentWidth = ref.scrollWidth;
    const clientHeight = ref.clientHeight;
    const clientWidth = ref.clientWidth;
    if (contentHeight > clientHeight || contentWidth > clientWidth) {
      showControls.value = true;
    } else showControls.value = false;
  }
};
function moveRow(type: string) {
  const ref = instance?.proxy?.$refs.scrollRef as HTMLElement;
  const moveVal = 550;
  if (ref) {
    switch (type) {
      case "prev":
        ref.scrollLeft -= moveVal;
        break;
      case "next":
        ref.scrollLeft += moveVal;
        break;

      default:
        break;
    }
  }
}
function stopMovement() {
  clearInterval(interval.value);
  interval.value = null;
}
function startMovement(type: string) {
  moveRow(type);
  interval.value = setInterval(() => {
    moveRow(type);
  }, 500);
}
const deleteImage = (index: number) => {
  filesPreview.value.splice(index, 1);
  setTimeout(() => {
    setOnScroll();
  }, 200);
};
watch(filesPreviews, () => {
  setTimeout(() => {
    setOnScroll();
  }, 200);
});
</script>

<style scoped lang="scss"></style>
