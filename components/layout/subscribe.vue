<template>
  <!-- Subscribe section -->
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
</template>