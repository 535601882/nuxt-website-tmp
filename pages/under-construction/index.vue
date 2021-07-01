<template>
        <section class="section section-single bg-gray-200">
        <div class="section-single-inner">
          <div class="section-single-header">
            <div class="container">
              <!--Brand--><a class="brand" href="index.html"><img class="brand-logo-dark" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/><img class="brand-logo-light" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/></a>
            </div>
          </div>
          <div class="section-single-main">
            <div class="container">
              <h3>We're getting ready to launch in</h3>
              <div class="divider-small"></div>
              <div class="countdown" data-countdown="data-countdown" data-to="2019-12-31">
                <div class="countdown-block countdown-block-days">
                  <svg class="countdown-circle" x="0" y="0" width="200" height="200" viewbox="0 0 200 200" data-progress-days="">
                    <circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
                    <circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-days="">00</div>
                    <div class="countdown-title">days</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-hours">
                  <svg class="countdown-circle" x="0" y="0" width="200" height="200" viewbox="0 0 200 200" data-progress-hours="">
                    <circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
                    <circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-hours="">00</div>
                    <div class="countdown-title">hours</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-minutes">
                  <svg class="countdown-circle" x="0" y="0" width="200" height="200" viewbox="0 0 200 200" data-progress-minutes="">
                    <circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
                    <circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-minutes="">00</div>
                    <div class="countdown-title">minutes</div>
                  </div>
                </div>
                <div class="countdown-block countdown-block-seconds">
                  <svg class="countdown-circle" x="0" y="0" width="200" height="200" viewbox="0 0 200 200" data-progress-seconds="">
                    <circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
                    <circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle>
                  </svg>
                  <div class="countdown-wrap">
                    <div class="countdown-counter" data-counter-seconds="">00</div>
                    <div class="countdown-title">seconds</div>
                  </div>
                </div>
              </div>
              <p><span style="max-width: 450px;">Our website is under construction, we are working very hard to give you the best experience on our new web site.</span></p>
              <div class="rd-mailform-wrap">
                <form class="rd-form rd-mailform rd-form-inline" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                  <div class="form-wrap">
                    <input class="form-input" id="subscribe-form-email" type="email" name="email" data-constraints="@Email @Required">
                    <label class="form-label" for="subscribe-form-email">E-mail</label>
                  </div>
                  <div class="form-button">
                    <button class="button button-primary" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="section-single-footer">
            <div class="container">
              <p class="rights"><span>&copy;&nbsp; </span><span class="copyright-year"></span><span>&nbsp;</span><span>Metric</span><span>.&nbsp; All Rights Reserved. &nbsp;</span><span> </span><a href="privacy-policy.html">Privacy Policy</a><span>.&nbsp;</span></p>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
}
</script>