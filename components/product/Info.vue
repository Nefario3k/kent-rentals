<template>
  <div>
    <h3 class="font-rhd font-medium text-xl text-font-3 mb-[6px]">Full property Info</h3>
    <div class="cardItem h-full border-[1px] border-bc-13 bg-font rounded-[12px]">
      <section
        class="card__content__area form__section form__section2 form__section4 p-[24px]"
      >
        <div v-if="!toggleState" class="w-full flex_center text-center relative">
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
              class="font-Inter text-md font-medium text-font-2 inline-block"
              style="line-height: 16px"
              >No Information Added Yet</span
            >
            <br />
            <span class="font-Inter text-sm text-font-2"
              >Add property information to the your property</span
            >
          </div>
        </div>
        <!-- expansion  -->
        <VExpansionPanels
          v-else
          multiple
          class="generic__domain__expansion boxExpansion noBox preventDefaultTransition"
        >
          <VExpansionPanel
            v-for="n in 4"
            :key="n + 9912"
            :elevation="0"
            class="malevolent__kitchen"
          >
            <VExpansionPanelTitle class="cleave noBefore">
              <template v-slot:default>
                <span class="text-md text-font-12 font-rhd avoidDefault"
                  >Special Use</span
                >
              </template>
              <template v-slot:actions="{ expanded }">
                <SvgAngleDown
                  class="w-[2rem] h-[2rem] min-w-[2rem]"
                  :class="{ 'rotate-180': expanded }"
                />
              </template>
            </VExpansionPanelTitle>
            <VExpansionPanelText style="padding-inline: 0" class="dismantle">
              <div class="flex flex-col w-full gap-[24px]">
                <p class="font-Inter text-sm text-font-9 max-w-[44.1rem]">
                  I want a big house like the one in this picture
                </p>
                <img
                  class="w-full max-h-[31.5rem] h-full object-cover object-top rounded-[16px]"
                  src="/images/temp/4.jpg"
                  alt=""
                />
              </div>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </section>
      <!-- controls -->
      <div class="px-[16px] py-[8px] border-t border-bc-13">
        <BaseButton
          style="border: 1px solid var(--border_color2)"
          class="pill"
          height="3.2rem"
          min-width="auto"
          min-height="auto"
          width="max-content"
          color="var(--text_light)"
          :svg="true"
          svg-left="Plus"
          text="Add New Info"
          :text-style="{
            fontSize: 'var(--text_sm)',
            color: 'var(--text_dark3)',
          }"
          @click="$globalEmit('openManageProductInfoModal')"
        />
      </div>
    </div>
    <ModalsManageProductInfo />
  </div>
</template>

<script lang="ts" setup>
const toggleState = ref(true);
</script>

<style></style>
