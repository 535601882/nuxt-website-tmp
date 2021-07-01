<template>
  <ul class="rd-navbar-nav">
    <li class="rd-nav-item" v-for="(menu,index) in menus" :key="menu.url + index">
      <nuxt-link class="rd-nav-link" :to="menu.url">{{menu.name}}</nuxt-link>
      <template v-if="hasGrandson(menu)">
        <ul class="rd-menu rd-navbar-megamenu">
          <li class="rd-megamenu-item" v-for="(_menu,_index) in menu.children" :key="_menu.url + _index">
            <h6 class="rd-megamenu-title">{{_menu.name}}</h6>
            <ul class="rd-megamenu-list">
              <li class="rd-megamenu-list-item" v-for="(__menu,__index) in _menu.children" :key="__menu.url + __index">
                <nuxt-link class="rd-megamenu-list-link" :to="__menu.url">{{__menu.name}}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </template>
      <template v-else-if="hasChildren(menu)">
        <ul class="rd-menu rd-navbar-dropdown">
          <li class="rd-dropdown-item"  v-for="(_menu,_index) in menu.children" :key="_menu.url + _index">
            <nuxt-link class="rd-dropdown-link" :to="_menu.url">{{_menu.name}}</nuxt-link>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  props:{
    menus:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    hasChildren(menu){
      return menu.children?.length
    },
    hasGrandson(menu){
      return menu?.children?.length && menu?.children[0]?.children?.length
    },
  }
}
</script>