<template>
  <div>
          <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title">Portfolio</div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li class="active">Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- Section about-->
      <section class="section-lg bg-default">
        <div class="container">
          <div class="row row-30 align-items-lg-center">
            <div class="col-lg-7 text-center text-lg-left">
              <div class="animate-box">
                <div class="wow slideInLeft" data-wow-delay="0.1s"><img src="~/assets/images/home-2-563x509.png" alt="" width="563" height="509"/>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-xl-5">
              <div class="animate-box">
                <h2 class="wow slideInRight" data-wow-delay="0.2s">Creative challenges are our passion</h2>
                <p class="wow slideInRight" data-wow-delay="0.3s">Our  designers and developers work closely together to build a creative and positive working environment. Functionality is as important to us as aesthetics.</p>
              </div>
              <div class="button-block group-lg wow fadeIn" data-wow-delay="0.4s"> <a class="button button-primary button-shadow" href="about-us.html">Read More</a><a class="button button-default-outline" href="contacts.html">Contact us</a></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-lg bg-default section-decoration-7">
        <div class="container">
          <h2 class="text-center text-md-left">Recent projects we have<br>worked on</h2>
          <div class="row row-30">
            <div class="col-sm-6 col-lg-4">
              <div class="project-item-classic"><a class="project-item-img" href="#"><img src="~/assets/images/project-1-370x404.jpg" alt="" width="370" height="404"/></a>
                <div class="project-item-caption">
                  <h5 class="project-item-title"><span>Impuls</span> - <span>Consulting Company</span></h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="project-item-classic"><a class="project-item-img" href="#"><img src="~/assets/images/project-2-370x404.jpg" alt="" width="370" height="404"/></a>
                <div class="project-item-caption">
                  <h5 class="project-item-title"><span>Tour Up</span> - <span>Travel Agency</span></h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="project-item-classic"><a class="project-item-img" href="#"><img src="~/assets/images/project-3-370x404.jpg" alt="" width="370" height="404"/></a>
                <div class="project-item-caption">
                  <h5 class="project-item-title"><span>Little Italy</span> - <span>Restaurant </span></h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="project-item-classic"><a class="project-item-img" href="#"><img src="~/assets/images/project-4-370x404.jpg" alt="" width="370" height="404"/></a>
                <div class="project-item-caption">
                  <h5 class="project-item-title"><span>News</span> - <span>Business News Portal</span></h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="project-item-classic"><a class="project-item-img" href="#"><img src="~/assets/images/project-5-370x404.jpg" alt="" width="370" height="404"/></a>
                <div class="project-item-caption">
                  <h5 class="project-item-title"><span>Auto Quarter</span> - <span>Car Repair Workshop</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>
<script>
export default {
  layout:"layout"
}
</script>