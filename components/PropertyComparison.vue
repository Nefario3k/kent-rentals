<template>
  <div class="bg-gray-50 p-6 rounded-lg">
    <div class="bg-white p-4 rounded-lg shadow-md border-[1px] border-bc-5">
      <h3 class="text-xl font-bold mb-4 flex items-center gap-6 max-w-max mx-auto">
        <span>{{ property1.name }}</span>
        <svg
          class="block w-[20px] h-[20px] min-w-[20px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_105_1836)">
              <path
                d="M13 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V17.9998C4 19.1043 4.89543 19.9998 6 19.9998H13M17 3.99976H18C19.1046 3.99976 20 4.89519 20 5.99976V6.99976M20 16.9998V17.9998C20 19.1043 19.1046 19.9998 18 19.9998H17M20 10.9998V12.9998M12 1.99976V21.9998"
                stroke="var(--text_dark)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_105_1836">
                <rect
                  fill="white"
                  height="24"
                  transform="translate(0 -0.000244141)"
                  width="24"
                ></rect>
              </clipPath>
            </defs>
          </g>
        </svg>
        <span>{{ property2.name }}</span>
      </h3>
      <ComparisonRow
        label="Rent Price"
        :value1="property1.rentPrice"
        :value2="property2.rentPrice"
      />
      <ComparisonRow
        label="Location"
        :value1="property1.location"
        :value2="property2.location"
      />
      <ComparisonRow
        label="Rating"
        :value1="property1.rating"
        :value2="property2.rating"
      />
      <div>
        <h4 class="font-semibold mb-2 text-font-3">Amenities Comparison</h4>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <h5 class="font-medium">{{ property1.name }} Features</h5>
            <ul class="list-disc list-inside text-sm text-font-4">
              <li
                :class="{
                  'text-main-success font-semibold': !property2.features.includes(
                    feature
                  ),
                }"
                v-for="feature in property1.features"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium">{{ property2.name }} Features</h5>
            <ul class="list-disc list-inside text-sm text-font-4">
              <li
                :class="{
                  'text-main-success font-semibold': !property1.features.includes(
                    feature
                  ),
                }"
                v-for="feature in property2.features"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  property1: {
    type: Object,
    required: true,
  },
  property2: {
    type: Object,
    required: true,
  },
});
</script>
