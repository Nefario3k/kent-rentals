<template>
  <div class="flex justify-between items-center border-b py-2 flex-wrap">
    <span class="font-semibold text-font-3">{{ label }}:</span>
    <div class="flex items-center gap-5">
      <template v-for="(items, index) in data" :key="items + 2131 + index">
        <span class="text-font-9">{{ items }}</span>
        <svg
          v-if="index < data.length - 1"
          class="w-[20px] h-[20px]"
          :class="comparisonClass(items, data[index + 1])"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            :d="comparisonIcon(items, data[index + 1])"
          />
        </svg>
      </template>
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
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const comparisonClass = (value1, value2) => {
  if (value1 > value2) return "text-green-500";
  if (value1 < value2) return "text-red-500";
  return "text-gray-500";
};

const comparisonIcon = (value1, value2) => {
  if (value1 > value2) return "M13 10V3L4 14h7v7l9-11h-7z";
  if (value1 < value2) return "M7 11l5-5 5 5m0 0l-5 5-5-5";
  return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
};
</script>
