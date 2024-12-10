<template>
  <section class="page_main_section">
    <section class="py-[30px] dashboard__section">
      <section class="main__container">
        <h3 class="font-rhd text-p text-font-6 mb-0">All Properties</h3>
        <h4 class="font-rhd text-sm text-bc-7 mb-[20px]">
          View all company owned properties
        </h4>

        <!-- revenue -->
        <div class="">
          <div
            class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] p-[24px]"
          >
            <div class="w-full flex_between gap-[16px] flex-wrap">
              <TablesControlsNAction
                title="All Properties"
                :selected-table-items="selectedTableItems"
                action-title="Delete Properties?"
                action-sub-text="Are you sure you want to delete these properties? This action cannot be undone."
                action-type="property-bulk"
                action-modal-type="delete"
              />
              <div class="flex items-center md:gap-[20px] flex-wrap gap-[10px]">
                <div class="inputArea relative sm:min-w-[40rem] sm:w-auto w-full">
                  <input
                    id="product_search"
                    class="bg_search bg_search_left bg-transparent"
                    type="text"
                    placeholder="Search here..."
                    required
                  />
                  <label
                    for="product_search"
                    class="absolute left-[16px] top-[50%] translate-y-[-50%] w-max h-max"
                  >
                    <SvgSearch class="w-[2rem] h-[2rem]" svg-stroke="var(--bg_color14)" />
                  </label>
                </div>
                <VMenu
                  location="bottom center"
                  :offset="15"
                  transition="slide-y-transition"
                >
                  <template v-slot:activator="{ props }">
                    <BaseButton
                      v-bind="props"
                      color="var(--border_color)"
                      variant="outlined"
                      min-height="auto"
                      min-width="4.4rem"
                      class="noScale pill noBefore"
                      :ripple="false"
                      height="4rem"
                      :svg="true"
                      text="Filters"
                      svg-left="filter/Cog"
                    />
                  </template>
                  <VList
                    class="dropDownList dropList flex flex-col gap-[1px]"
                    min-width="155"
                  >
                    <!-- Edit -->
                    <VListItem :ripple="true" class="">
                      <div class="flex items-center gap-[8px]">
                        <SvgPanelBag2
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class=""> All </VListItemTitle>
                      </div>
                    </VListItem>
                    <!-- Available -->
                    <VListItem :ripple="true" class="">
                      <div class="flex items-center gap-[8px]">
                        <SvgBoxCheck
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class=""> Available </VListItemTitle>
                      </div>
                    </VListItem>
                    <!-- Sold/Rented -->
                    <VListItem :ripple="true" class="">
                      <div class="flex items-center gap-[8px]">
                        <SvgBoxLow
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class=""> Sold/Rented </VListItemTitle>
                      </div>
                    </VListItem>
                    <!-- Maintainance -->
                    <VListItem :ripple="true" class="">
                      <div class="flex items-center gap-[8px]">
                        <SvgBoxOut
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class=""> Maintainance </VListItemTitle>
                      </div>
                    </VListItem>
                  </VList>
                </VMenu>
              </div>
            </div>
            <TablesProducts
              @selectedTableItems="selectedTableItems = $event"
              class="mt-[16px]"
            />
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
const selectedTableItems = ref([]);
</script>

<style></style>
