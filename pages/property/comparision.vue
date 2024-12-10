<template>
  <section class="page_main_section">
    <section class="py-[30px] dashboard__section">
      <section class="main__container">
        <h3 class="font-rhd text-p text-font-6 mb-0">Compare Properties</h3>
        <h4 class="font-rhd text-sm text-bc-7 mb-[20px]">
          Compare properties against other estate properties
        </h4>

        <!-- revenue -->
        <div class="">
          <div
            class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] p-[24px]"
          >
            <div class="">
              <!-- Add Filters Component -->
              <PropertyFilters
                :all-properties="estateProperties"
                @filter-properties="updateFilteredProperties"
              />
              <div class="grid md:grid-cols-2 gap-[24px] font-cg">
                <!-- Left Side: User's Properties -->
                <div class="border-[1px] border-bc-5 shadow-lg rounded-lg p-6">
                  <h2 class="font-rhd sm:text-p text-lg text-font-6 mb-4">
                    Estate Property 1
                  </h2>
                  <PropertySelector
                    :properties="filteredEstateProperties"
                    @select-property="selectUserProperty"
                  />
                  <PropertyCard
                    v-if="selectedUserProperty"
                    :property="selectedUserProperty"
                  />
                </div>

                <!-- Right Side: Estate Properties -->
                <div class="border-[1px] border-bc-5 shadow-lg rounded-lg p-6">
                  <h2 class="font-rhd sm:text-p text-lg text-font-6 mb-4">
                    Estate Property 2
                  </h2>
                  <PropertySelector
                    :properties="filteredEstateProperties"
                    @select-property="selectEstateProperty"
                  />
                  <PropertyCard
                    v-if="selectedEstateProperty"
                    :property="selectedEstateProperty"
                  />
                </div>
              </div>

              <!-- Comparison Section -->
              <div
                v-if="selectedUserProperty && selectedEstateProperty"
                class="mt-8 font-cg"
              >
                <h2 class="font-rhd sm:text-p text-lg text-font-6 mb-4 text-center">
                  Comparison Details
                </h2>
                <PropertyComparison
                  :property1="selectedUserProperty"
                  :property2="selectedEstateProperty"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import defaultVals from "~/utils/defaultVals";
const appResourceStore = useAppResourceStore();

const estateProperties = ref(defaultVals.properties);

const selectedUserProperty = ref<any>(null);
const selectedEstateProperty = ref<any>(null);

const selectUserProperty = (property: any) => {
  selectedUserProperty.value = property;
};

const selectEstateProperty = (property: any) => {
  selectedEstateProperty.value = property;
};

const filteredEstateProperties = ref(estateProperties.value);

const updateFilteredProperties = (filteredProperties: any) => {
  filteredEstateProperties.value = filteredProperties.filter((p: any) =>
    estateProperties.value.some((ep) => ep.id === p.id)
  );

  selectedUserProperty.value = null;
  selectedEstateProperty.value = null;
};

const scrollBottom = (allow: boolean = false) => {
  if (allow || (selectedUserProperty.value && selectedEstateProperty.value)) {
    setTimeout(() => {
      const html = document.querySelector("html") as HTMLElement;
      if (html) {
        html.scrollTop = html.scrollHeight;
      }
    }, 200);
  }
};

onMounted(() => {
  if (appResourceStore.isCompare) {
    function getRandomNumber() {
      return Math.floor(Math.random() * estateProperties.value.length);
    }
    selectedUserProperty.value = estateProperties.value[getRandomNumber()];
    appResourceStore.isCompare = false;
    scrollBottom(true);
  }
});

watch([selectedUserProperty, selectedEstateProperty], () => {
  scrollBottom();
});
</script>

<style></style>
