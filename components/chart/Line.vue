<template>
  <Line
    v-if="!loader"
    style="width: 100%; height: 100%"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script lang="ts" setup>
import { Line } from "vue-chartjs";
const { $formatCurrencyReview, $formatCurrency } = useNuxtApp();
const loader = ref(true);
const chartData = ref({
  labels: [
    "Block A",
    "Block B",
    "Block C",
    "Block D",
    "Block E",
    "Block A1",
    "Block B1",
    "Block C1",
    "Block D1",
    "Block E1",
    "PENT",
    "VILLA",
  ],
  datasets: [
    {
      label: "Benirose",
      data: [
        200000,
        365289,
        191231,
        128100,
        215600,
        852132,
        140000,
        940000,
        200000,
        365289,
        191231,
        121231,
      ],
      fill: false,
      borderColor: "#433740",
      backgroundColor: "#433740",
    },
    {
      label: "Asokoro",
      data: [
        300000,
        40000,
        91231,
        128100,
        725600,
        852132,
        320000,
        300000,
        40000,
        91231,
        128100,
        852132,
      ],
      fill: false,
      borderColor: "#F8E38E",
      backgroundColor: "#F8E38E",
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "rectRounded",
  hoverOffset: 7,
  hoverBorderColor: "#C2C6CE",
  hoverBackgroundColor: "#C2C6CE",
  elements: {
    point: {
      radius: 3,
      pointStyle: "circle",
      hoverRadius: 7,
    },
    line: {
      tension: 0.3,
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      title: {
        display: true,
        padding: 0,
        font: {
          weight: "600",
          size: 14,
        },
      },
      position: "top",
      align: "end",
      display: false,
      labels: {
        usePointStyle: true,
        textAlign: "start",
        color: "#667085",
        boxWidth: 5,
        boxHeight: 5,
        font: {
          size: 12,
          weight: "normal",
          family: "Red Hat Display, sans-serif",
        },
      },
    },
    title: {
      align: "start",
    },
    tooltip: {
      backgroundColor: "#1D1F2C",
      titleMarginBottom: 12,
      titleColor: "#D2D2D5",
      bodyColor: "#FFFFFF",
      yAlign: "bottom",
      xAlign: "center",
      // position: "nearest",
      titleFont: {
        size: 16,
        weight: "normal",
        family: "Red Hat Display, sans-serif",
      },
      bodyFont: {
        size: 12,
        weight: "normal",
        family: "Red Hat Display, sans-serif",
      },
      padding: 16,
      cornerRadius: 8,
      boxPadding: 6,
      boxWidth: 10,
      boxHeight: 10,
      bodySpacing: 10,
      usePointStyle: true,
      displayColors: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#667085",
        font: {
          size: 12,
          weight: "normal",
          family: "Red Hat Display, sans-serif",
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      position: "left",
      grid: {
        drawTicks: true,
        tickLength: 15,
        tickColor: "transparent",
        color: "#C2C6CE",
        // offset: true,
      },
      ticks: {
        color: "#667085",
        font: {
          size: 12,
          weight: "normal",
          family: "Red Hat Display, sans-serif",
        },
      },
      border: {
        display: false,
        dash: [4],
      },
      min: 0,
      max: 1,
    },
  },
});
const maxDiff = function (arr: Array<number>) {
  arr.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(Number(arr[i]) - Number(arr[i - 1]));
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return Math.floor(Math.abs(maxDiff));
};
const setValues = () => {
  loader.value = true;
  const maxVal: Array<number> = [];
  const minVal: Array<number> = [];
  chartData.value.datasets.forEach((element: any) => {
    maxVal.push(Math.max(...element.data));
  });
  chartData.value.datasets.forEach((element: any) => {
    minVal.push(Math.min(...element.data));
  });
  if (maxVal.length > 1 && maxDiff(maxVal)) {
    chartOptions.value.scales.y.max = Math.max(...maxVal) + maxDiff(maxVal) * 1;
  } else if (maxVal.length > 1 && !maxDiff(maxVal)) {
    chartOptions.value.scales.y.max =
      Math.max(...maxVal) + Math.round(Math.max(...maxVal) / 2);
  } else {
    chartOptions.value.scales.y.max = Math.max(...maxVal) + Math.max(...maxVal) / 2;
  }

  if (minVal.length && Math.min(...minVal)) {
    chartOptions.value.scales.y.min =
      Math.min(...minVal) - Math.round(Math.min(...minVal) / 2);
  }
  // set yAxis
  Object.assign(chartOptions.value.scales.y.ticks, {
    // val, index, ticks
    callback: function (val: any) {
      if (!val) return val;
      const value = val.toFixed(0);
      return $formatCurrencyReview(Number(value));
    },
  });
  // set tooltip
  Object.assign(chartOptions.value.plugins.tooltip, {
    callbacks: {
      label: (tooltipItem: any) => {
        return `${tooltipItem.dataset.label} : ${$formatCurrency(
          Number(tooltipItem.parsed.y)
        )}`;
      },
    },
  });

  loader.value = false;
};
onMounted(() => {
  setValues();
});
</script>

<style></style>
