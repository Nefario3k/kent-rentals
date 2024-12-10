<template>
  <form autocomplete="new-password">
    <section class="card__content__area form__section form__section2 form__section4">
      <VRow>
        <VCol :cols="12" class="pb-0">
          <div class="pb-[16px] border-b border-bc-5">
            <p class="text-lg font-semibold font-rhd text-font-12">Password</p>
            <span class="text-sm font-rhd text-font-9"
              >Please enter your current password to change your password.</span
            >
          </div>
        </VCol>
        <!-- current password -->
        <VCol :cols="12" class="pb-0">
          <div class="pb-[16px] passwordWrapper border-b border-bc-5">
            <label
              for="ad-current-password"
              class="text-sm text-font-2 inline-block mb-[6px]"
            >
              Current password <span class="text-main-4 font-Inter">*</span>
            </label>
            <input
              style="background: var(--text_light)"
              id="ad-current-password"
              type="password"
              placeholder="Enter current password"
            />
          </div>
        </VCol>
        <!-- new password -->
        <VCol :cols="12" class="pb-0">
          <div class="pb-[16px] passwordWrapper border-b border-bc-5">
            <label
              for="ad-new-password"
              class="text-sm text-font-2 inline-block mb-[6px]"
            >
              New password <span class="text-main-4 font-Inter">*</span>
            </label>
            <div class="w-full">
              <input
                style="background: var(--text_light)"
                id="ad-new-password"
                type="password"
                placeholder="Enter new password"
              />
              <span class="font-rhd text-sm text-font-9"
                >Your new password must be more than 8 characters.</span
              >
            </div>
          </div>
        </VCol>
        <!-- Confirm new password -->
        <VCol :cols="12" class="pb-0">
          <div class="pb-[16px] passwordWrapper border-b border-bc-5">
            <label for="ad-cn-password" class="text-sm text-font-2 inline-block mb-[6px]">
              Confirm new password <span class="text-main-4 font-Inter">*</span>
            </label>
            <input
              style="background: var(--text_light)"
              id="ad-cn-password"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
        </VCol>
        <!-- buttons-->
        <VCol :cols="12">
          <div
            class="flex items-center justify-end sm:gap-[16px] gap-[10px] flex-wrap mt-[4px]"
          >
            <BaseButton
              style="border: 1px solid var(--border_color2)"
              class="pill"
              height="3.6rem"
              min-width="auto"
              min-height="auto"
              width="max-content"
              color="var(--text_light)"
              text="Cancel"
              :text-style="{
                fontSize: 'var(--text_sm)',
                color: 'var(--text_dark3)',
              }"
            />
            <BaseButton
              class="pill"
              height="3.6rem"
              min-height="auto"
              width="max-content"
              color="var(--bg_color6)"
              text="Update password"
              :text-style="{
                fontSize: 'var(--text_sm)',
                color: 'var(--text_dark3)',
              }"
            />
          </div>
        </VCol>
      </VRow>
    </section>
  </form>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.passwordWrapper {
  display: flex;
  grid-gap: 32px;
  margin-top: 4px;
  label {
    min-width: max-content;
    width: 100%;
    max-width: 28rem;
    margin: 0 !important;
  }
}
</style>
