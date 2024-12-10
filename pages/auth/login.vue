<template>
  <section class="noTransition page_main_section">
    <section style="grid-gap: 0" class="auth__section align_auto min-h-screen relative">
      <div
        class="transleftBasic overlflow-hidden h-screen imageWrapper sticky top-0 bottom-0 max-w-[35%]"
      >
        <img
          class="h-full w-full object-top object-cover"
          src="/images/auth/login.jpg"
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
          </div>
        </header>
      </div>
      <section
        style="grid-gap: 0 !important"
        class="transrightBasic form__section justify_auto min-h-[inherit]"
      >
        <section class="auth__body px-[16px] max-w-[45.2rem] mx-auto flex_center w-full">
          <form autocomplete="new-password" class="py-[24px]">
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
                    Welcome Back
                  </h1>
                  <h3 class="sm:text-md text-sm text-font-2 font-medium">
                    You can only Sign in with your Email & Password
                  </h3>
                </div>
              </VCol>
              <!-- log-email-address -->
              <VCol :cols="12" class="pb-0">
                <label
                  for="log-email-address"
                  class="text-sm text-font-2 inline-block mb-[6px]"
                >
                  Email Address <span class="text-font-8 font-Inter">*</span>
                </label>
                <input
                  class="bg-white"
                  autocomplete="new-password"
                  id="log-email-address"
                  type="email"
                  placeholder="Enter email address"
                />
              </VCol>
              <!-- log-password -->
              <VCol :cols="12" class="">
                <label
                  for="log-password"
                  class="text-sm text-font-2 inline-block mb-[6px]"
                >
                  Password <span class="text-font-8 font-Inter">*</span>
                </label>
                <input
                  class="bg-white"
                  autocomplete="new-password"
                  id="log-password"
                  type="password"
                  placeholder="Enter password here"
                />
              </VCol>
              <!-- btn -->
              <VCol :cols="12" class="">
                <BaseButton
                  :elevation="1"
                  class="pill"
                  height="4.8rem"
                  width="100%"
                  color="var(--bg_color6)"
                  text="Login"
                  :text-style="{
                    fontSize: 'var(--text_md)',
                    color: 'var(--text_dark3)',
                  }"
                  to="/auth/verify-account"
                />
              </VCol>
              <VCol :cols="12" class="">
                <p class="text-sm text-font-13 text-center">
                  <NuxtLink to="/auth/forgot-password" class="text-font-1 font-semibold"
                    >Forgot Password</NuxtLink
                  >
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

useSeoMeta({
  title: "Login - Kent Rentals | Your estate rental solution",
  ogTitle:
    "Login - Kent Rentals | Your estate rental solution",
});

useHead({
  title: "Login - Kent Rentals | Your estate rental solution",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content:
        "Login - Kent Rentals | Your estate rental solution",
    },
  ],
});
</script>

<style></style>
