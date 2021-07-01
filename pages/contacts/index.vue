<template>
  <div>
      <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title">Contacts</div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li class="active">Contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact form-->
      <contactForm></contactForm>
  </div>
</template>
<script>
export default {
  layout:"layout"
}
</script>