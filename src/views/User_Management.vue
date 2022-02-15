<template>
  <div class="content-main">
    <div class="content-frame">
      <div class="groupmanage-container">
        <perfect-scrollbar class="scrollbar-inner">
          <div class="page-title">
            <h1>使用者資料維護</h1>
          </div>
          <Datatable :columns="columns" :tableData="tableData" />
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import Datatable from "../components/Datatable.vue";
export default {
  components: { Datatable },
  name: "User_Management",
  data() {
    return {
      columns: [],
      tableData: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.axios
        .get("/data/user_list.json")
        .then(({ data }) => {
          this.columns = data.columns;
          this.tableData = data.tableData;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
