<template>
  <div class="border-[1px] border-bc- shadow-md rounded-lg p-6 mb-[24px] form__section">
    <h3 class="font-rhd sm:text-p text-lg text-font-6 mb-4">Filter Properties</h3>

    <div class="grid md:grid-cols-3 gap-4">
      <!-- Price Range Filter -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Price Range </label>
        <div class="flex space-x-2">
          <BaseCurrencyInput
            placeholder="Min"
            :options="{
              distractionFree: {
                hideCurrencySymbol: false,
                hideNegligibleDecimalDigits: true,
                hideGroupingSymbol: true,
              },
              autoDecimalDigits: false,
              precision: 0,
              valueRange: {
                min: 0,
              },
              locale: 'en-NG',
              currency: 'NGN',
            }"
            class="form-control input_field"
            v-model.number="priceMin"
          />
          <BaseCurrencyInput
            placeholder="Max"
            :options="{
              distractionFree: {
                hideCurrencySymbol: false,
                hideNegligibleDecimalDigits: true,
                hideGroupingSymbol: true,
              },
              autoDecimalDigits: false,
              precision: 0,
              valueRange: {
                min: 0,
              },
              locale: 'en-NG',
              currency: 'NGN',
            }"
            class="form-control input_field"
            v-model.number="priceMax"
          />
        </div>
      </div>

      <!-- Location Filter -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Location </label>
        <select v-model="selectedLocation" class="w-full p-2 border rounded-md">
          <option value="">All Locations</option>
          <option v-for="location in uniqueLocations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>
      </div>

      <!-- Rating Filter -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Minimum Rating
        </label>
        <div class="flex_between preventDefaultTransition ml-3">
          <VSlider
            class="sliderInput"
            width="100%"
            density="compact"
            :elevation="0"
            hide-details
            :step="0.1"
            messages=""
            :track-size="6"
            track-color="var(--text_dark)"
            track-fill-color="var(--bg_color6)"
            :thumb-size="20"
            :max="5"
            v-model.number="minRating"
          ></VSlider>
          <!-- <input
            type="range"
            v-model.number="minRating"
            min="0"
            max="5"
            step="0.5"
            class="w-full"
          /> -->
          <span class="ml-2 text-sm block min-w-[10%] text-right">{{ minRating }}</span>
        </div>
      </div>
    </div>

    <!-- Features Filter -->
    <div class="mt-4 font-cg">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Select Amenities
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="feature in allFeatures"
          :key="feature"
          @click="toggleFeature(feature)"
          :class="[
            'px-3 py-1 rounded-full text-sm',
            selectedFeatures.includes(feature)
              ? 'bg-main-6 text-font-3 font-semibold'
              : 'bg-gray-200 text-gray-700',
          ]"
        >
          {{ feature }}
        </button>
      </div>
    </div>

    <!-- Apply Filters Button -->
    <div class="mt-6 flex justify-end">
      <BaseButton
        class="pill"
        height="3.6rem"
        min-height="auto"
        width="max-content"
        color="var(--bg_color6)"
        text="Apply Filters"
        :text-style="{
          fontSize: 'var(--text_sm)',
          color: 'var(--text_dark3)',
        }"
        @click="applyFilters"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["filter-properties"]);

const props = defineProps({
  allProperties: {
    type: Array,
    required: true,
  },
});

// Filter states
const priceMin = ref(null);
const priceMax = ref(null);
const selectedLocation = ref("");
const minRating = ref(0);
const selectedFeatures = ref([]);

// Computed unique locations and features
const uniqueLocations = computed(() => [
  ...new Set(props.allProperties.map((p) => p.location)),
]);

const allFeatures = computed(() => [
  ...new Set(props.allProperties.flatMap((p) => p.features)),
]);

// Toggle feature selection
const toggleFeature = (feature) => {
  if (selectedFeatures.value.includes(feature)) {
    selectedFeatures.value = selectedFeatures.value.filter((f) => f !== feature);
  } else {
    selectedFeatures.value.push(feature);
  }
};

// Apply filters method
const applyFilters = () => {
  const filteredProperties = props.allProperties.filter((property) => {
    // Price range filter
    const priceInRange =
      (!priceMin.value || property.rentPrice >= priceMin.value) &&
      (!priceMax.value || property.rentPrice <= priceMax.value);

    // Location filter
    const locationMatches =
      !selectedLocation.value || property.location === selectedLocation.value;

    // Rating filter
    const ratingMeetsMinimum = property.rating >= minRating.value;

    // Features filter
    const hasRequiredFeatures =
      selectedFeatures.value.length === 0 ||
      selectedFeatures.value.every((feature) => property.features.includes(feature));

    return priceInRange && locationMatches && ratingMeetsMinimum && hasRequiredFeatures;
  });

  // Emit filtered properties
  emit("filter-properties", filteredProperties);
};
</script>
