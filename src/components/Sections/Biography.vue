<template>
  <section id="biography">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="biography-right text-left">
            <div class="fade-heading text-uppercase">
              <h2>Biography</h2>
            </div>
            <div class="horizontal-info">
              <p>No.8, No.24 Los Angeles Lakers</p>
            </div>
            <div class="main-heading text-uppercase">
              <h3>kobe's Biography</h3>
            </div>
            <div class="main-para">
              <p>
                Kobe Bryant was an American professional basketball player.A shooting guard, Bryant entered the
                <a
                  href="#"
                >National Basketball Association</a> (NBA) directly from high school, and played his entire 20-season professional career in the league with the
                <a
                  href="#"
                >Los Angeles Lakers</a>. Bryant won five NBA championships, was an 18-time All-Star, 15-time member of the All-NBA Team, 12-time member of the All-Defensive Team
              </p>
            </div>
            <div class="learn-more-btn">
              <v-btn
                text
                medium
                color="primary"
                href="https://en.wikipedia.org/wiki/Kobe"
                target="_blank"
              >Learn more</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="kobe-img">
            <img src="../../assets/images/kobe2.png" alt class="img-fluid" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#biography {
  position: relative;
  padding: 50px 0;
  .kobe-img {
    position: relative;
    img {
      border-bottom: 5px solid #efefef;
    }
  }
}
</style>