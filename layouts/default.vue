<template>
  <VApp>
    <ClientOnly>
      <NavigationPanel />
      <NavigationBar />
      <section class="generic__mount__domain">
        <VMain class="main-page-wrapper">
          <BaseOffline />
          <slot />
        </VMain>
      </section>
      <VFab
        @click="$globalEmit('openSupportModal')"
        :active="fabChat"
        :appear="fabChat"
        rounded="circle"
        :elevation="5"
        color="var(--success_color)"
        location="bottom end"
        size="50"
        title="Chat"
        app
        class="fabActive"
      >
        <SvgChat />
      </VFab>
      <ModalsSupport />
      <PanelsViewProduct />
      <ModalsNotification />
    </ClientOnly>
  </VApp>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const fabChat = ref<boolean>(false);
onMounted(() => {
  setTimeout(() => {
    fabChat.value = true;
  }, 2000);
});
</script>
