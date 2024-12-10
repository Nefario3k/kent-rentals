<template>
  <div
    :class="[
      'p-4 rounded-lg shadow-md flex items-center space-x-4 transition ',
      notification.isRead ? 'bg-gray-100 opacity-70' : 'bg-white hover:bg-gray-50',
    ]"
  >
    <!-- Notification Icon -->
    <div
      :class="[
        'sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] rounded-full flex items-center justify-center self-start',
        iconClasses[notification.icon] || 'bg-blue-100 text-blue-600',
      ]"
    >
      <svg
        v-if="notification.icon !== 'alert'"
        class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <NotificationIcon :icon="notification.icon" />
      </svg>
      <lord-icon
        class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
        v-else
        src="https://cdn.lordicon.com/wtnrotmp.json"
        trigger="loop"
        delay="500"
        stroke="bold"
        state="in-reveal"
        colors="primary:#dc2626 ,secondary:#dc2626 "
      ></lord-icon>
    </div>

    <!-- Notification Content -->
    <div class="flex-1">
      <div class="flex justify-between items-center mb-1 gap-3">
        <h3
          :class="[
            'sm:text-md text-sm font-semibold elipsis',
            notification.isRead ? 'text-gray-600' : 'text-gray-900',
          ]"
        >
          {{ notification.title }}
        </h3>
        <span
          :class="[
            'text-xs font-medium px-2 py-1 rounded-full min-w-max',
            categoryClasses[notification.category] || 'bg-gray-200 text-gray-800',
          ]"
        >
          {{ notification.category }}
        </span>
      </div>
      <p
        :class="[
          'sm:text-sm text-xs',
          notification.isRead ? 'text-gray-500' : 'text-gray-700',
        ]"
      >
        {{ notification.description }}
      </p>
      <div class="text-xs text-gray-500 mt-1">
        {{ formatDate(notification.date) }}
      </div>
    </div>

    <!-- Mark as Read Button -->
    <BaseButton
      title="Mark as Read"
      v-if="!notification.isRead"
      @click="markAsRead"
      class="pill"
      :elevation="0"
      width="36px"
      height="36px"
      min-height="auto"
      min-width="auto"
      color="transparent"
    >
      <svg class="w-[24px] h-[24px]" fill="none" stroke="#1d4ed8" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </BaseButton>
  </div>
</template>

<script setup>
import NotificationIcon from "~/components/NotificationIcon.vue";

const emit = defineEmits(["mark-read"]);

const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
});

// Category color classes
const categoryClasses = {
  Urgent: "bg-red-100 text-red-800",
  Payment: "bg-green-100 text-green-800",
  Maintenance: "bg-yellow-100 text-yellow-800",
  Community: "bg-purple-100 text-purple-800",
};

// Icon background classes
const iconClasses = {
  dollar: "bg-green-100 text-green-600",
  trash: "bg-blue-100 text-blue-600",
  wrench: "bg-yellow-100 text-yellow-600",
  calendar: "bg-purple-100 text-purple-600",
  alert: "bg-red-100 text-red-600",
};

// Date formatting function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// Mark notification as read
const markAsRead = () => {
  emit("mark-read", props.notification.id);
};
</script>
