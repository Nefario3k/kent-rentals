<template>
  <section class="page_main_section">
    <section class="py-[30px] dashboard__section">
      <section class="main__container">
        <h3 class="font-rhd text-p text-font-6 mb-0">My Properties</h3>
        <h4 class="font-rhd text-sm text-bc-7 mb-[20px]">View your properties</h4>

        <!-- revenue -->
        <div class="">
          <div
            class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] p-[24px]"
          >
            <div class="w-full flex_between gap-[16px] flex-wrap">
              <TablesControlsNAction
                title="My Properties"
                :selected-table-items="selectedTableItems"
                action-title="Delete Properties?"
                action-sub-text="Are you sure you want to delete these properties? This action cannot be undone."
                action-type="property-bulk"
                action-modal-type="delete"
              />
            </div>
            <TablesProducts
              show-crm
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
