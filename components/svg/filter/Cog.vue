<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="stroke"
      d="M2.5 5.83301H5"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M2.5 14.167H7.5"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M15 14.167H17.5"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M12.5 5.83301H17.5"
      :stroke="svgStroke"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M5 5.83301C5 5.05644 5 4.66816 5.12687 4.36187C5.29602 3.95349 5.62048 3.62903 6.02886 3.45987C6.33515 3.33301 6.72343 3.33301 7.5 3.33301C8.27657 3.33301 8.66483 3.33301 8.97117 3.45987C9.3795 3.62903 9.704 3.95349 9.87317 4.36187C10 4.66816 10 5.05644 10 5.83301C10 6.60957 10 6.99786 9.87317 7.30415C9.704 7.71252 9.3795 8.03698 8.97117 8.20614C8.66483 8.33301 8.27657 8.33301 7.5 8.33301C6.72343 8.33301 6.33515 8.33301 6.02886 8.20614C5.62048 8.03698 5.29602 7.71252 5.12687 7.30415C5 6.99786 5 6.60957 5 5.83301Z"
      :stroke="svgStroke"
      stroke-width="1.25"
    />
    <path
      class="stroke"
      d="M10 14.167C10 13.3904 10 13.0022 10.1268 12.6958C10.296 12.2875 10.6205 11.963 11.0288 11.7938C11.3352 11.667 11.7234 11.667 12.5 11.667C13.2766 11.667 13.6648 11.667 13.9712 11.7938C14.3795 11.963 14.704 12.2875 14.8732 12.6958C15 13.0022 15 13.3904 15 14.167C15 14.9436 15 15.3318 14.8732 15.6382C14.704 16.0465 14.3795 16.371 13.9712 16.5402C13.6648 16.667 13.2766 16.667 12.5 16.667C11.7234 16.667 11.3352 16.667 11.0288 16.5402C10.6205 16.371 10.296 16.0465 10.1268 15.6382C10 15.3318 10 14.9436 10 14.167Z"
      :stroke="svgStroke"
      stroke-width="1.25"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--text_dark2)",
  },
});
</script>

<style scoped></style>
