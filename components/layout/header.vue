<template>
      <header class="section page-header">
        <!--RD Navbar-->
        <div class="rd-navbar-wrap">
          <nav class="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div class="rd-navbar-main-outer">
              <div class="rd-navbar-main">
                <!--RD Navbar Panel-->
                <div class="rd-navbar-panel">
                  <!--RD Navbar Toggle-->
                  <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                  <!--RD Navbar Brand-->
                  <div class="rd-navbar-brand">
                    <!--Brand--><nuxt-link class="brand" to="/index"><img class="brand-logo-dark" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/><img class="brand-logo-light" src="~/assets/images/logo-default-300x100.png" alt="" width="150" height="50"/></nuxt-link>
                  </div>
                </div>
                <div class="rd-navbar-main-element">
                  <div class="rd-navbar-nav-wrap">
                    <layoutMenu :menus="menus"></layoutMenu>
                    <div class="rd-navbar-button-block"><a class="button button-default-outline" href="#subscride" data-custom-scroll-to="subscride">Subscribe</a></div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
</template>
<script>
export default {
  data(){
        const menus = [
      {
        name:"Home",
        url:"/index"
      },
      {
        name:"About Us",
        url:"/about-us"
      },
      {
        name:"Services",
        url:"/services",
        children:[
            {
              name:"Single Service",
              url:"/single-service"
            },
        ]
      },

      {
        name:"Pages",
        url:"#",
        children:[
          {
            name:"Pages 1",
            url:"",
            children:[
                {
                  name:"Typography",
                  url:"/typography"
                },
                {
                  name:"Buttons",
                  url:"/buttons"
                },
                {
                  name:"Forms",
                  url:"/forms"
                },
                {
                  name:"Tabs and accordions",
                  url:"/tabs-and-accordions"
                },
                {
                  name:"Progress bars",
                  url:"/progress-bars"
                },
                {
                  name:"Tables",
                  url:"/tables"
                },
            ]
          },
          {
            name:"Pages 2",
            url:"/services",
            children:[
                {
                  name:"Grid system",
                  url:"/grid-system"
                },
                {
                  name:"Privacy policy",
                  url:"/privacy-policy"
                },
                {
                  name:"Under Construction",
                  url:"/under-construction"
                },
                {
                  name:"Team",
                  url:"/team"
                },
                {
                  name:"Portfolio",
                  url:"/portfolio"
                },
            ]
          }
        ]
      },
      {
        name:"Contacts",
        url:"/contacts"
      }
    ]
    return {
      menus:menus
    }
  },
  mounted(){
    var $this = $($('[data-custom-scroll-to]')[0]);
    $this.on('click', function (e) {
      e.preventDefault();

      $("body, html").stop().animate({
        scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
      }, 1000, function () {
        $(window).trigger("resize");
      });
    });
  }
}
</script>