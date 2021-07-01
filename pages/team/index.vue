<template>
  <div>
          <!-- Breadcrumbs-->
      <section class="breadcrumbs-custom bg-gray-200" data-preset='{"title":"Breadcrumbs","category":"header","reload":false,"id":"breadcrumbs"}'>
        <div class="container">
          <div class="row row-10 align-items-center">
            <div class="col-md-7 text-left">
              <div class="breadcrumbs-custom-title">Team</div>
            </div>
            <div class="col-md-5">
              <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li class="active">Team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-lg bg-default section-decoration-1 section-decoration-1-mode">
        <div class="container">
          <div class="row row-30">
            <div class="col-sm-6 col-lg-4" v-for="(item,index) in list" :key="item.name + index">
              <div class="team-classic">
                <div class="team-classic-img"><img :src="item.src" alt="" width="230" height="230"/>
                </div>
                <div class="team-classic-caption">
                  <h5 class="team-classic-title">{{item.name}}</h5>
                  <p>{{item.position}}</p>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a class="icon fa-facebook-f" href="#"></a></li>
                    <li class="list-inline-item"><a class="icon fa-instagram" href="#"></a></li>
                    <li class="list-inline-item"><a class="icon fa-linkedin" href="#"></a></li>
                  </ul>
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
  layout:"layout",
  asyncData(context) {
    console.log("asyncData")
    const list= [
      {
       src:require("~/assets/images/team-1-230x230.jpg"),
       name:"Peter Adams",
       position:"Co-Founder" 
      },
      {
       src:require("~/assets/images/team-2-230x230.jpg"),
       name:"Julie Collins",
       position:"Co-Founder" 
      },
      {
       src:require("~/assets/images/team-3-230x230.jpg"),
       name:"John Snow",
       position:"Designer" 
      },
      {
       src:require("~/assets/images/team-4-230x230.jpg"),
       name:"Jane Williams",
       position:"Designer" 
      },
      {
       src:require("~/assets/images/team-5-230x230.jpg"),
       name:"Mark Smith",
       position:"Frontend developer" 
      },
      {
       src:require("~/assets/images/team-6-230x230.jpg"),
       name:"John Doe",
       position:"Frontend developer" 
      },
      {
       src:require("~/assets/images/team-7-230x230.jpg"),
       name:"Alex McMillan",
       position:"Backend developer" 
      },
      {
       src:require("~/assets/images/team-8-230x230.jpg"),
       name:"Tom Ford",
       position:"Tester" 
      }
    ]
    return new Promise((resolve) => {
      setTimeout( () => {
        resolve({ list })
      }, 1000)
    })
  }
}
</script>