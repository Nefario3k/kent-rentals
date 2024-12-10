<template>
  <div>
    <div class="flex items-center gap-[8px] mb-[5px]">
      <p class="font-rhd text-lg text-font-12">{{ title }}</p>
      <div
        class="flex items-center gap-[2px] max-w-max border-[1px] px-[6px] h-[2.2rem] rounded-[40px] min-w-max border-main-6 bg-main-18"
      >
        <span class="font-Inter text-xs capitalize text-font-17">{{
          $formatNumber(249)
        }}</span>
      </div>
    </div>
    <div class="flex items-center gap-[8px]">
      <span class="font-rhd text-xs text-font-12">Showing</span>
      <VMenu location="bottom center" :offset="5" transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <BaseButton
            v-bind="props"
            variant="outlined"
            color="var(--border_color9)"
            class="px-2"
            :text="currentList"
            height="2.6rem"
            min-height="2.6rem"
            min-width="4.1rem"
            :elevation="1"
            :svg="true"
            svg-right="angle/Down"
            :svg-size="16"
            :text-style="{
              fontSize: 'var(--text_xs)',
              fontFamily: `'Red Hat Display', sans-serif !important`,
              fontWeight: 500,
            }"
          />
        </template>
        <VList class="dropDownList dropList numberList flex flex-col gap-[5px]">
          <VListItem
            v-for="items in listOptions"
            :key="items + 2132"
            :ripple="true"
            :class="{ active: currentList === items }"
            @click="currentList = items"
          >
            <VListItemTitle class=""> {{ items }} </VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <span class="font-rhd text-xs text-font-12">entries</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    defualt: "w",
    required: true,
  },
  selectedTableItems: {
    type: Array<null>,
    defualt: () => [],
  },
  actionTitle: {
    type: String,
    defualt: "",
  },
  actionSubText: {
    type: String,
    defualt: "",
  },
  actionType: {
    type: String,
    defualt: "",
  },
  actionModalType: {
    type: String,
    defualt: "",
  },
});
const listOptions = ref<Array<number>>([25, 50, 75, 100, 200])
const currentList = ref<number>(listOptions.value[1])
const actionPayload = computed(()=> {
  const obj:any = {
    deleteObject: props.selectedTableItems,
  }
  if(props.actionTitle)obj.title = props.actionTitle
  if(props.actionSubText)obj.subText = props.actionSubText
  if(props.actionType)obj.deleteType = props.actionType
  if(props.actionModalType)obj.modalType = props.actionModalType
  return obj
})
</script>

<style></style>
