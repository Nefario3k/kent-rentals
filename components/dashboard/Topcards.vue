<template>
  <div
    class="cardItem h-full border-[1px] border-bc-5 bg-font rounded-[12px] flex items-end"
  >
    <div class="p-[20px] w-full">
      <!-- image -->
      <div v-if="img" class="mb-[16px]">
        <img
          :src="`/svgs/dashboard/${img}.svg`"
          alt="kent-rentals"
          class="w-[3.6rem] h-[3.6rem] object-cover aspect-auto"
        />
      </div>
      <!-- title -->
      <p class="font-rhd text-md text-font-2 font-medium">{{ title }}</p>
      <!-- value -->
      <div class="flex gap-5 flex-wrap">
        <AmountToggle
          :amount="amount"
          :amount-type="amountType"
          class="font-rhd text-[3rem] text-font-3 font-semiBold cursor-pointer hover:text-font-8 preventDefaultTransition"
        />
        <div
          v-if="subAmountType === 'success'"
          class="flex items-start mt-[5px] gap-[2px] max-w-max min-w-max"
        >
          <div class="flex_center">
            <svg
              v-if="subAmountType === 'success'"
              class="min-w-max"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2526_17011)">
                <path
                  d="M18.3333 5.83301L11.7761 12.3902C11.4461 12.7202 11.2811 12.8852 11.0908 12.947C10.9234 13.0014 10.7431 13.0014 10.5758 12.947C10.3855 12.8852 10.2205 12.7202 9.89048 12.3902L7.60943 10.1091C7.27942 9.77914 7.11441 9.61413 6.92414 9.5523C6.75677 9.49792 6.57648 9.49792 6.40911 9.5523C6.21884 9.61413 6.05383 9.77914 5.72382 10.1091L1.66663 14.1663M18.3333 5.83301H12.5M18.3333 5.83301V11.6663"
                  stroke="#17B26A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2526_17011">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              v-else
              class="min-w-max"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6667 14.1663L12.1095 7.60915C11.7795 7.27914 11.6145 7.11413 11.4242 7.05231C11.2568 6.99792 11.0765 6.99792 10.9092 7.05231C10.7189 7.11413 10.5539 7.27914 10.2239 7.60915L7.94281 9.8902C7.61279 10.2202 7.44779 10.3852 7.25751 10.447C7.09014 10.5014 6.90985 10.5014 6.74248 10.447C6.55221 10.3852 6.3872 10.2202 6.05719 9.8902L2 5.83301M18.6667 14.1663H12.8333M18.6667 14.1663V8.33301"
                stroke="#F04438"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <span
            :class="{
              'text-main-success': subAmountType === 'success',
              'text-font-danger3': subAmountType !== 'success',
            }"
            class="font-Inter text-xs capitalize"
            >{{ $formatNumber(subAmount) }}%</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  amountType: {
    type: String,
    default: "currency",
  },
  subAmount: {
    type: Number,
    default: 0,
  },
  subAmountType: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
});
const isFullAmount = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.cardItem {
  background-image: url(/public/images/elipsis-pattern.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
