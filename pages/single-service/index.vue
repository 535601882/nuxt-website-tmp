<template>
<div>
      <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title">Single Service</div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li class="active">Single Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-lg bg-default section-decoration-1 section-decoration-1-mode">
        <div class="container">
          <div class="row row-50">
            <div class="col-md-5 col-lg-4 order-md-2">
              <ul class="aside-list">
                <li><a href="#">Web design & Branding</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Full Optimization</a></li>
                <li><a href="#">Research & Strategy</a></li>
                <li><a href="#">Management & Marketing</a></li>
                <li><a href="#">Free Support</a></li>
              </ul>
            </div>
            <div class="col-md-7 col-lg-8 order-md-1">
              <div class="text-center"><img src="~/assets/images/single-service-1-499x404.png" alt="" width="499" height="404"/>
              </div>
              <div class="row row-30">
                <div class="col-12">
                  <h6>Providing efficient graphic design services to customers worldwide</h6>
                  <p>Our award-winning graphic design shows up in logos, business cards, infographics, tradeshow booths, outdoor signage, way-finding signage, vehicle wraps and more. It can also be found in the digital marketing world. We offer graphic design for Application and Website’s User Interface ( UI ), PSDs, eBooks, Twitter backgrounds, Facebook cover photos, PowerPoint slides, HTML email templates and beyond.</p>
                  <p>Our graphic design services can be found in videos from video entry and exit slides, lower thirds and 2D and 3D animations.</p>
                </div>
                <div class="col-12">
                  <h6>Our graphic design services include:</h6>
                  <ul class="list-marked list-md-marked">
                    <li>
                      <p class="font-weight-medium text-gray-800">Print, Brand & Digital Design</p>
                      <p>The experience of interacting with a printed piece of communication is a powerful and lasting way to convey your message. Print communications take several shapes and sizes.</p>
                    </li>
                    <li>
                      <p class="font-weight-medium text-gray-800">Brand & Logo Design</p>
                      <p>Brands are a powerful thing, comprised from the entire experience a person has with your organization. It is more than a logo or visual identity, however, your logo and identity design are the most recognizable elements of your brand.</p>
                    </li>
                    <li>
                      <p class="font-weight-medium text-gray-800">Website & UI/UX Design</p>
                      <p>Every website or application’s sole purpose is user interaction and engagement. Through our methodology, we are able to create a strategy and visual style that is unique and connects with your users.</p>
                    </li>
                  </ul>
                </div>
                <div class="col-12">
                  <h6>We are ready to meet your needs.</h6>
                  <p>We help our clients thrive in a time of noise and distraction by creating compelling brand, print, and web experiences that compels people to act. We get behind their mission and help tell their story through strategy and creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--section counter-->
      <sectionCounter></sectionCounter>
      <!-- Contact form-->
      <contactForm></contactForm>
</div>
</template>
<script>
export default {
  layout:"layout"
}
</script>