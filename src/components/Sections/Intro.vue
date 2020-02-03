<template>
  <section id="intro" class="pt-12">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="text-left">
          <div class="intro-right">
            <div class="fade-heading text-uppercase">
              <h2>bryant 24</h2>
            </div>
            <div class="memory">
              <p class="mb-0">In memory of</p>
            </div>
            <div class="main-heading text-uppercase">
              <h3>
                Kobe been
                <div style="color:#F2B923; display: inline-block">bryant</div>
              </h3>
            </div>
            <div class="main-para pr-8">
              <p>“ When I play, I compete, and if you're too busy acting cool for the fans or celebrities courtside then I will demolish you in front of them.”</p>
            </div>
            <div class="vertical-info">August 23, 1978 – January 26, 2020</div>
            <div class="signature">
              <img src="../../assets/images/sign.png" alt class="img-fluid" style="width: 250px;" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7"></v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#intro {
  position: relative;
  background-color: #070707;
  background-image: url("../../assets/images/kobe.png");
  background-position: right bottom;
  background-size: 65%;
  height: 90vh;
  .intro-right {
    padding-top: 3rem;
    color: #fff;
    .fade-heading {
      position: relative;
      left: -8rem;
      h2 {
        color: #2d2d2d;
      }
    }
    .memory {
      p {
        color: #f2b923;
      }
    }
    .main-heading {
      margin-bottom: 8px;
      h3 {
        color: #fff;
      }
    }
    .vertical-info {
      position: absolute;
      left: -2rem;
      transform: rotate(-90deg);
      &:before {
        content: "";
        position: absolute;
        left: -4rem;
        top: 10px;
        height: 2px;
        width: 50px;
        background-color: #f2b923;
      }
      &:after {
        content: "";
        position: absolute;
        right: -4rem;
        top: 10px;
        height: 2px;
        width: 50px;
        background-color: #f2b923;
      }
    }
  }
}
</style>