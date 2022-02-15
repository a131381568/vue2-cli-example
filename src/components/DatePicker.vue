<template>
  <div>
    <template v-if="dateType === 'startDate'">
      <DateRangePicker
        ref="picker"
        opens="left"
        singleDatePicker="single"
        :ranges="false"
        :dateRange="{}"
        :autoApply="true"
        :linkedCalendars="false"
        :localeData="datePickerFormat"
        :disabled="needDisabled"
        @update="startHandler"
      >
        <template v-slot:input>
          <input
            type="text"
            class="form-control form-noborder"
            placeholder=""
            id="startDate"
            name="startDate"
            autocomplete="off"
            :disabled="needDisabled"
            :value="startDate"
          />
        </template>
      </DateRangePicker>
    </template>

    <template v-if="dateType === 'endDate'">
      <DateRangePicker
        ref="picker"
        opens="left"
        singleDatePicker="single"
        :ranges="false"
        :dateRange="{}"
        :autoApply="true"
        :linkedCalendars="false"
        :localeData="datePickerFormat"
        :disabled="needDisabled"
        @update="endHandler"
      >
        <template v-slot:input>
          <input
            type="text"
            class="form-control form-noborder"
            placeholder=""
            id="endDate"
            name="endDate"
            autocomplete="off"
            :disabled="needDisabled"
            :value="endDate"
          />
        </template>
      </DateRangePicker>
    </template>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "DatePicker",
  components: { DateRangePicker },
  props: {
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    dateType: {
      type: String,
    },
    needDisabled: {
      type: Boolean
    }
  },
  data() {
    return {
      datePickerFormat: {
        format: "YYYY_MM_DD",
      },
    };
  },
  methods: {
    startHandler(val) {
      console.log("startHandler", val.startDate);
      this.$emit("updateStartDate", val.startDate);
    },
    endHandler(val) {
      console.log("endHandler", val.endDate);
      this.$emit("updateEndDate", val.endDate);
    },
  },
};
</script>

<style>
.vue-daterange-picker {
  width: 100%;
}
.form-control.reportrange-text {
  border: none !important;
}
.calendars > .ranges {
  display: none;
}

@media screen and (min-width: 339px) {
  .daterangepicker.single.show-ranges.show-weeknumbers,
  .daterangepicker.single.show-ranges {
    min-width: auto !important;
  }
}
</style>