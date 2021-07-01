<template>
  <div class="row row-30">
      <div class="col-sm-6 col-lg-4 wow fadeIn" :data-wow-delay="Number(`0.2`)+ Number(index * 0.1) +`s`" v-for="(item,index) in servicesList" :key="item.name + index">
        <div class="box-icon-classic">
          <div class="icon-main" v-html="item.svg">
          </div>
          <h4 class="box-icon-title"><nuxt-link to="/single-service">{{item.name}}</nuxt-link></h4>
          <p>{{item.desc}}</p>
          <nuxt-link class="button-link" to="/single-service">
            <span>read more</span><span class="icon fa-long-arrow-right"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    servicesList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>