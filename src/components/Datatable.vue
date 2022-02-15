<template>
  <div>
    <div class="page-action">
      <div class="col">
        <form>
          <input
            type="text"
            class="form-control inline"
            placeholder="輸入使用者帳號"
            id="search-table"
            v-model="userAccountKeyWord"
          />
          <input
            type="text"
            class="form-control inline"
            placeholder="輸入姓名"
            v-model="userNameKeyWord"
          />
          <button type="button" class="btn btn-deepblue inline" @click="search">
            查詢
          </button>
        </form>
      </div>
    </div>
    <div class="apgroup-list-table-container">
      <div class="table-responsive-container">
        <div class="table-responsive-xl">
          <ve-table
            :columns="innerColumnsData"
            :table-data="newTableData"
            :sort-option="sortOption"
          />
        </div>
        <div class="table-pagination">
          <ve-pagination
            :total="totalCount"
            :page-index="pageIndex"
            :page-size="pageSize"
            :layout="['prev', 'pager', 'next']"
            @on-page-number-change="pageNumberChange"
            @on-page-size-change="pageSizeChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Datatable",
  props: {
    columns: {
      type: Array,
      default: [],
    },
    tableData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      // keyword
      userAccountKeyWord: "",
      userNameKeyWord: "",
      // page index
      pageIndex: 1,
      // page size
      pageSize: 10,
      sortOption: {
        sortChange: (params) => {
          this.sortChange(params);
        },
      },
      innerColumnsData: [],
      innerTableData: [],
      firstInit: false,
    };
  },
  computed: {
    // table data
    newTableData() {
      const { pageIndex, pageSize } = this;
      return this.innerTableData.slice(
        (pageIndex - 1) * pageSize,
        pageIndex * pageSize
      );
    },
    // total count
    totalCount() {
      return this.innerTableData.length;
    },
  },
  methods: {
    ...mapActions(["act_get_editModalUserInfo"]),
    sortChange(params) {
      this.innerTableData.sort((a, b) => {
        if (params.publishDate) {
          if (params.publishDate === "asc") {
            return new Date(a.publishDate) - new Date(b.publishDate);
          } else if (params.publishDate === "desc") {
            return new Date(b.publishDate) - new Date(a.publishDate);
          } else {
            return 0;
          }
        } else if (params.editDate) {
          if (params.editDate === "asc") {
            return new Date(a.editDate) - new Date(b.editDate);
          } else if (params.editDate === "desc") {
            return new Date(b.editDate) - new Date(a.editDate);
          } else {
            return 0;
          }
        }
      });
    },
    // page number change
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },
    // page size change
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },
    // search
    search() {
      let keyWordAccount = this.userAccountKeyWord;
      let keyWordName = this.userNameKeyWord;
      let filterAccountData = [];
      let filterNameData = [];
      let filtertotalData = [];
      if (keyWordAccount.length > 0 || keyWordName.length > 0) {
        // 如果帳號欄位有值
        if (keyWordAccount.length > 0) {
          filterAccountData = this.innerTableData.filter((item) => {
            if (
              item.userAccount
                .toLowerCase()
                .includes(keyWordAccount.toLowerCase()) === true
            ) {
              return item;
            }
          });
        }
        // 如果姓名欄位有值
        if (keyWordName.length > 0) {
          filterNameData = this.innerTableData.filter((item) => {
            if (
              item.userName
                .toLowerCase()
                .includes(keyWordName.toLowerCase()) === true
            ) {
              return item;
            }
          });
        }
        // 合併搜尋結果
        filtertotalData = filterAccountData.concat(filterNameData);
        this.innerTableData = filtertotalData;
        // 如果兩格都有參數, 就進行過濾重複的動作
        if (keyWordAccount.length > 0 && keyWordName.length > 0) {
          const set = new Set();
          const removeDoubleValue = filtertotalData.filter((item) => {
            if (set.has(JSON.stringify(item))) {
              return true;
            } else {
              set.add(JSON.stringify(item));
            }
          });
          this.innerTableData = removeDoubleValue;
        }
      } else {
        this.innerTableData = this.tableData;
      }
    },
    getSingleUseInfo(rowInfo) {
      // 提交該欄使用者資訊至 store
      this.act_get_editModalUserInfo(rowInfo);
    },
    addActionBtn() {
      // 新增按鈕欄位
      this.innerColumnsData.push({
        field: "",
        key: "g",
        title: "",
        align: "right",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
          return (
            <ul class="table-action">
              <li>
                <a
                  href="javascript:void(0)"
                  class="btn btn-icon btn-bt"
                  data-toggle="modal"
                  data-target="#modal-userEdit"
                  on-click={() => this.getSingleUseInfo(row)}
                >
                  <svg-injector src="img/icon/icon_edit.svg" class="svg" />
                </a>
              </li>
            </ul>
          );
        },
      });
    },
  },
  watch: {
    // 將收到的資料複製至 Data
    columns(array) {
      this.innerColumnsData = array;
    },
    tableData(array) {
      this.innerTableData = array;
    },
  },
  updated() {
    // 只有第一次拿到資料, 會加上按鈕
    if (this.innerColumnsData.length > 0 && this.firstInit === false) {
      this.addActionBtn();
      this.firstInit = true;
    }
  },
  created() {
    //
  },
};
</script>
