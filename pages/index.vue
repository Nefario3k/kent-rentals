<template>
  <section class="page_main_section">
    <section class="py-[30px] dashboard__section">
      <section class="main__container">
        <h3 class="font-rhd text-p text-font-6 mb-[20px]">Dashboard</h3>

        <!-- top cards -->
        <VRow class="preventDefaultTransition">
          <VCol :cols="12" :md="3" :sm="6">
            <DashboardTopcards
              title="Annual Payment"
              img="revenue"
              :amount="2096209"
              amount-type="currency"
            />
          </VCol>
          <VCol :cols="12" :md="3" :sm="6">
            <DashboardTopcards
              title="Monthly Payment"
              img="order"
              :amount="165098"
              amount-type="currency"
            />
          </VCol>
          <VCol :cols="12" :md="3" :sm="6">
            <DashboardTopcards
              title="Max Occupants"
              img="customer"
              :amount="3"
              amount-type="number"
            />
          </VCol>
          <VCol :cols="12" :md="3" :sm="6">
            <DashboardTopcards
              title="Total Rented Properties"
              img="product"
              :amount="1"
              amount-type="number"
            />
          </VCol>
        </VRow>
        <!-- revenue -->
        <div class="revenue pt-[16px]">
          <VRow>
            <!-- Statistic -->
            <VCol :cols="12" class="preventDefaultTransition">
              <div
                class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] flex_between flex-col p-[24px] min-h-[40.8rem] max-h-[47.1rem]"
              >
                <div class="flex_between align-end w-full gap-[10px] flex-wrap mb-[20px]">
                  <div class="">
                    <h3 class="font-medium text-font-3 text-lg">Statistic</h3>
                    <span class="font-rhd text-sm text-font-22"
                      >Average Cost of neighborhoods near you
                    </span>
                  </div>
                  <div class="flex_center gap-[16px]">
                    <div class="flex_center gap-[6px]">
                      <div
                        class="h-[1.2rem] min-w-[1.2rem] w-[1.2rem] rounded-full bg-font-2"
                      ></div>
                      <span class="font-rhd text-xs text-font-15 font-medium"
                        >Benirose</span
                      >
                    </div>
                    <div class="flex_center gap-[6px]">
                      <div
                        class="h-[1.2rem] min-w-[1.2rem] w-[1.2rem] rounded-full bg-main-6"
                      ></div>
                      <span class="font-rhd text-xs text-font-15 font-medium"
                        >Asokoro</span
                      >
                    </div>
                  </div>
                </div>
                <div class="w-full h-full">
                  <ChartLine />
                </div>
              </div>
            </VCol>
            <!-- Popular Rental Properties -->
            <VCol :cols="12" :md="6">
              <div
                class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] p-[24px] min-h-[35.8rem]"
              >
                <div class="flex_between gap-[10px] mb-[22px] w-full">
                  <div>
                    <h3 class="font-medium text-font-3 text-lg">
                      Popular Rental Properties
                    </h3>
                    <span class="font-rhd text-sm text-font-22"
                      >Popular Rental Properties Near You</span
                    >
                  </div>
                  <BaseButton
                    variant="outlined"
                    color="var(--border_color9)"
                    class="pill"
                    text="View more"
                    height="3.6rem"
                    min-height="3.6rem"
                    min-width="11.6rem"
                    :elevation="1"
                    to="/property/view"
                  />
                </div>
                <table class="w-full">
                  <tbody>
                    <tr v-for="n in 8" :key="n + 8312">
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="py-[10px] border-t-[1px] border-bc"
                      >
                        <div class="flex items-center gap-[8px]">
                          <div
                            class="imageWrapper w-[4rem] h-[4rem] min-w-[4rem] overflow-hidden rounded-[8px] border-[1px] border-bc aspect-auto"
                          >
                            <img
                              src="/images/temp/1.jpg"
                              class="w-full h-full object-cover object-top"
                              alt="Kent Rentals"
                            />
                          </div>
                          <div>
                            <span class="text-sm text-font-3 font-rhd elipsis"
                              ><strong>BeniRose</strong> | Apartment: {{ n }}</span
                            >
                            <p class="font-rhd text-xs text-font-15 elipsis">
                              {{ n % 2 ? "Block A" : "Block E" }} | 1 Bed | 1 Bath
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="py-[10px] border-t-[1px] border-bc"
                      >
                        <span class="block min-w-max text-sm text-font-2 font-rhd">{{
                          $formatDate(new Date())
                        }}</span>
                      </td>
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="text-right py-[10px] border-t-[1px] border-bc"
                      >
                        <span
                          class="inline-block min-w-max text-sm text-font-2 font-rhd font-medium"
                        >
                          {{ $formatCurrency(564932 * n) }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </VCol>
            <!-- Properties for Sale -->
            <VCol :cols="12" :md="6">
              <div
                class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] p-[24px] min-h-[35.8rem]"
              >
                <div class="flex_between gap-[10px] mb-[22px] w-full">
                  <div>
                    <h3 class="font-medium text-font-3 text-lg">Properties for Sale</h3>
                    <span class="font-rhd text-sm text-font-22"
                      >Properties for Sale Near You</span
                    >
                  </div>
                  <BaseButton
                    variant="outlined"
                    color="var(--border_color9)"
                    class="pill"
                    text="View more"
                    height="3.6rem"
                    min-height="3.6rem"
                    min-width="11.6rem"
                    :elevation="1"
                    to="/property/view"
                  />
                </div>
                <table class="w-full">
                  <tbody>
                    <tr v-for="n in 8" :key="n + 223">
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="py-[10px] border-t-[1px] border-bc"
                      >
                        <div class="flex items-center gap-[8px]">
                          <div
                            class="imageWrapper w-[4rem] h-[4rem] min-w-[4rem] overflow-hidden rounded-[8px] border-[1px] border-bc aspect-auto"
                          >
                            <img
                              src="/images/temp/2.jpg"
                              class="w-full h-full object-cover object-top"
                              alt="Kent Rentals"
                            />
                          </div>
                          <div>
                            <span class="text-sm text-font-3 font-rhd elipsis"
                              >Aso Rock</span
                            >
                            <p class="font-rhd text-xs text-font-15 elipsis">
                              {{ n % 2 ? "Block A" : "Block E" }} | 3 Bed | 4 Bath
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="py-[10px] border-t-[1px] border-bc"
                      >
                        <span class="block min-w-max text-sm text-font-2 font-rhd">{{
                          $formatDate(new Date())
                        }}</span>
                      </td>
                      <td
                        :class="{ 'border-none pt-0': n === 1 }"
                        class="py-[10px] border-t-[1px] border-bc"
                      >
                        <div class="flex justify-end gap-[10px] items-center">
                          <span
                            class="inline-block min-w-max text-sm text-font-2 font-rhd font-medium"
                          >
                            {{ $formatCurrency(12614932 * n) }}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </VCol>
            <!-- Properties in your neighborhood -->
            <VCol :cols="12">
              <div
                class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] flex_between flex-col p-[24px] min-h-[35.8rem]"
              >
                <div class="flex_between align-end w-full gap-[10px] flex-wrap">
                  <div class="flex items-center gap-[10px]">
                    <h3 class="font-medium text-font-3 text-lg">
                      Properties in your neighborhood
                    </h3>
                  </div>
                  <div class="flex_center gap-[16px]">
                    <BaseButton
                      :elevation="1"
                      class="pill"
                      height="4rem"
                      width="auto"
                      color="var(--bg_color6)"
                      text="View All"
                      :text-style="{
                        fontSize: 'var(--text_md)',
                        color: 'var(--text_dark3)',
                        fontFamily: `'Red Hat Display', sans-serif !important`,
                        fontWeight: 600,
                      }"
                      to="/property/view"
                    />
                  </div>
                </div>
                <TablesProducts class="w-full mt-[20px]" table-type="noFooter" />
              </div>
            </VCol>
          </VRow>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
const chartsData = ref({
  0: [
    { label: "Block A", size: 10, value: 18000 },
    { label: "Block B", size: 80, value: 180000 },
    { label: "Block C", size: 80, value: 16000 },
    { label: "Block D", size: 50, value: 8000000 },
    { label: "Block E", size: 80, value: 180000 },
    { label: "Block A1", size: 10, value: 90000 },
    { label: "Block B1", size: 40, value: 180000 },
    { label: "Block C1", size: 60, value: 180000 },
    { label: "Block D1", size: 70, value: 2901212 },
    { label: "Block E1", size: 70, value: 180000 },
    { label: "PENT", size: 80, value: 1232312 },
    { label: "VILLA", size: 100, value: 180000 },
  ],
  1: [
    { label: "Cream", size: 50, value: 18000 },
    { label: "Facials", size: 80, value: 180000 },
    { label: "Moisturizers", size: 80, value: 16000 },
    { label: "Body Wash", size: 50, value: 8000000 },
    { label: "Sun Screens", size: 80, value: 180000 },
    { label: "Brightening", size: 10, value: 90000 },
    { label: "Acne & Blemish", size: 40, value: 180000 },
    { label: "Hyper Pigmentation", size: 60, value: 180000 },
  ],
});
</script>

<style></style>
