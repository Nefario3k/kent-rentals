<template>
  <div
    :class="{
      'border-main-success6 bg-main-success7': status === 'good',
      'border-bc-14 bg-main-25': status === 'family',
      'border-bc-15 bg-main-26': status === 'issue',
      'border-bc-12 bg-main-22': status === 'difficult',
      'border-main-success6 bg-main-success7': status === 'rented',
      'border-bc-14 bg-main-25': status === 'available',
      'border-bc-15 bg-main-26': status === 'maintanence',
    }"
    class="flex items-center gap-[2px] max-w-max border-[1px] px-[6px] h-[2.2rem] rounded-[40px] min-w-max"
  >
    <span
      :class="{
        'text-main-success8': status === 'good',
        'text-font-23': status === 'family',
        'text-font-danger9': status === 'issue',
        'text-font-20': status === 'difficult',
        'text-main-success8': status === 'rented',
        'text-font-23': status === 'available',
        'text-font-danger9': status === 'maintanence',
      }"
      class="font-Inter text-xs capitalize avoidDefault"
      >{{ status }}</span
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  status: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
