<template>
  <div>
      <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title">About us</div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li class="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-default section-lg">
        <div class="container">
          <div class="row row-50 align-items-lg-center">
            <div class="col-lg-7 text-center order-lg-2">
              <div class="block-img-decoration"><img src="~/assets/images/about-1-614x478.png" alt="" width="614" height="478"/>
              </div>
            </div>
            <div class="col-lg-5">
              <h2>We are a team with a creative approach to work</h2>
              <p>Our  designers and developers work closely together to build a creative and positive working environment. Functionality is as important to us as aesthetics.</p>
              <div class="button-block group-lg"><a class="button button-primary button-shadow" href="contacts.html">contact us</a></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-lg bg-default">
        <div class="container">
          <div class="row row-50 align-items-lg-center">
            <div class="col-lg-6">
              <div class="row row-30">
                <div class="col-12 text-center">
                  <div class="box-icon-modern">
                    <div class="unit unit-spacing-lg flex-column flex-sm-row align-items-sm-center">
                      <div class="unit-left">
                        <div class="box-icon-main"><img src="~/assets/images/icon-1.png" alt=""></div>
                      </div>
                      <div class="unit-body">
                        <h4 class="box-icon-modern-title">We Always Analyze The Market</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center text-lg-left">
                  <div class="box-icon-modern">
                    <div class="unit unit-spacing-lg flex-column flex-sm-row align-items-sm-center">
                      <div class="unit-left">
                        <div class="box-icon-main"><img src="~/assets/images/icon-2.png" alt=""></div>
                      </div>
                      <div class="unit-body">
                        <h4 class="box-icon-modern-title">We Have The Most Brilliant Ideas</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center text-lg-right">
                  <div class="box-icon-modern">
                    <div class="unit unit-spacing-lg flex-column flex-sm-row align-items-sm-center">
                      <div class="unit-left">
                        <div class="box-icon-main"><img src="~/assets/images/icon-3.png" alt=""></div>
                      </div>
                      <div class="unit-body">
                        <h4 class="box-icon-modern-title">We Always Make Successful Projects</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="block-xs">
                <h2>Teamwork is the key to a successful product</h2>
                <p>Our team plays a great role in the creative and technical work we produce.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--section counter-->
      <sectionCounter></sectionCounter>
      <!-- Work plan-->
      <ourWorkProcess></ourWorkProcess>
  </div>
</template>
<script>
export default {
  layout:"layout"
}
</script>