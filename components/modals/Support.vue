<template>
  <VDialog
    scrim="var(--scrim)"
    opacity="1"
    transition="dialog-bottom-transition"
    :model-value="showModal"
    :persistent="loading"
    :max-width="maxWidth"
    :height="maxHeight"
    max-height="calc(100dvh - 48px)"
    content-class="generic__modal trans"
    @update:modelValue="closeModal"
  >
    <VCard class="generic__modal-card">
      <div
        class="card__wrapper content-area justify_auto ga-0"
        style="padding: 0 !important"
      >
        <div
          :class="{ 'activeShadow top': activeShadow }"
          :style="{ padding: `0 16px 0 ${maxPadding}px` }"
          class="h-mc mm relative"
        >
          <ModalsCloseBtn
            :ripple="false"
            button-class="noBefore"
            @closeModal="closeModal"
            class="mb-[-20px] pt-[20px]"
          />
          <div>
            <template v-if="!currentView">
              <div class="transleftLongBasic flex items-start gap-[15px]">
                <img
                  class="w-[4.5rem] min-w-[4.5rem] h-[4.5rem] rounded-full block object-cover object-top aspect-square"
                  src="/logo.png"
                  alt="Momia"
                />
                <div>
                  <h4 class="text-black text-lg font-medium">Connect with support</h4>
                  <span class="text-dark-13 text-sm"
                    >Choose how you want to converse</span
                  >
                </div>
              </div>
            </template>
            <template v-else-if="currentView === 'chat'">
              <div class="transleftLongBasic flex items-start gap-[9px]">
                <div>
                  <h4 class="text-black text-lg font-medium">Chat with Support</h4>
                </div>
              </div>
            </template>
            <div
              v-if="currentView"
              class="flex_center transInLongBasic"
              :style="{ height: currentView === 'speak' ? 'calc(100% - 60px)' : '' }"
            >
              <div
                class="h-full max-h-[350px] w-full max-w-[350px] aspect-square flex_center text-center flex-col relative gap-[11px]"
              >
                <svg
                  class="w-full block absolute top-0 left-0 h-full"
                  width="330"
                  height="344"
                  viewBox="0 0 330 344"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="164"
                    cy="164"
                    r="164"
                    fill="url(#paint0_radial_540_1431)"
                    fill-opacity="0.08"
                  />
                  <circle
                    cx="166"
                    cy="180"
                    r="164"
                    fill="url(#paint1_radial_540_1431)"
                    fill-opacity="0.08"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_540_1431"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(172.458 8.45846) rotate(91.5163) scale(319.653)"
                    >
                      <stop stop-color="#471EA5" stop-opacity="0.2" />
                      <stop offset="1" stop-color="#1B0B3F" stop-opacity="0.1" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_540_1431"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(174.458 24.4585) rotate(91.5163) scale(319.653)"
                    >
                      <stop stop-color="#471EA5" stop-opacity="0.2" />
                      <stop offset="1" stop-color="#1B0B3F" stop-opacity="0.1" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  class="overflow-hidden flex_center icon__linear__background Btn continum noScale"
                >
                  <img
                    class="w-full max-w-[75%] block object-contain object-top rounded-full"
                    src="/images/temp/avatar.png"
                    alt="Folake"
                  />
                </div>
                <p class="text-xl font-medium text-dark-3 relative">Folake Pakurumo</p>
                <a
                  href="tel:+2347043901625"
                  class="text-sm font-medium text-font-5 relative"
                >
                  +2347043901625
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="currentView !== 'speak'"
          :style="{ padding: `0 ${maxPadding}px` }"
          class="card__content__area overflow-hidden relative"
        >
          <div
            v-if="!currentView"
            class="transInLongBasic align_auto gap-[30px!important] mt-[21px]"
          >
            <BaseButton
              text="Speak with Landlord"
              class="borderHover noBefore"
              color="#00000000"
              height="5.4rem"
              :text-style="{
                fontWeight: '500',
                fontSize: 'var(--text_sm)',
                color: 'black',
              }"
              @click="initialButtonAction('speak')"
            />
            <BaseButton
              text="Chat with Support"
              class="borderHover noBefore"
              color="#00000000"
              height="5.4rem"
              :text-style="{
                fontWeight: '500',
                fontSize: 'var(--text_sm)',
                color: 'black',
              }"
              @click="initialButtonAction('chat')"
            />
          </div>
          <div
            v-else-if="currentView === 'chat'"
            class="h-full overflow-hidden transInLongBasic justify_auto pb-3 gap-[0!important] relative"
          >
            <div
              @scroll="setOnScroll"
              ref="scrollRef"
              class="overflow-auto flex flex-col gap-4 py-4 hidden__hover relative"
            >
              <div
                v-for="(items, index) in currentChatHistory"
                :key="index + 21231"
                class="max-w-[75%]"
                :class="{
                  'ml-auto transInBasic': items.user,
                  'mr-auto': !items.user,
                  'mt-auto': !index,
                }"
              >
                <div
                  :class="{
                    'bg-main-20': !items.user,
                  }"
                  class="bubble border-[1px] border-bc rounded-[10px] p-4"
                >
                  <span class="text-font-5 text-sm">{{ items.message }}</span>
                </div>
                <span
                  :class="{
                    'text-right': items.user,
                  }"
                  class="text-font-4 text-xs block"
                  >{{ items.timeStamp }}</span
                >
              </div>
              <!-- typying bubble -->
              <Transition name="slide-up">
                <div
                  v-if="isReplying"
                  class="transInBasic bubble bg-main-20 border-[1px] border-bc rounded-[20px] p-4 max-w-[75%] inline-block mr-auto h-[4rem]"
                >
                  <BaseSpinner
                    top-movement="6px"
                    ball-size="12px"
                    style="height: 100%"
                    color="var(--bg_color6)"
                  />
                </div>
              </Transition>
            </div>
            <BaseButton
              title="To Bottom"
              :style="{
                bottom: `${
                  bottomShadow && currentScrollTop < fixedScrollTop ? 100 : 25
                }px`,
              }"
              :elevation="2"
              color="var(--bg_color6)"
              height="3.5rem"
              width="3.5rem"
              min-width="3.5rem"
              min-height="3.5rem"
              max-width="17rem"
              class="rounded absolute right-[12px] rotate-90 noScale"
              @click="scrollBottom(true)"
            >
              <SvgArrowRight />
            </BaseButton>

            <form
              :class="{ activeShadow, bottomShadow }"
              @submit.prevent="addUserMessage"
              class="h-mc relative mm noBorder rounded-[40px]"
            >
              <input
                type="text"
                class="bg-white h-[52px] rounded-[40px] large"
                style="padding-inline: 12px 57px !important"
                placeholder="Send a message to see functionality"
                v-model="chatInput"
                required
              />
              <BaseButton
                :disabled="!chatInput || chatInput?.length === 0"
                type="submit"
                :elevation="1"
                color="var(--bg_color6)"
                height="3.5rem"
                width="3.5rem"
                min-width="3.5rem"
                min-height="3.5rem"
                max-width="17rem"
                class="rounded ml-auto absolute top-1/2 -translate-y-1/2 right-[12px] -rotate-45 hover:rotate-0 noScale"
              >
                <SvgArrowRight />
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
const { emit, on, off } = useEventBus();
const { $getCurrentTimestamp } = useNuxtApp();

const instance = getCurrentInstance();
const maxWidth = ref<number>(500);
const maxHeight = ref<number>(190);
const maxPadding = ref<number>(32);
const loading = ref<boolean>(false);
const showModal = ref<boolean>(false);
const activeShadow = ref(false);
const bottomShadow = ref(false);
const currentView = ref<string | null>(null);
const currentScrollHeight = ref<number>(0);
const fixedScrollTop = ref<number>(0);
const currentScrollTop = ref<number>(0);
const currentChatHistory = ref([
  { user: true, message: "I need help", timeStamp: $getCurrentTimestamp() },
  { user: true, message: "My Pipes are frozen", timeStamp: $getCurrentTimestamp() },
]);
const isReplying = ref<boolean>(false);
const chatInput = ref<string>("");
const setOnScroll = () => {
  const ref = instance?.proxy?.$refs?.scrollRef as HTMLElement;
  if (ref) {
    const contentHeight = ref.scrollHeight;
    const contentWidth = ref.scrollWidth;
    const clientHeight = ref.clientHeight;
    const clientWidth = ref.clientWidth;

    currentScrollTop.value = Number(ref.scrollTop.toFixed(0));
    if (ref.scrollTop) activeShadow.value = true;
    else activeShadow.value = false;
    if (contentHeight > clientHeight || contentWidth > clientWidth) {
      bottomShadow.value = true;
    } else bottomShadow.value = false;
  }
};
const scrollBottom = (disableSetter: boolean = false) => {
  const ref = instance?.proxy?.$refs?.scrollRef as HTMLElement;
  if (ref) {
    const hight = ref.scrollHeight;
    ref.scrollTop = hight;

    if (!disableSetter) fixedScrollTop.value = Number(ref.scrollTop.toFixed(0));
  }
};
const openModal = (val: number) => {
  showModal.value = true;
  setTimeout(() => {}, 200);
};
const closeModal = () => {
  if (loading.value) return;
  showModal.value = false;
  setTimeout(() => {
    currentView.value = null;
    maxWidth.value = 500;
    maxHeight.value = 190;
    maxPadding.value = 32;
    fixedScrollTop.value = 0;
    currentScrollHeight.value = 0;
    currentScrollTop.value = 0;
    activeShadow.value = false;
    bottomShadow.value = false;
  }, 200);
};
const initialButtonAction = (actionType: string) => {
  currentView.value = actionType;
  if (actionType === "speak") {
    maxWidth.value = 707;
    maxHeight.value = 450;
  } else {
    maxWidth.value = 969;
    maxHeight.value = 819;
    setTimeout(() => {
      scrollBottom();
      setOnScroll();
    }, 500);
    setTimeout(() => {
      scrollBottom();
    }, 1000);
  }
  maxPadding.value = 21;
};
const addUserMessage = () => {
  if (!chatInput.value) return;
  scrollBottom();
  currentChatHistory.value.push({
    user: true,
    message: chatInput.value,
    timeStamp: $getCurrentTimestamp(),
  });
  chatInput.value = "";
  setOnScroll();
  isReplying.value = true;
  setTimeout(() => {
    scrollBottom();
    setTimeout(() => {
      isReplying.value = false;
      setTimeout(() => {
        currentChatHistory.value.push({
          user: false,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem beatae eligendi voluptates quibusdam minima ducimus quas optio ipsum corrupti deleniti? Qui, officia laudantium. Eius, pariatur laudantium obcaecati excepturi deserunt odit doloremque amet dolor ullam! Recusandae iste fuga mollitia ullam nostrum incidunt, cupiditate, impedit facilis itaque ratione rerum fugiat autem omnis velit veritatis minima. Consequuntur illo laboriosam asperiores hic? Ipsam reiciendis ad id fugiat modi praesentium consequatur harum vitae amet soluta? Autem, inventore ipsum dicta voluptatem qui tenetur a? Deleniti, asperiores? Ad quod mollitia rem? Hic quia voluptatem earum accusantium quae culpa consequuntur, aliquid tempore qui minus distinctio sit saepe veniam.",
          timeStamp: $getCurrentTimestamp(),
        });
        setTimeout(() => {
          scrollBottom();
        }, 0);
      }, 300);
    }, 2000);
  }, 50);
};
onMounted(() => {
  on("openSupportModal", ({ val }: any) => {
    openModal(val);
  });
});
onUnmounted(() => {
  off("openSupportModal");
});
</script>

<style lang="scss" scoped>
.mm.relative {
  box-shadow: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    max-width: 50%;
    height: 1px;
    width: 0px;
    transition: all 0.4s ease-in-out !important;
  }

  &:not(.noBorder) {
    &::before,
    &::after {
      content: "";
      background: var(--border_color2);
    }
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:first-child {
    &::before,
    &::after {
      bottom: 0px;
    }
  }
  &:last-child {
    &::before,
    &::after {
      top: 0px;
    }
  }
  &.activeShadow,
  &.bottomShadow {
    &::before,
    &::after {
      width: 100%;
    }
    box-shadow: 0px -2px 24px 8px rgba(142, 142, 142, 0.08);
  }
}
</style>
