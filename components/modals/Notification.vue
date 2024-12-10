<template>
  <VDialog
    scrim="var(--scrim)"
    transition="dialog-bottom-transition"
    :model-value="showModal"
    :persistent="loading"
    :max-width="maxWidth"
    max-height="70vh"
    content-class="generic__modal"
    @update:modelValue="closeModal"
  >
    <VCard class="generic__modal-card">
      <div class="card__wrapper content-area justify_auto ga-0">
        <div class="topHeader h-mc pb-[24px]">
          <div class="flex_between gap-3 mb-[24px]">
            <div
              class="flex items-center gap-[2px] max-w-max border-[1px] px-[12px] h-[3.6rem] rounded-[40px] min-w-max border-bc-11 bg-main-20"
            >
              <span class="font-rhd text-lg capitalize text-font-3">Notification</span>
            </div>
            <ModalsCloseBtn @closeModal="closeModal" />
          </div>
          <!-- Notification Categories -->
          <div class="flex justify-center gap-4 flex-wrap">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              style="border: 1px solid transparent"
              :class="[
                'px-4 py-2 rounded-lg transition text-font-3 shadow-sm text-xs',
                activeCategory === category
                  ? 'bg-main-20 font-semibold border-bc-11'
                  : 'bg-font hover:bg-main-20',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
        <div class="card__content__area font-Lora">
          <div class="bg-gray-100 p-6 rounded-3xl">
            <div class="">
              <!-- Notifications List -->
              <div class="space-y-4">
                <NotificationCard
                  v-for="notification in filteredNotifications"
                  :key="notification.id"
                  :notification="notification"
                  @mark-read="markNotificationAsRead"
                  class="transInBasic"
                />
              </div>

              <!-- Empty State -->
              <div
                v-if="filteredNotifications.length === 0"
                class="text-center py-12 bg-white rounded-lg shadow"
              >
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <p class="mt-2 text-gray-600">No notifications in this category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
const { on, off } = useEventBus();
const maxWidth = ref(700);
const loading = ref(false);
const showModal = ref(false);

// Notification Categories
const categories = ["All", "Urgent", "Payment", "Maintenance", "Community"];

// Active category state
const activeCategory = ref("All");

// Notifications data
const notifications = ref([
  {
    id: 1,
    title: "Rent Payment Due",
    description: "Your monthly rent of $1,500 is due on the 1st of next month.",
    category: "Payment",
    date: "2024-02-25",
    isRead: false,
    icon: "dollar",
  },
  {
    id: 2,
    title: "Garbage Collection",
    description: "Put out garbage and recycling bins by 7 AM on Thursday.",
    category: "Maintenance",
    date: "2024-02-28",
    isRead: false,
    icon: "trash",
  },
  {
    id: 3,
    title: "Maintenance Inspection",
    description: "Scheduled maintenance inspection on March 5th, 10 AM - 12 PM.",
    category: "Maintenance",
    date: "2024-03-01",
    isRead: false,
    icon: "wrench",
  },
  {
    id: 4,
    title: "Community BBQ",
    description: "Neighborhood BBQ event this Saturday at the community center.",
    category: "Community",
    date: "2024-03-02",
    isRead: false,
    icon: "calendar",
  },
  {
    id: 5,
    title: "Urgent: Water Shutdown",
    description: "Planned water maintenance on March 10th, 9 AM - 3 PM.",
    category: "Urgent",
    date: "2024-03-05",
    isRead: false,
    icon: "alert",
  },
  {
    id: 6,
    title: "Rent Payment Due",
    description: "Your monthly rent of $1,500 is due on the 1st of next month.",
    category: "Payment",
    date: "2024-02-25",
    isRead: false,
    icon: "dollar",
  },
  {
    id: 7,
    title: "Garbage Collection",
    description: "Put out garbage and recycling bins by 7 AM on Thursday.",
    category: "Maintenance",
    date: "2024-02-28",
    isRead: false,
    icon: "trash",
  },
  {
    id: 8,
    title: "Maintenance Inspection",
    description: "Scheduled maintenance inspection on March 5th, 10 AM - 12 PM.",
    category: "Maintenance",
    date: "2024-03-01",
    isRead: false,
    icon: "wrench",
  },
  {
    id: 9,
    title: "Community BBQ",
    description: "Neighborhood BBQ event this Saturday at the community center.",
    category: "Community",
    date: "2024-03-02",
    isRead: false,
    icon: "calendar",
  },
  {
    id: 10,
    title: "Urgent: Water Shutdown",
    description: "Planned water maintenance on March 10th, 9 AM - 3 PM.",
    category: "Urgent",
    date: "2024-03-05",
    isRead: false,
    icon: "alert",
  },
]);

// Filtered notifications based on active category
const filteredNotifications = computed(() => {
  return notifications.value.filter(
    (notification) =>
      activeCategory.value === "All" || notification.category === activeCategory.value
  );
});

// Mark notification as read
const markNotificationAsRead = (notificationId: number) => {
  const notification = notifications.value.find((n) => n.id === notificationId);
  if (notification) {
    notification.isRead = true;
  }
};

const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  if (loading.value) return;
  showModal.value = false;
  setTimeout(() => {}, 200);
};

onMounted(() => {
  on("openNotificationModal", () => {
    openModal();
  });
});
onUnmounted(() => {
  off("openNotificationModal");
});
</script>

<style></style>
