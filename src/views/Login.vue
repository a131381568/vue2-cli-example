<template>
  <div>
    <div class="login-syslogo">
      <div class="syslogin-pic-01">
        <h1>Crystal</h1>
        <h2>Management System</h2>
      </div>
    </div>
    <div class="login-panel">
      <div class="login-form">
        <h2 class="color-blue txt-bold">Login</h2>
        <p class="mb-5 color-grey">
          Use your account to login, or go to
          <router-link
            :to="{
              name: 'Registration',
            }"
            >Registration</router-link
          >
        </p>
        <!-- <div class="c-logo"></div> -->
        <form>
          <div id="login-local">
            <!-- <div class="form-group">
                    <label><img src="assets/img/icon/icon_001.png"></label>
                    <select class="form-control form-noborder">
                        <option>繁體中文</option>
                        <option>English</option>
                        <option>日本語</option>
                    </select>
                </div> -->
            <div class="form-group">
              <input
                type="email"
                class="form-control form-noborder"
                id=""
                placeholder="帳號"
                v-model="localMail"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-noborder"
                id=""
                placeholder="密碼"
                v-model="localPassword"
              />
              <!-- <span class="forget-pw"><a href="#modal-forgetPW"  class="fb_inline_modal" data-toggle="tooltip" data-placement="bottom" title="忘記密碼"><img src="assets/img/icon/password_missing.png"></a></span> -->
            </div>
          </div>
          <!-- <div class="form-group">
                    <div class="login-switch">
                        <div class="btn btn-grey button-local active">本機</div>
                        <div class="btn btn-grey button-ldap">LDAP</div>
                    </div>
                </div> -->
          <div class="row">
            <div class="col-12">
              <button
                class="btn btn-big btn-fwidth btn-primary"
                @click.prevent="act_login([localMail, localPassword])"
              >
                登入
              </button>
            </div>
            <!-- <div class="col-12 col-md-6">
                      <button type="button" class="btn btn-big btn-fwidth btn-grey-outline">註冊</button>
                  </div> -->
          </div>
        </form>
      </div>
    </div>
    <div class="login-right">
      <p>©2022 Allen Wang. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      localMail: "",
      localPassword: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["act_login"]),
  },
};
</script>
