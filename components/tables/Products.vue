<template>
  <div>
    <VDataTable
      hover
      hide-default-footer
      disable-sort
      :class="tableType"
      class="generic__table bg__header no_def_footer hidden_md transInBasic has_acitons"
      :loading="false"
      :mobile-breakpoint="300"
      loading-text="Fetching wallet history"
      :headers="headers"
      :footer-props="{
        pagination: pagination,
      }"
      :items="tableData"
      no-data-text="No wallet history yet!"
      return-object
      item-value="name"
      v-model="selectedTableItems"
    >
      <!-- name -->
      <template v-slot:item.name="{ item }">
        <div class="flex items-center gap-[8px]">
          <div
            class="imageWrapper w-[4rem] h-[4rem] min-w-[4rem] overflow-hidden rounded-[8px] border-[1px] border-bc aspect-auto"
          >
            <img
              :src="item.avatar"
              class="w-full h-full object-cover object-top"
              alt="Kent Rentals"
            />
          </div>
          <span class="text-sm text-font-3 font-rhd">{{ item.name }}</span>
        </div>
      </template>
      <!-- category -->
      <template v-slot:item.category="{ item }">
        <span class="min-w-max block">{{ item.category }}</span>
      </template>
      <!-- location -->
      <template v-slot:item.location="{ item }">
        <span class="block">{{ item.location }}</span>
      </template>
      <!-- price -->
      <template v-slot:item.price="{ item }">
        <span class="min-w-max block">{{ $formatCurrency(item.price) }}</span>
      </template>
      <!-- sale -->
      <template v-slot:item.sale="{ item }">
        <span class="min-w-max block">{{ $formatNumber(item.sale) }}</span>
      </template>
      <!-- date -->
      <template v-slot:item.date="{ item }">
        <span class="min-w-max block">{{ $formatDate(new Date()) }}</span>
      </template>
      <!-- status -->
      <template v-slot:item.status="{ item }">
        <Status :status="item.status" />
      </template>
      <!-- action -->
      <template v-slot:item.action="{ item }">
        <VMenu location="bottom center" :offset="5" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <BaseButton
              v-bind="props"
              color="#00000000"
              min-height="auto"
              min-width="auto"
              class="aspect-auto"
              width="3.6rem"
              height="3.6rem"
              :svg="true"
              svg-left="Dots"
            />
          </template>
          <VList class="dropDownList dropList flex flex-col gap-[1px]" min-width="175">
            <!-- View Property -->
            <VListItem
              :ripple="true"
              class=""
              @click="$globalEmit('openViewProductPanel')"
            >
              <div class="flex items-center gap-[8px]">
                <SvgEye
                  class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                  svg-stroke="var(--text_dark15)"
                />
                <VListItemTitle class=""> View Property </VListItemTitle>
              </div>
            </VListItem>
            <!-- Edit Rental Application -->
            <VListItem v-if="showCrm" :ripple="true" class="" to="/property/crm">
              <div class="flex items-center gap-[8px]">
                <SvgPencil
                  class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                  svg-stroke="var(--text_dark15)"
                />
                <VListItemTitle class=""> Edit Rental Application </VListItemTitle>
              </div>
            </VListItem>
          </VList>
        </VMenu>
      </template>
    </VDataTable>
    <div
      :class="tableType"
      class="tableExpansion visible_md border-[1px] border-bc-5 rounded-tl-[12px] rounded-tr-[12px] overflow-hidden"
    >
      <VExpansionPanels
        multiple
        class="generic__domain__expansion tableExpansion preventDefaultTransition"
      >
        <VExpansionPanel
          v-for="(item, index) in tableData"
          :key="index + 9912"
          :elevation="0"
          class="malevolent__kitchen"
        >
          <VExpansionPanelTitle class="cleave noBefore">
            <template v-slot:default>
              <div class="flex items-center gap-[8px]">
                <div
                  class="imageWrapper w-[4rem] h-[4rem] min-w-[4rem] overflow-hidden rounded-[8px] border-[1px] border-bc aspect-auto"
                >
                  <img
                    :src="item.avatar"
                    class="w-full h-full object-cover object-top"
                    alt="Kent Rentals"
                  />
                </div>
                <span class="text-sm text-font-3 font-rhd avoidDefault">{{
                  item.name
                }}</span>
              </div>
              <Status :status="item.status" />
            </template>
            <template v-slot:actions="{ expanded }">
              <SvgAngleDown
                class="w-[2rem] h-[2rem] min-w-[2rem]"
                :class="{ 'rotate-180': expanded }"
              />
            </template>
          </VExpansionPanelTitle>
          <VExpansionPanelText class="dismantle">
            <div class="flex_between w-full gap-[5px]">
              <table class="w-full">
                <tbody>
                  <tr>
                    <td class="pb-[10px] pr-[10px]">
                      <span class="min-w-max block">Category</span>
                    </td>
                    <td class="pb-[10px]">
                      {{ item.category }}
                    </td>
                  </tr>
                  <tr>
                    <td class="pb-[10px] pr-[10px]">
                      <span class="min-w-max block">Location</span>
                    </td>
                    <td class="pb-[10px]">
                      {{ item.location }}
                    </td>
                  </tr>
                  <tr>
                    <td class="pb-[10px] pr-[10px]">
                      <span class="min-w-max block">Price</span>
                    </td>
                    <td class="pb-[10px]">
                      {{ $formatCurrency(item.price) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="pb-[10px] pr-[10px]">
                      <span class="min-w-max block">Max Occ.</span>
                    </td>
                    <td class="pb-[10px]">
                      {{ $formatNumber(item.sale) }}
                    </td>
                  </tr>
                  <tr class="pb-[10px] pr-[10px]">
                    <td><span class="min-w-max block">Date</span></td>
                    <td>{{ $formatDate(new Date()) }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="">
                <VMenu
                  location="bottom center"
                  :offset="5"
                  transition="slide-y-transition"
                >
                  <template v-slot:activator="{ props }">
                    <BaseButton
                      v-bind="props"
                      color="#00000000"
                      min-height="auto"
                      min-width="auto"
                      class="aspect-auto"
                      width="3.6rem"
                      height="3.6rem"
                      :svg="true"
                      svg-left="Dots"
                    />
                  </template>
                  <VList
                    class="dropDownList dropList flex flex-col gap-[1px]"
                    min-width="175"
                  >
                    <!-- View Property -->
                    <VListItem
                      :ripple="true"
                      class=""
                      @click="$globalEmit('openViewProductPanel')"
                    >
                      <div class="flex items-center gap-[8px]">
                        <SvgEye
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class=""> View Property </VListItemTitle>
                      </div>
                    </VListItem>
                    <!-- Edit Rental Application -->
                    <VListItem v-if="showCrm" :ripple="true" class="" to="/property/crm">
                      <div class="flex items-center gap-[8px]">
                        <SvgPencil
                          class="w-[1.6rem] h-[1.6rem] min-w-[1.6rem]"
                          svg-stroke="var(--text_dark15)"
                        />
                        <VListItemTitle class="">
                          Edit Rental Application
                        </VListItemTitle>
                      </div>
                    </VListItem>
                  </VList>
                </VMenu>
              </div>
            </div>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
    </div>
    <TablesFooter v-if="tableType !== 'noFooter'" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import defaultVals from "~/utils/defaultVals";
const props = defineProps({
  tableType: {
    type: String,
    default: "",
  },
  showCrm: {
    type: Boolean,
    default: false,
  },
});
const componentEmit = defineEmits(["selectedTableItems"]);
const selectedTableItems = ref([]);
const headers = ref([
  { title: "Name", align: "start", key: "name", sortable: false },
  { title: "Category", align: "start", key: "category", sortable: false },
  { title: "Location", align: "start", key: "location", sortable: false },
  { title: "Price", align: "start", key: "price", sortable: false },
  { title: "Max Occ.", align: "start", key: "sale", sortable: false },
  { title: "Date Completed", align: "start", key: "date", sortable: false },
  { title: "Status", align: "start", key: "status", sortable: false },
  { title: "", align: "start", key: "action", sortable: false, width: "10px" },
]);

const pagination = ref({
  per_page: 10,
  current_page: 1,
  last_page: 1,
  itemsPerPageOptions: [10, 20, 30, 50],
});
const tableData = ref(defaultVals.properties);
watch(selectedTableItems, () => {
  componentEmit("selectedTableItems", selectedTableItems.value);
});
</script>

<style></style>
