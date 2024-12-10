<template>
  <div class="transInBasic border rounded-lg overflow-hidden shadow-md">
    <img
      :src="property.avatar"
      :alt="property.name"
      class="w-full h-[30rem] object-cover object-top"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2 font-rhd">{{ property.name }}</h3>
      <div class="flex justify-between items-center mb-2">
        <span class="text-green-600 font-semibold font-rhd">
          {{ $formatCurrency(property.rentPrice) }}/month
        </span>
        <div class="flex items-center">
          <svg
            class="w-[20px] h-[20px] text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
            />
          </svg>
          <span class="ml-1">{{ $formatNumber(property.rating) }}</span>
        </div>
      </div>
      <p class="text-gray-600 mb-2 flex items-center gap-2">
        <svg
          class="w-[20px] h-[20px] inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>{{ property.location }}</span>
      </p>
      <div class="mb-2">
        <h4 class="font-semibold mb-1 text-font-3">Key Amenities:</h4>
        <ul class="list-disc list-inside text-sm text-font-4">
          <li v-for="feature in property.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  property: {
    type: Object,
    required: true,
  },
});
</script>
