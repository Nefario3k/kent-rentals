<template>
  <section class="pb-[30px] dashboard__section min-h-[calc(100dvh-64px)]">
    <div
      style="
        background: linear-gradient(
          90deg,
          var(--bg_color3) 0%,
          var(--border_color2) 23%,
          var(--text_dark7) 54%,
          var(--bg_color4) 100%
        );
      "
      class="w-full h-[18.4rem]"
    ></div>
    <section class="main__container mt-[-40px] transInBasic">
      <!-- user section -->
      <div class="flex_between gap-8 flex-wrap min-h-[16rem] mb-[48px]">
        <div class="flex items-center gap-[24px]">
          <div
            style="
              box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
                0px 4px 6px -2px rgba(16, 24, 40, 0.03);
            "
            class="imageWrapper w-[16rem] h-[16rem] min-w-[16rem] overflow-hidden rounded-full aspect-auto border-[5px] border-font"
          >
            <img
              style="border: 1px inset rgba(0, 0, 0, 0.08)"
              src="/images/temp/user.png"
              class="w-full h-full object-cover object-top rounded-full"
              alt="Kent Rentals"
            />
          </div>
          <h3 class="font-rhd text-[3rem] font-semibold text-font-12">Davies Okpeta</h3>
        </div>
      </div>
      <!-- tabs -->
      <VTabs
        style="border-bottom: 1px solid var(--border_color5)"
        class="generic__tabs__header noLay hiddenMobileItem preventDefaultTransition m-0"
        v-model="tabIndicator"
        center-active
        show-arrows="mobile"
        :mobile-breakpoint="759"
        slider-color="var(--text_dark3)"
        :mobile="false"
      >
        <VTab
          v-for="(items, index) in tabItems"
          :key="index + 21543"
          :ripple="false"
          class="tab-title-item"
          >{{ items }}</VTab
        >
      </VTabs>
      <!-- tab content -->
      <div class="mt-[16px]">
        <VTabsWindow v-model="tabIndicator">
          <VTabsWindowItem>
            <SettingsAccount />
          </VTabsWindowItem>
          <VTabsWindowItem> <SettingsPassword /> </VTabsWindowItem>
        </VTabsWindow>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
const tabIndicator = ref<number>(0);
const tabItems = ref<any>(["Personal info", "Password"]);
</script>

<style></style>
