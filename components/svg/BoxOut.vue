<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="stroke"
      d="M8 14.6663C7.45453 14.6663 6.93347 14.4469 5.89129 14.0079C3.29709 12.9153 2 12.3689 2 11.4499V5.0279M8 14.6663C8.54547 14.6663 9.06653 14.4469 10.1087 14.0079C12.7029 12.9153 14 12.3689 14 11.4499V5.0279M8 14.6663V8.01914M2 5.0279C2 5.43619 2.53438 5.69402 3.60315 6.20967L5.55061 7.14927C6.75253 7.72921 7.35353 8.01914 8 8.01914M2 5.0279C2 4.61961 2.53438 4.36179 3.60315 3.84613L4.66667 3.33301M14 5.0279C14 5.43619 13.4656 5.69402 12.3969 6.20967L10.4494 7.14927C9.24747 7.72921 8.64647 8.01914 8 8.01914M14 5.0279C14 4.61961 13.4656 4.36178 12.3969 3.84613L11.3333 3.33301M4 8.68387L5.33333 9.34861"
      :stroke="svgStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="stroke"
      d="M6.66669 1.33301L8.00002 2.66634M8.00002 2.66634L9.33335 3.99967M8.00002 2.66634L6.66669 3.99967M8.00002 2.66634L9.33335 1.33301"
      :stroke="svgStroke"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  svgStroke: {
    type: String,
    default: "var(--text_dark15)",
  },
});
</script>

<style scoped></style>
