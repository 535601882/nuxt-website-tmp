<template>
<div>
        <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title"></div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li class="active">Forms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!--Forms-->
      <section class="section section-md bg-default text-center">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-9 col-lg-7 col-xl-5">
              <h3>Login form</h3>
              <div class="group-sm group-custom"><a class="button button-facebook button-icon button-icon-left button-round" href="#"><span class="icon fa fa-facebook"></span>Facebook</a><a class="button button-twitter button-icon button-icon-left button-round" href="#"><span class="icon fa fa-twitter"></span>Twitter</a><a class="button button-google button-icon button-icon-left button-round" href="#"><span class="icon fa fa-google-plus"></span>Google+</a></div>
              <div class="text-decoration-lines"><span class="text-decoration-lines-content">or</span></div>
              <!--RD Mailform-->
              <form class="rd-form rd-mailform rd-form-centered">
                <div class="form-wrap">
                  <input class="form-input" id="login-email" type="email" name="email" data-constraints="@Email @Required">
                  <label class="form-label" for="login-email">E-mail</label>
                </div>
                <div class="form-wrap">
                  <input class="form-input" id="login-password" type="password" name="password" data-constraints="@Required">
                  <label class="form-label" for="login-password">Password</label>
                </div>
                <button class="button button-block button-primary" type="submit">Enter </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!--Contact us-->
      <section class="section section-md bg-default text-center">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-9 col-lg-7 col-xl-5">
              <h3>Contact us</h3>
              <!--RD Mailform-->
              <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="row row-20 row-inset-20">
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-name" type="text" name="name" data-constraints="@Required">
                      <label class="form-label" for="contact-name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-phone" type="text" name="phone" data-constraints="@Numeric">
                      <label class="form-label" for="contact-phone">Phone</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label class="form-label" for="contact-message">Your Message</label>
                      <textarea class="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required">
                      <label class="form-label" for="contact-email">E-mail</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <button class="button button-block button-primary" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <!--Contact Us-->
      <section class="section section-md bg-default text-center">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-9 col-lg-7 col-xl-5">
              <h3>Contact Us (with reCAPTCHA)</h3>
              <!--RD Mailform-->
              <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="row row-sm-bottom row-20 row-inset-20">
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-2-name" type="text" name="name" data-constraints="@Required">
                      <label class="form-label" for="contact-2-name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-2-phone" type="text" name="phone" data-constraints="@Numeric">
                      <label class="form-label" for="contact-2-phone">Phone</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label class="form-label" for="contact-2-message">Your Message</label>
                      <textarea class="form-input" id="contact-2-message" name="message" data-constraints="@Required"></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-wrap">
                      <input class="form-input" id="contact-2-email" type="email" name="email" data-constraints="@Email @Required">
                      <label class="form-label" for="contact-2-email">E-mail</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-wrap form-validation-left">
                      <!--Google captcha-->
                      <div class="recaptcha" id="captcha1" data-sitekey="6LfZlSETAAAAAC5VW4R4tQP8Am_to4bM3dddxkEt" data-auto-size=""></div>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="button button-block button-primary" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <!--Subscribe to Our Newsletter-->
      <section class="section-md bg-gray-100 section-decoration-1" id="subscride">
        <div class="container">
          <div class="row row-30 justify-content-center">
            <div class="col-sm-8 col-lg-7 text-center">
              <div class="block-sm animate-box">
                <h2 class="wow fadeInDown">Subscribe to our news and regular updates</h2>
              </div>
            </div>
            <div class="col-md-7 col-lg-6">
              <div class="wow fadeInUp" data-wow-delay=".2s">
                <form class="rd-form rd-mailform rd-form-inline" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                  <div class="form-wrap">
                    <input class="form-input form-input-shadow" id="subscribe-form-email" type="email" name="email" data-constraints="@Email @Required">
                    <label class="form-label" for="subscribe-form-email">Your E-mail</label>
                  </div>
                  <div class="form-button">
                    <button class="button button-primary button-lg button-shadow" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-md bg-default text-center">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-9 col-lg-8 col-xl-7">
              <h3>MailChimp</h3>
              <p class="big">Sign up to our newsletter and be the first to know about the latest news, special offers, events, and discounts.</p>
              <!--Mailchimp-->
              <form class="rd-form mailchimp-mailform rd-form-inline" data-form-output="form-output-global" action="https://templatemonster.us15.list-manage.com/subscribe/post?u=ba5bb362073a413f48e4a7b90&amp;id=8dc95d9dec" method="post">
                <div class="form-wrap">
                  <label class="form-label" for="mailchimp-email">Enter your e-mail</label>
                  <input class="form-input" id="mailchimp-email" type="email" name="email" data-constraints="@Email @Required">
                </div>
                <div class="form-button">
                  <button class="button button-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-md bg-default text-center">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-9 col-lg-8 col-xl-7">
              <h3>Campaign Monitor</h3>
              <p class="big">Sign up to our newsletter and be the first to know about the latest news, special offers, events, and discounts.</p>
              <!--Campaign Monitor-->
              <form class="rd-form campaign-mailform rd-form-inline" data-form-output="form-output-global" action="https://templatermonster.createsend.com/t/j/s/zjjikd/" method="post">
                <div class="form-wrap">
                  <label class="form-label" for="campaign-email">Enter your e-mail</label>
                  <input class="form-input" id="campaign-email" type="email" name="cm-zjjikd-zjjikd" data-constraints="@Email @Required">
                </div>
                <div class="form-button">
                  <button class="button button-primary" type="submit">Subscribe</button>
                </div>
              </form>
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