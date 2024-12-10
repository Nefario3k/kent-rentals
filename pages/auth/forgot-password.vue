<template>
  <section class="noTransition page_main_section">
    <section style="grid-gap: 0" class="auth__section align_auto min-h-screen relative">
      <div
        class="transleftBasic overlflow-hidden h-screen imageWrapper sticky top-0 bottom-0 max-w-[35%]"
      >
        <img
          class="hidden_md h-full w-full object-top object-cover"
          src="/images/auth/forgot.jpg"
          alt="Kent Rentals"
        />
        <img
          class="visible_md h-full w-full object-top object-cover"
          src="/images/auth/forgot-mobile.jpg"
          alt="Kent Rentals"
        />
        <div
          class="absolute top-0 left-0 h-full w-full"
          style="
            background: linear-gradient(
              93deg,
              rgba(28, 33, 43, 0.7),
              rgba(28, 33, 43, 0.7) 20%
            );
          "
        ></div>
        <header
          class="h-mc minh-mc topInfoHeader p-5 max-w-[69.9rem] mx-auto pt-[36px] pb-[12px] px-[16px] w-full absolute top-0 left-[50%] translate-x-[-50%]"
        >
          <div class="flex_between gap-5 flex-wrap">
            <NuxtLink class="max-w-max block" to="/">
              <img
                class="min-w-max h-[4rem] object-contain"
                src="/logo.png"
                alt="Kent Rentals"
              />
            </NuxtLink>
            <NuxtLink class="group text-md text-font" to="/">
              <span class="group-hover:text-main-4 text-font">Contact Support</span>
            </NuxtLink>
          </div>
        </header>
      </div>
      <section
        style="grid-gap: 0 !important"
        class="transrightBasic form__section form__section3 justify_auto min-h-[inherit]"
      >
        <section class="auth__body px-[16px] max-w-[45.2rem] mx-auto flex_center w-full">
          <form autocomplete="new-password" class="py-[24px]">
            <img
              class="object-cover object-center w-[6rem] h-[6rem] aspect-auto rounded-full block mx-auto mb-[16px]"
              src="/logo.png"
              alt="Kent Rentals"
            />
            <VTabsWindow v-model="tabIndicator">
              <VTabsWindowItem>
                <VRow>
                  <VCol :cols="12" class="text-center mb-p-[12px]">
                    <div class="mx-auto w-full max-w-[35.2rem]">
                      <h1
                        class="sm:text-[3.6rem] text-p text-font-3 font-semibold font-Lora mb-[10px]"
                      >
                        Forgot Password?
                      </h1>
                      <h3 class="sm:text-md text-sm text-font-2 font-medium">
                        No worries, we will send reset instructions
                      </h3>
                    </div>
                  </VCol>
                  <!-- reset-email-address -->
                  <VCol :cols="12" class="">
                    <label
                      for="reset-email-address"
                      class="text-sm text-font-2 inline-block mb-[6px]"
                    >
                      Email Address <span class="text-font-8 font-Inter">*</span>
                    </label>
                    <input
                      class="bg-white"
                      autocomplete="new-password"
                      id="reset-email-address"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </VCol>
                  <!-- btn -->
                  <VCol :cols="12" class="">
                    <BaseButton
                      :elevation="1"
                      class="pill scaleDown"
                      height="4.8rem"
                      width="100%"
                      color="var(--bg_color6)"
                      text="Verify account"
                      :text-style="{
                        fontSize: 'var(--text_md)',
                        color: 'var(--text_dark3)',
                      }"
                      @click="tabIndicator = 1"
                    />
                  </VCol>
                </VRow>
              </VTabsWindowItem>
              <VTabsWindowItem>
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
                      :elevation="1"
                      class="pill scaleDown"
                      height="4.8rem"
                      width="100%"
                      color="var(--bg_color6)"
                      text="Proceed"
                      :text-style="{
                        fontSize: 'var(--text_md)',
                        color: 'var(--text_dark3)',
                      }"
                      @click="tabIndicator = 2"
                    />
                  </VCol>
                  <VCol :cols="12" class="">
                    <p class="text-md sm:text-sm text-font-5 text-center">
                      Didn’t receive the verifiation code? it could take a bit of time.
                      Request new code in 5 seconds.

                      <br />
                      <br />
                      <span class="cursor-pointer text-font-3 font-medium"
                        >Resend Code</span
                      >
                    </p>
                  </VCol>
                </VRow>
              </VTabsWindowItem>
              <VTabsWindowItem>
                <VRow>
                  <VCol :cols="12" class="text-center mb-p-[12px]">
                    <div class="mx-auto w-full max-w-[35.2rem]">
                      <h1
                        class="sm:text-[3.6rem] text-p text-font-3 font-semibold font-Lora mb-[10px]"
                      >
                        Set New Password
                      </h1>
                      <h3 class="sm:text-md text-sm text-font-2 font-medium">
                        Must be at least 6 characters
                      </h3>
                    </div>
                  </VCol>
                  <!-- reset-password -->
                  <VCol :cols="12" class="">
                    <label
                      for="reset-password"
                      class="text-sm text-font-2 inline-block mb-[6px]"
                    >
                      New Password <span class="text-font-8 font-Inter">*</span>
                    </label>
                    <input
                      class="bg-white"
                      autocomplete="new-password"
                      id="reset-password"
                      type="password"
                      placeholder="Enter new password here"
                    />
                  </VCol>
                  <!-- con-reset-password -->
                  <VCol :cols="12" class="">
                    <label
                      for="con-reset-password"
                      class="text-sm text-font-2 inline-block mb-[6px]"
                    >
                      Confirm New Password <span class="text-font-8 font-Inter">*</span>
                    </label>
                    <input
                      class="bg-white"
                      autocomplete="new-password"
                      id="con-reset-password"
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </VCol>
                  <!-- btn -->
                  <VCol :cols="12" class="">
                    <BaseButton
                      :elevation="1"
                      class="pill scaleDown"
                      height="4.8rem"
                      width="100%"
                      color="var(--bg_color6)"
                      text="Reset Password"
                      :text-style="{
                        fontSize: 'var(--text_md)',
                        color: 'var(--text_dark3)',
                      }"
                      @click="tabIndicator = 0"
                    />
                  </VCol>
                </VRow>
              </VTabsWindowItem>
            </VTabsWindow>
            <div class="flex_center">
              <BaseButton
                to="/auth/login"
                :ripple="false"
                title="Back"
                style="border-radius: 0%"
                color="transparent"
                class="noBefore my-[24px]"
                width="100%"
                max-width="max-content"
                height="3rem"
                :svg="true"
                svg-left="arrow/Left"
                text="Back to Login"
              />
            </div>
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
  title: "Reset my password - Kent Rentals | Your estate rental solution",
  ogTitle: "Reset my password - Kent Rentals | Your estate rental solution",
});

useHead({
  title: "Reset my password - Kent Rentals | Your estate rental solution",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "Reset my password - Kent Rentals | Your estate rental solution",
    },
  ],
});
</script>

<style></style>
