<template>
  <div
    class="modal fade"
    id="modal-userEdit"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-userEdit"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered lg" role="document">
      <div class="modal-content">
        <form class="form-horizontal t2 sys-form needs-validation" novalidate>
          <div class="modal-header">
            <h5 class="msg-header">使用者資料修改</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <svg-injector src="img/icon/icon_close.svg" class="svg" />
            </button>
          </div>
          <div class="modal-body">
            <perfect-scrollbar class="msg-body scrollbar-inner">
              <div class="container-fluid pt-4 pb-4">
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >使用者帳號</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <input
                      type="email"
                      class="form-control"
                      :value="local_account"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >姓名</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <input
                      type="text"
                      class="form-control"
                      v-model="local_name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >密碼</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <input
                      type="password"
                      class="form-control"
                      v-model="local_pw"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >角色</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <select class="form-control" v-model="local_role">
                      <option value="admin">系統管理者</option>
                      <option value="member">一般使用者</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >狀態</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <select class="form-control" v-model="local_state">
                      <option value="Active">有效</option>
                      <option value="Close">無效</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-12 col-md-3 col-form-label form-th"
                    >電話</label
                  >
                  <div class="col-12 col-md-9 form-td">
                    <input
                      type="text"
                      class="form-control"
                      v-model="local_phone"
                    />
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-grey btn-pill"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              class="btn btn-primary btn-pill"
              data-dismiss="modal"
              @click="submitEditUser"
            >
              修改
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Modal",
  data() {
    return {
      local_account: "",
      local_name: "",
      local_editName: "",
      local_role: "member",
      local_phone: "",
      local_id: "",
      local_pw: "",
      local_state: "Close",
      local_publishDate: "",
      local_editDate: "",
    };
  },
  computed: {
    ...mapGetters([
      "get_editModalAccount",
      "get_editModalName",
      "get_editModalEditName",
      "get_editModalRole",
      "get_editModalPhone",
      "get_editModalId",
      "get_editModalPw",
      "get_editModalState",
      "get_editModalPublishDate",
      "get_editModalEditDate",
    ]),
  },
  methods: {
    // 將 store 的資料複製一份至 local 綁 v-model
    setLocal_fromStore() {
      this.local_account = this.get_editModalAccount;
      this.local_name = this.get_editModalName;
      this.local_editName = this.get_editModalEditName;
      this.local_role = this.get_editModalRole;
      this.local_phone = this.get_editModalPhone;
      this.local_id = this.get_editModalId;
      this.local_pw = this.get_editModalPw;
      this.local_state = this.get_editModalState;
      this.local_publishDate = this.get_editModalPublishDate;
      this.local_editDate = this.get_editModalEditDate;
    },
    // 初始化 loaclData
    setLocal_init() {
      this.local_account = "";
      this.local_name = "";
      this.local_editName = "";
      this.local_role = "";
      this.local_phone = "";
      this.local_id = "";
      this.local_pw = "";
      this.local_state = "Close";
      this.local_publishDate = "";
      this.local_editDate = "";
    },
    submitEditUser() {
      console.log("送出修改使用者表單事件");
      // 將 local_ 相關欄位 藉由 API 送出給後端
    },
  },
  mounted() {
    let vm = this;
    // 燈箱開啟前事件
    $("#modal-userEdit").on("show.bs.modal", function (e) {
      vm.setLocal_fromStore();
    });
    // 燈箱關閉後事件
    $("#modal-userEdit").on("hidden.bs.modal", function (e) {
      vm.setLocal_init();
    });
  },
};
</script>
