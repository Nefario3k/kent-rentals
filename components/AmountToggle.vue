<template>
  <p @click="isFullAmount = !isFullAmount">
    <template v-if="amountType === 'currency'">
      <template v-if="isFullAmount">{{ $formatCurrency(amount) }}</template>
      <template v-else>{{ $formatCurrencyReview(amount) }}</template>
    </template>
    <template v-else>
      <template v-if="isFullAmount">{{ $formatNumber(amount) }}</template>
      <template v-else>{{ $formatNumberReview(amount) }}</template>
    </template>
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  amountType: {
    type: String,
    default: "currency",
  },
  showDefaultFull: {
    type: Boolean,
    default: false,
  },
});
const isFullAmount = ref<boolean>(false);
onMounted(() => {
  if (props.showDefaultFull) isFullAmount.value = true;
});
</script>

<style></style>
