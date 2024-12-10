<template>
  <section
    style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
    class="w-full flex_between flex-wrap gap-[15px] transInBasic md:px-[24px] px-[16px] pt-[12px] pb-[16px] bg-font border-[1px] border-bc-5 border-t-0 rounded-bl-[12px] rounded-br-[12px] table__footer"
  >
    <BaseButton
      title="Previous page"
      variant="outlined"
      height="3.6rem"
      min-height="auto"
      min-width="max-content"
      width="max-content"
      color="var(--border_color9)"
      class="hidden_sm"
      text="Previous"
      :text-style="{
        fontSize: 'var(--text_sm)',
        color: 'var(--text_dark14)',
      }"
    />
    <BaseButton
      title="Previous page"
      variant="outlined"
      style="padding: 0"
      height="3.6rem"
      min-height="3.6rem"
      min-width="3.6rem"
      width="3.6rem"
      color="var(--border_color9)"
      class="visible_sm"
      :svg="true"
      svg-left="Arrow/Left"
    />
    <!-- <span class="font-Inter text-sm text-font-14">Page 1 of 10</span> -->
    <VPagination
      class="tablePagination preventDefaultTransition"
      color="var(--bg_color6)"
      active-color="var(--bg_color6)"
      :length="17"
      :total-visible="7"
      v-model="page"
    ></VPagination>
    <BaseButton
      title="Next page"
      variant="outlined"
      height="3.6rem"
      min-height="auto"
      min-width="max-content"
      width="max-content"
      color="var(--border_color9)"
      class="hidden_sm"
      text="Next"
      :text-style="{
        fontSize: 'var(--text_sm)',
        color: 'var(--text_dark14)',
      }"
    />
    <BaseButton
      title="Next page"
      variant="outlined"
      style="padding: 0"
      height="3.6rem"
      min-height="3.6rem"
      min-width="3.6rem"
      width="3.6rem"
      color="var(--border_color9)"
      class="visible_sm"
      :svg="true"
      svg-left="Arrow/Right"
    />
  </section>
</template>

<script lang="ts" setup>
const page = ref(1);
</script>

<style></style>
