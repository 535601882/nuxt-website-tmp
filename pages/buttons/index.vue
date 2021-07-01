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
            <li class="active">Buttons</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--Button Sizes-->
  <section class="section section-md bg-default text-center">
    <div class="container">
      <h4>Button Sizes</h4>
      <p>4 different sizes: super, large, default and small.</p>
      <div class="group-xl">
        <div class="button button-xl button-primary">Super Size</div>
        <div class="button button-lg button-primary">Large size</div>
        <div class="button button-primary">Default size</div>
        <div class="button button-sm button-primary">Small size</div>
      </div>
    </div>
  </section>
  <hr>
  <!--Button Shapes-->
  <section class="section section-md bg-default text-center">
    <div class="container">
      <h4>Button Shapes</h4>
      <p>4 different shapes: default, round, round 2, and circle.</p>
      <div class="group-xl">
        <div class="button button-primary">Default</div>
        <div class="button button-primary button-round-1">Round 1</div>
        <div class="button button-primary button-round-2">Round 2</div>
        <div class="button button-primary button-circle">Circle</div>
      </div>
    </div>
  </section>
  <hr>
  <!--Buttons with Icons-->
  <section class="section section-md bg-default text-center">
    <div class="container">
      <h4>Buttons with Icons</h4>
      <p>Buttons are fully integrated with 900+ icons.</p>
      <div class="group-xl">
        <div class="button button-icon button-icon-right button-primary"><span class="icon mdi mdi-account"></span>Icon right</div>
        <div class="button button-icon button-icon-left button-primary"><span class="icon mdi mdi-account"></span>Icon left </div>
        <div class="button button-icon button-icon-right button-default-outline"><span class="icon mdi mdi-account"></span>Icon right</div>
        <div class="button button-icon button-icon-left button-default-outline"><span class="icon mdi mdi-account"></span>Icon left</div>
      </div>
    </div>
  </section>
  <hr>
  <!--Buttons with Shadow-->
  <section class="section section-md bg-default text-center">
    <div class="container">
      <h4>Buttons with Shadow</h4>
      <p>Enhance your buttons with a shadow effect.</p>
      <div class="group-xl">
        <div class="button button-primary button-circle button-shadow">Shadow</div>
        <div class="button button-ghost button-circle button-shadow">Shadow</div>
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