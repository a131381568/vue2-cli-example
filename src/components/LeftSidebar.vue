<template>
  <nav class="left-sidebar">
    <perfect-scrollbar class="ls-scroll scrollbar-inner">
      <div class="nav-frame">
        <div class="siderbar-top">
          <div class="nav-toggle-l">
            <a
              class="toggle-btn"
              href="javascript:void(0);"
              @click="act_leftMenuTopBtnToggle()"
            >
              <svg-injector src="img/icon/icon_menu.svg" class="svg" />
            </a>
          </div>
          <div class="systex-logo">
            <router-link class="logo-pic" :to="{ name: 'User_Management' }">
            </router-link>
          </div>
        </div>
        <ul class="rootul" v-if="get_leftMenu">
          <li v-for="(menuVal, menuKey) in get_leftMenu" :key="menuKey">
            <router-link
              v-if="menuVal.parentPathName"
              :to="{ name: menuVal.parentPathName }"
            >
              <div class="nav-icon sb-system">
                <svg-injector :src="menuVal.svgUrl" class="svg" />
              </div>
              {{ menuVal.parentTitle }}
            </router-link>
            <a
              v-else
              @click="mut_leftSidebarManual(true)"
              class="collapsed"
              :title="menuVal.parentTitle"
              role="button"
              data-toggle="collapse"
              href="javascript:void(0)"
              :data-target="'#menucollapse_' + menuKey"
              aria-expanded="false"
              :aria-controls="'menucollapse_' + menuKey"
            >
              <div class="nav-icon sb-system">
                <svg-injector :src="menuVal.svgUrl" class="svg" />
              </div>
              {{ menuVal.parentTitle }}
            </a>
            <div
              class="collapse lv1"
              :id="'menucollapse_' + menuKey"
              v-if="menuVal.list"
            >
              <ul>
                <li v-for="(itemVal, itemKey) in menuVal.list" :key="itemKey">
                  <router-link
                    class="dropdown-item"
                    :to="{ name: itemVal.pathName }"
                    :title="itemVal.title"
                  >
                    {{ itemVal.title }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </perfect-scrollbar>
  </nav>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "LeftSidebar",
  computed: {
    ...mapGetters(["get_leftMenu"]),
  },
  methods: {
    ...mapMutations(["mut_leftSidebarManual"]),
    ...mapActions(["act_leftMenuTopBtnToggle"]),
  },
};
</script>
<style>
.lv1.collapse {
  /*transition: height 2s ease;*/
  overflow: hidden;
  transition: all 2s;
  -webkit-transition: all 2s;
}
</style>