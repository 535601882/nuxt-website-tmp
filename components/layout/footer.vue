<template>
        <footer class="footer-classic bg-default text-center text-sm-left">
        <div class="section-sm">
          <div class="container">
            <div class="row row-30">
              <div class="col-sm-6 col-lg-3">
                <div class="brand-footer">
                  <!--Brand--><nuxt-link class="brand" to="/"><img class="brand-logo-dark" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/><img class="brand-logo-light" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/></nuxt-link>
                </div>
                <ul class="contact-list">
                  <li> <span>Phone:  </span><a href="tel:#">+ 1 (045) - 224 - 12 - 67</a></li>
                  <li><span>Mail:  </span><a href="mailto:#">info@demolink.org</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-3">
                <h4 class="footer-title">Services</h4>
                <ul class="list-sm footer-list">
                  <li><nuxt-link to="/single-service">Web Design & Branding</nuxt-link></li>
                  <li><nuxt-link to="/single-service">Graphic Design</nuxt-link></li>
                  <li><nuxt-link to="/single-service">Video Production</nuxt-link></li>
                  <li><nuxt-link to="/single-service">SEO</nuxt-link></li>
                  <li><nuxt-link to="/single-service">Digital Marketing</nuxt-link></li>
                  <li><nuxt-link to="/single-service">Infographics</nuxt-link></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-3">
                <h4 class="footer-title">About company</h4>
                <ul class="list-sm footer-list">
                  <li><nuxt-link to="/about-us">About us</nuxt-link></li>
                  <li><nuxt-link to="/team">Team</nuxt-link></li>
                  <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                  <li><nuxt-link to="#">Pricing</nuxt-link></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-3">
                <h4 class="footer-title">Our social networks</h4>
                <p>Join us in the social networks to receive the latest news and updates.</p>
                <ul class="list-social list-inline">
                  <li class="list-inline-item"><a class="icon fa-youtube-play" href="#"></a></li>
                  <li class="list-inline-item"><a class="icon fa-facebook-f" href="#"></a></li>
                  <li class="list-inline-item"><a class="icon fa-instagram" href="#"></a></li>
                  <li class="list-inline-item"><a class="icon fa-twitter" href="#"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="section-xs">
          <div class="container">
            <div class="row row-30">
              <div class="col-md-6">
                <p class="rights"><span>&copy;&nbsp; </span><span class="copyright-year"></span><span>&nbsp;</span><span>Metric</span><span>.&nbsp; All Rights Reserved. &nbsp;</span></p>
              </div>
              <div class="col-md-6 text-md-right">
                <ul class="footer-list-inline">
                  <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
</template>
<script>
export default {

}
</script>
