<template>
  <div class="flex justify-between items-center border-b py-2 flex-wrap">
    <span class="font-semibold text-font-3">{{ label }}:</span>
    <div class="flex items-center gap-5">
      <span class="text-font-9">{{ value1 }}</span>
      <svg
        class="w-[20px] h-[20px]"
        :class="comparisonClass"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          :d="comparisonIcon"
        />
      </svg>
      <span class="text-font-9">{{ value2 }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value1: {
    type: [String, Number],
    required: true,
  },
  value2: {
    type: [String, Number],
    required: true,
  },
});

const comparisonClass = computed(() => {
  if (props.value1 > props.value2) return "text-green-500";
  if (props.value1 < props.value2) return "text-red-500";
  return "text-gray-500";
});

const comparisonIcon = computed(() => {
  if (props.value1 > props.value2) return "M13 10V3L4 14h7v7l9-11h-7z";
  if (props.value1 < props.value2) return "M7 11l5-5 5 5m0 0l-5 5-5-5";
  return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
});
</script>
