<template>
  <section
    style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
    class="card__content__area form__section form__section2 form__section4 bg-font p-[24px] rounded-[12px] border-[1px] border-bc-5 mx-2 w-full max-w-[72rem]"
  >
    <VRow>
      <!-- first name -->
      <VCol :cols="12" :sm="6" class="pb-0">
        <label for="ad-first-name" class="text-sm text-font-2 inline-block mb-[6px]">
          First name <span class="text-main-4 font-Inter">*</span>
        </label>
        <input
          id="ad-first-name"
          type="text"
          placeholder="Enter first name"
          value="Davies"
        />
      </VCol>
      <!-- last name -->
      <VCol :cols="12" :sm="6" class="pb-0">
        <label for="ad-last-name" class="text-sm text-font-2 inline-block mb-[6px]">
          Last name <span class="text-main-4 font-Inter">*</span>
        </label>
        <input
          id="ad-last-name"
          type="text"
          placeholder="Enter last name"
          value="Okpeta"
        />
      </VCol>
      <!-- email-->
      <VCol :cols="12">
        <label for="ad-email" class="text-sm text-font-2 inline-block mb-[6px]">
          Email address
        </label>
        <div class="relative">
          <div
            class="flex_center absolute top-[50%] translate-y-[-50%] max-w-max left-[14px]"
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66663 3.83203L8.47073 8.5949C9.0217 8.98058 9.29719 9.17343 9.59685 9.24812C9.86154 9.3141 10.1384 9.3141 10.4031 9.24812C10.7027 9.17343 10.9782 8.98058 11.5292 8.5949L18.3333 3.83203M5.66663 14.6654H14.3333C15.7334 14.6654 16.4335 14.6654 16.9683 14.3929C17.4387 14.1532 17.8211 13.7707 18.0608 13.3003C18.3333 12.7656 18.3333 12.0655 18.3333 10.6654V5.33203C18.3333 3.9319 18.3333 3.23183 18.0608 2.69705C17.8211 2.22665 17.4387 1.8442 16.9683 1.60451C16.4335 1.33203 15.7334 1.33203 14.3333 1.33203H5.66663C4.26649 1.33203 3.56643 1.33203 3.03165 1.60451C2.56124 1.8442 2.17879 2.22665 1.93911 2.69705C1.66663 3.23183 1.66663 3.9319 1.66663 5.33203V10.6654C1.66663 12.0655 1.66663 12.7656 1.93911 13.3003C2.17879 13.7707 2.56124 14.1532 3.03165 14.3929C3.56643 14.6654 4.26649 14.6654 5.66663 14.6654Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            style="padding-left: 40px"
            id="ad-email"
            type="email"
            disabled
            readonly
            value="thenerfsenpai@gmail.com"
            placeholder="Enter email"
          />
        </div>
      </VCol>

      <!-- Avatar -->
      <VCol :cols="12">
        <ImageSelect label="OL" input-label="ac-avatar" />
      </VCol>
      <!-- buttons-->
      <VCol :cols="12">
        <div class="flex items-center justify-end sm:gap-[16px] gap-[10px] flex-wrap">
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
            text="Save changes"
            :text-style="{
              fontSize: 'var(--text_sm)',
              color: 'var(--text_dark3)',
            }"
          />
        </div>
      </VCol>
    </VRow>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
