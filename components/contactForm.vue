<template>
      <section class="section-lg bg-default section-decoration-2">
        <div class="container">
          <div class="row row-30 align-items-lg-center justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="animate-box">
                <div class="wow slideInLeft" data-wow-delay="0.2s"><img src="~/assets/images/home-1-499x550.png" alt="" width="499" height="550"/>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-contact-form wow fadeIn" data-wow-delay="0.2s">
                <h2>Get in touch with our team</h2>
                <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                  <div class="row row-20">
                    <div class="col-12">
                      <div class="form-wrap">
                        <input class="form-input" id="contact-name" type="text" name="name" data-constraints="@Required">
                        <label class="form-label" for="contact-name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-12">
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
                    <div class="col-12">
                      <button class="button button-sm button-primary" type="submit">send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>