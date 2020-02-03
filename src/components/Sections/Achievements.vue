<template>
  <section id="achievements">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="achievements-left">
            <div class="achievements-right text-left">
              <div class="fade-heading text-uppercase">
                <h2>achievments</h2>
              </div>
              <div class="horizontal-info">
                <p>Awards and achievements</p>
              </div>
              <div class="main-heading text-uppercase">
                <h3>Awards and Honors</h3>
              </div>
              <div class="main-para">
                <p>
                  Kobe Bryant was an American professional basketball player.A shooting guard, Bryant entered the
                  <a
                    href="#"
                  >National Basketball Association</a>
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="awards text-left">
            <ul>
              <li>
                <v-icon>mdi-trophy</v-icon>Five Championships
              </li>
              <li>
                <v-icon>mdi-trophy</v-icon>15 All Star Game Appearances
              </li>
              <li>
                <v-icon>mdi-trophy</v-icon>4 All Game-Star MVP Awards
              </li>
              <li>
                <v-icon>mdi-trophy</v-icon>2 NBA Final MVP Awards
              </li>
              <li>
                <v-icon>mdi-trophy</v-icon>Single Regular Season MVP Award
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-right">
          <div class="awards-img pt-2">
            <img src="../../assets/images/awards.png" alt />
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
#achievements {
  padding: 50px 0;
  .awards {
    background-image: url("../../assets/images/awards.jpg");
    background-size: cover;
    ul {
      list-style-type: none;
      background-color: rgba(0, 0, 0, 0.55);
      padding-left: 0;
      li {
        height: 100px;
        line-height: 100px;
        border-bottom: 4px solid #fff;
        font-size: 22px;
        padding-left: 3rem;
        color: #fff;
        .v-icon {
          font-size: 30px;
          padding: 5px;
          color: #f2b923;
        }
      }
    }
  }
  .awards-img {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 5px;
      width: 400px;
      background-color: #efefef;
      bottom: 2px;
      left: 8rem;
    }
  }
}
</style>