<template>
  <section class="page_main_section">
    <section class="py-[30px] dashboard__section">
      <section class="main__container">
        <div class="font-rhd flex text-lg items-center flex-wrap gap-[5px]">
          <NuxtLink to="/property/owned" class="text-bc-10">
            My Property Management
          </NuxtLink>
          <span class="text-font-6">/ Rental Application</span>
        </div>

        <div class="pt-[24px] relative">
          <VRow>
            <VCol :cols="12" :md="6">
              <div
                class="space-y-[24px] sticky top-[140px] overflow-y-auto lg:max-h-[calc(100dvh-160px)] hidden__hover"
              >
                <!-- General Information -->
                <div>
                  <h3 class="font-rhd font-medium text-xl text-font-3 mb-[6px]">
                    General Information
                  </h3>
                  <div
                    class="cardItem h-full border-[1px] border-bc-13 bg-font rounded-[12px] p-[24px]"
                  >
                    <section
                      class="card__content__area form__section form__section2 form__section4"
                    >
                      <VRow>
                        <!-- Property Name -->
                        <VCol :cols="12" class="pb-0">
                          <label
                            for="ps-name"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            Property Name <span class="text-main-4 font-Inter">*</span>
                          </label>
                          <input
                            id="ps-name"
                            type="text"
                            placeholder="Enter Property Name"
                            value="BeniRose 1"
                          />
                        </VCol>
                        <!-- Application Status -->
                        <VCol :cols="12" class="pb-0">
                          <label
                            for="app-status"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            Application Status
                            <span class="text-main-4 font-Inter">*</span>
                          </label>
                          <select id="app-status" value="Interested">
                            <option selected disabled value="">Select Status</option>
                            <option value="Interested">Interested</option>
                            <option value="Not Interested">Not Interested</option>
                          </select>
                        </VCol>
                        <!-- First Name -->
                        <VCol :cols="12" class="pb-0">
                          <label
                            for="fs-name"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            First Name <span class="text-main-4 font-Inter">*</span>
                          </label>
                          <input
                            id="fs-name"
                            type="text"
                            placeholder="Enter First Name"
                          />
                        </VCol>
                        <!-- Last Name -->
                        <VCol :cols="12" class="pb-0">
                          <label
                            for="ls-name"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            Last Name <span class="text-main-4 font-Inter">*</span>
                          </label>
                          <input id="ls-name" type="text" placeholder="Enter Last Name" />
                        </VCol>
                        <!-- Short Bio -->
                        <VCol :cols="12">
                          <div class="pb-[24px] border-b border-bc">
                            <label
                              for="user-Bio"
                              class="text-sm text-font-2 inline-block mb-[6px]"
                            >
                              Short Bio
                            </label>
                            <textarea
                              placeholder="Enter short bio here"
                              name=""
                              id="user-description"
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                        </VCol>
                        <!-- Job Title -->
                        <VCol :cols="12" class="pb-0">
                          <label
                            for="jd"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            Job Title <span class="text-main-4 font-Inter">*</span>
                          </label>
                          <input id="jd" type="text" placeholder="Enter Job Title" />
                        </VCol>
                        <!--  Job Location -->
                        <VCol :cols="12">
                          <label
                            for="jd-location"
                            class="text-sm text-font-2 inline-block mb-[6px]"
                          >
                            Job Location
                          </label>
                          <input
                            id="jd-location"
                            type="text"
                            placeholder="Enter Job Location"
                          />
                        </VCol>
                      </VRow>
                    </section>
                  </div>
                </div>
                <div>
                  <p class="text-sm text-dark-4 mb-3">
                    Submission Date: {{ $formatDate(new Date()) }}
                  </p>
                  <p class="text-sm text-dark-4">
                    Landlord Contact:
                    <a href="href:+2347043901625" class="text-font-1 font-semibold"
                      >+2347043901625</a
                    >
                  </p>
                </div>
              </div>
            </VCol>
            <VCol :cols="12" :md="6">
              <div class="space-y-[24px]">
                <!-- Property Images -->
                <ProductSelectImages />
                <!-- Attributes -->
                <ProductAttribute />
                <!-- Full property Info -->
                <ProductInfo />
              </div>
            </VCol>
          </VRow>
        </div>
      </section>
    </section>
    <ModalsCreateProductInfo />
  </section>
</template>

<script lang="ts" setup>
const { emit } = useEventBus();
onMounted(() => {
  setTimeout(() => {
    emit("openCreateProductInfoModal");
  }, 1000);
});
</script>

<style scoped lang="scss"></style>
