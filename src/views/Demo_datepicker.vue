<template>
  <div class="content_outer">
    <div class="row p-5">
      <div class="col-sm-12 datepicker-labelgroup">
        <h1>Datepicker Demo</h1>
      </div>
      <div class="col-sm-5 datepicker-labelgroup">
        <label for="startDate">Start</label>
        <DatePicker
          @updateStartDate="updateStartDate"
          :startDate="startDate"
          dateType="startDate"
        ></DatePicker>
      </div>
      <div class="col-sm-5 datepicker-labelgroup">
        <label for="endDate">Due</label>
        <DatePicker
          @updateEndDate="updateEndDate"
          :endDate="endDate"
          dateType="endDate"
        ></DatePicker>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "@/components/DatePicker.vue";
export default {
  name: "Demo_datepicker",
  components: {
    DatePicker,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    updateStartDate(val) {
      if (!this.endDate) {
        this.startDate = this.dateFormat(val);
        return;
      }
      if (!this.dateCompare(this.dateFormat(val), this.endDate)) {
        alert("結束時間必須比起始時間晚");

        // this.$alertMessage("myModal_msg", {
        //   msgHtml: "<p>結束時間必須比起始時間晚</p>",
        //   mode: "alert",
        // });
        return;
      } else {
        this.startDate = this.dateFormat(val);
      }
    },
    updateEndDate(val) {
      if (!this.startDate) {
        this.endDate = this.dateFormat(val);
        return;
      }
      if (!this.dateCompare(this.startDate, this.dateFormat(val))) {
        alert("結束時間必須比起始時間晚");
        // this.$alertMessage("myModal_msg", {
        //   msgHtml: "<p>結束時間必須比起始時間晚</p>",
        //   mode: "alert",
        // });
        return;
      }

      this.endDate = this.dateFormat(val);
    },

    dateFormat(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

      return year + "_" + month + "_" + day;
    },
    dateCompare(startDay, endDay) {
      // 比對 startDate, endDate 大小
      const start = startDay.split("_");
      const end = endDay.split("_");
      const day1 = new Date(start[0], start[1], start[2]);
      const day2 = new Date(end[0], end[1], end[2]);
      const time = (day2 - day1) / (1000 * 60 * 60 * 24);

      return time < 0 ? false : true;
    },
  },
};
</script>
<style>
.content_outer {
  height: 100%;
  display: inline-block;
  min-height: 1200px;
}
.datepicker-labelgroup input.form-control.form-noborder {
  background: #fff;
}
.vue-daterange-picker > .reportrange-text {
  padding: 0;
}
</style>