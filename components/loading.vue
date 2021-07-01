<template>
    <div class="preloader" v-show="loading">
      <div class="preloader-body">
        <div class="cssload-container">
          <div class="cssload-speeding-wheel"></div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        setTimeout(()=>{
          this.loading = false
        },300)
      }
    }
  }
</script>