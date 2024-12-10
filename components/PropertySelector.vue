<template>
  <div class="mb-4 form__section">
    <select @change="onPropertySelect" class="w-full p-2 border rounded-md">
      <option value="">Select a Property</option>
      <option v-for="property in properties" :key="property.id" :value="property.id">
        {{ property.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(["select-property"]);
const props = defineProps({
  properties: {
    type: Array,
    required: true,
  },
});

const onPropertySelect = (event) => {
  const selectedId = event.target.value;
  const selectedProperty = props.properties.find((p) => p.id === Number(selectedId));
  if (selectedProperty) {
    emit("select-property", selectedProperty);
  }
};
</script>
