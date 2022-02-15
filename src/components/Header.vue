<template>
  <header class="customer-header">
    <!-- <div class="customer-logo"></div> -->
    <nav aria-label="breadcrumb">
      <!-- <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="dashboard.htm">首頁</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>-->
    </nav>
    <!-- <div class="breadcrumb operation_box">
            <div class="autotime"></div>
            <span class="operation_lisht"></span>
            <div class="operation_txt">正常運作中</div>
          </div> -->
    <div class="user-center-dropdown">
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div class="user-pics">
            <svg-injector src="img/user_default_pic.svg" />
          </div>
          <span class="user-notifications">16</span>
          <p>Allen</p>
          <span class="caret"></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            href=""
            class="dropdown-item"
            data-toggle="modal"
            data-target="#modal-selfEdit"
            title="編輯資料"
          >
            john@gmail.com</a
          >
          <hr class="mt-0" />
          <router-link
            class="dropdown-item"
            :to="{ name: 'Api_List' }"
            title="登入頁"
          >
            <svg-injector
              src="img/icon/icon_website.svg"
              class="svg"
            />列表</router-link
          >
          <a
            class="dropdown-item"
            href="javascript:void(0);"
            @click.prevent="act_logOut"
          >
            <svg-injector src="img/icon/icon_logout.svg" class="svg" />登出</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["get_userName", "get_userMail"]),
  },
  methods: {
    ...mapActions(["act_logOut"]),
  },
};
</script>
