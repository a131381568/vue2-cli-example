<template>
  <div id="app" :class="['main', { 'open-mnav': get_leftSidebarOpen }]">
    <div class="wrapper">
      <router-view v-if="iswhitelist" />
      <div class="main-frame" v-else>
        <!-- left sidebar -->
        <LeftSidebar />
        <div class="content-wrapper">
          <!-- top header -->
          <Header />
          <router-view />
        </div>
      </div>
    </div>
    <Modal />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LeftSidebar from "@/components/LeftSidebar.vue";
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
export default {
  components: {
    LeftSidebar,
    Header,
    Modal,
  },
  computed: {
    ...mapGetters(["get_leftSidebarOpen"]),
    // 是否為訪客可以查看的頁面
    iswhitelist() {
      return this.$route.meta.whitelistMeta;
    },
  },
};
</script>
<style lang="scss">
@import "./assets/css/style";
</style>
