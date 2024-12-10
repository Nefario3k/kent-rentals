<template>
  <section class="noTransition page_main_section">
    <section style="grid-gap: 0" class="auth__section align_auto min-h-screen relative">
      <section
        style="grid-gap: 0 !important"
        class="form__section form__section3 justify_auto min-h-[inherit]"
      >
        <section class="auth__body px-[16px] max-w-[45.2rem] mx-auto flex_center w-full">
          <form autocomplete="new-password" class="py-[24px] transInBasic">
            <img
              class="object-cover object-center w-[6rem] h-[6rem] aspect-auto rounded-full block mx-auto mb-[16px]"
              src="/logo.png"
              alt="Kent Rentals"
            />
            <VRow>
              <VCol :cols="12" class="text-center mb-p-[12px]">
                <div class="mx-auto w-full max-w-[35.2rem]">
                  <h1
                    class="sm:text-[3.6rem] text-p text-font-3 font-semibold font-Lora mb-[10px]"
                  >
                    Verification Code
                  </h1>
                  <h3 class="sm:text-md text-sm text-font-2 font-medium">
                    We have sent a verification code to johndoemax@gmail.com.
                  </h3>
                </div>
              </VCol>
              <!-- reset-otp -->
              <VCol :cols="12" class="">
                <v-otp-input class="generic__otp" length="4" type="number" />
              </VCol>
              <!-- btn -->
              <VCol :cols="12" class="">
                <BaseButton
                  to="/"
                  :elevation="1"
                  class="pill"
                  height="4.8rem"
                  width="100%"
                  color="var(--bg_color6)"
                  text="Proceed"
                  :text-style="{
                    fontSize: 'var(--text_md)',
                    color: 'var(--text_dark3)',
                  }"
                />
              </VCol>
              <VCol :cols="12" class="">
                <p class="text-md sm:text-sm text-font-5 text-center">
                  Didn’t receive the verifiation code? it could take a bit of time.
                  Request new code in 5 seconds.

                  <br />
                  <br />
                  <span class="cursor-pointer text-font-3 font-medium">Resend Code</span>
                </p>
              </VCol>
            </VRow>
          </form>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
  // auth: {
  //   unauthenticatedOnly: true,
  //   navigateAuthenticatedTo: "/",
  // },
});
const tabIndicator = ref<number>(0);
useSeoMeta({
  title:
    "Reset my password - Kent Rentals | Your estate rental solution",
  ogTitle:
    "Reset my password - Kent Rentals | Your estate rental solution",
});

useHead({
  title:
    "Reset my password - Kent Rentals | Your estate rental solution",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content:
        "Reset my password - Kent Rentals | Your estate rental solution",
    },
  ],
});
</script>

<style></style>
