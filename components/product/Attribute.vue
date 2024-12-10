<template>
  <div>
    <h3 class="font-rhd font-medium text-xl text-font-3 mb-[6px]">Amenities</h3>
    <div class="cardItem h-full border-[1px] border-bc-13 bg-font rounded-[12px]">
      <section
        class="card__content__area form__section form__section2 form__section4 overflow-hidden p-[24px]"
      >
        <VRow>
          <!-- Bathroom -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="bathroom" class="text-sm text-font-2 inline-block mb-[6px]">
              Bathroom <span class="text-main-4 font-Inter">*</span>
            </label>
            <input id="bathroom" type="number" placeholder="Bathroom" />
          </VCol>
          <!-- Kitchen -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="Kitchen" class="text-sm text-font-2 inline-block mb-[6px]">
              Kitchen <span class="text-main-4 font-Inter">*</span>
            </label>
            <input id="Kitchen" type="number" placeholder="Kitchen" />
          </VCol>
          <!-- Rooms -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="Rooms" class="text-sm text-font-2 inline-block mb-[6px]">
              Rooms <span class="text-main-4 font-Inter">*</span>
            </label>
            <input id="Rooms" type="number" placeholder="Rooms" />
          </VCol>
          <!-- Cooling Unit -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="ac" class="text-sm text-font-2 inline-block mb-[6px]">
              Cooling Unit <span class="text-main-4 font-Inter">*</span>
            </label>
            <input id="ac" type="number" placeholder="Cooling Unit" />
          </VCol>
          <!-- Celing fans -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="cf" class="text-sm text-font-2 inline-block mb-[6px]">
              Celing fans <span class="text-main-4 font-Inter">*</span>
            </label>
            <input id="cf" type="number" placeholder="Celing fans" />
          </VCol>
          <!-- Inverter -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="Inverter" class="text-sm text-font-2 inline-block mb-[6px]">
              Inverter <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="Inverter">
              <option value="" disabled selected>Select Inverter</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
          <!-- Communal Power Genrator -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="cpg" class="text-sm text-font-2 inline-block mb-[6px]">
              Communal Power Genrator <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="cpg">
              <option value="" disabled selected>Select Communal Power Genrator</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
          <!-- Pool -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="hasPool" class="text-sm text-font-2 inline-block mb-[6px]">
              Pool <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="hasPool">
              <option value="" disabled selected>Select Pool</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
          <!-- Solar System -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="ss" class="text-sm text-font-2 inline-block mb-[6px]">
              Solar System <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="ss">
              <option value="" disabled selected>Select Solar System</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
          <!-- Wardrobe -->
          <VCol :cols="12" :md="6" class="pb-0">
            <label for="wb" class="text-sm text-font-2 inline-block mb-[6px]">
              Wardrobe <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="wb">
              <option value="" disabled selected>Select Wardrobe</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
          <!-- Security -->
          <VCol :cols="12" :md="6">
            <label for="ssss" class="text-sm text-font-2 inline-block mb-[6px]">
              Security <span class="text-main-4 font-Inter">*</span>
            </label>
            <select id="ssss">
              <option value="" disabled selected>Select Security</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </VCol>
        </VRow>
      </section>
      <!-- controls -->
    </div>
    <ModalsManageAttribute />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
