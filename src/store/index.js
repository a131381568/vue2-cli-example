import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 左側選單狀態
    leftSidebarOpen: false,
    // 登入的使用者資訊
    userName: "",
    userMail: "",
    role: "visitor",
    // 左側選單列表
    leftMenu: [],
    // 修改使用者燈箱資訊
    editModalAccount: "",
    editModalName: "",
    editModalEditName: "",
    editModalRole: "member",
    editModalPhone: "",
    editModalId: "",
    editModalPw: "",
    editModalState: "close",
    editModalPublishDate: "",
    editModalEditDate: "",
  },
  getters: {
    get_leftSidebarOpen(state) {
      return state.leftSidebarOpen;
    },
    get_userName(state) {
      return state.userName;
    },
    get_userMail(state) {
      return state.userMail;
    },
    get_role(state) {
      return state.role;
    },
    get_leftMenu(state) {
      return state.leftMenu;
    },
    get_editModalAccount(state) {
      return state.editModalAccount;
    },
    get_editModalName(state) {
      return state.editModalName;
    },
    get_editModalEditName(state) {
      return state.editModalEditName;
    },
    get_editModalRole(state) {
      return state.editModalRole;
    },
    get_editModalPhone(state) {
      return state.editModalPhone;
    },
    get_editModalId(state) {
      return state.editModalId;
    },
    get_editModalPw(state) {
      return state.editModalPw;
    },
    get_editModalState(state) {
      return state.editModalState;
    },
    get_editModalPublishDate(state) {
      return state.editModalPublishDate;
    },
    get_editModalEditDate(state) {
      return state.editModalEditDate;
    },
  },
  mutations: {
    mut_leftSidebarToggle(state) {
      state.leftSidebarOpen = !state.leftSidebarOpen
    },
    mut_leftSidebarManual(state, val) {
      state.leftSidebarOpen = val
    },
    mut_userName(state, val) {
      state.userName = val
    },
    mut_userMail(state, val) {
      state.userMail = val
    },
    mut_role(state, val) {
      state.role = val
    },
    mut_leftMenu(state, val) {
      state.leftMenu = val
    },
    mut_editModalAccount(state, val) {
      state.editModalAccount = val;
    },
    mut_editModalName(state, val) {
      state.editModalName = val;
    },
    mut_editModalEditName(state, val) {
      state.editModalEditName = val;
    },
    mut_editModalRole(state, val) {
      state.editModalRole = val;
    },
    mut_editModalPhone(state, val) {
      state.editModalPhone = val;
    },
    mut_editModalId(state, val) {
      state.editModalId = val;
    },
    mut_editModalPw(state, val) {
      state.editModalPw = val;
    },
    mut_editModalState(state, val) {
      state.editModalState = val;
    },
    mut_editModalPublishDate(state, val) {
      state.editModalPublishDate = val;
    },
    mut_editModalEditDate(state, val) {
      state.editModalEditDate = val;
    }
  },
  actions: {
    act_login({ commit, dispatch }, [mailVal, passwordVal]) {
      let accountData = {
        mail: mailVal,
        password: passwordVal
      };
      axios.get("/data/login_account.json", accountData)
        .then(({ data }) => {
          commit("mut_userName", data.name);
          commit("mut_userMail", data.mail);
          commit("mut_role", data.role);
        }).then(() => {
          dispatch("act_leftMenu")
        }).then(() => {
          router.push({ name: "User_Management" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    act_logOut({ commit }) {
      commit("mut_userName", "")
      commit("mut_userMail", "")
      commit("mut_role", "visitor")
      commit("mut_leftMenu", [])
      commit("mut_editModalAccount", "")
      commit("mut_editModalName", "")
      commit("mut_editModalEditName", "")
      commit("mut_editModalRole", "")
      commit("mut_editModalPhone", "")
      commit("mut_editModalId", "")
      commit("mut_editModalPw", "")
      commit("mut_editModalState", "")
      commit("mut_editModalPublishDate", "")
      commit("mut_editModalEditDate", "")
      router.push({ name: "Login" })
    },
    act_leftMenu({ commit }) {
      axios.get("/data/left_menu.json")
        .then(({ data }) => {
          commit("mut_leftMenu", data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    act_leftMenuTopBtnToggle({ commit }) {
      $('.left-sidebar .lv1[id^="menucollapse_"]').collapse('hide');
      commit("mut_leftSidebarToggle");
    },
    // 將使用者資料修改資訊提交至 store
    act_get_editModalUserInfo({ commit }, data) {
      commit("mut_editModalAccount", data.userAccount)
      commit("mut_editModalName", data.userName)
      commit("mut_editModalEditName", data.editUserName)
      commit("mut_editModalRole", data.role)
      commit("mut_editModalPhone", data.phone)
      commit("mut_editModalId", data.userId)
      commit("mut_editModalPw", data.password)
      commit("mut_editModalState", data.userState)
      commit("mut_editModalPublishDate", data.publishDate)
      commit("mut_editModalEditDate", data.editDate)
    }

  },
  modules: {
  }
})
