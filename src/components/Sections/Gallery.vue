<template>
  <section id="gallery">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="gallery-left text-left">
            <div class="fade-heading text-uppercase">
              <h2>Gallery</h2>
            </div>
            <div class="horizontal-info">
              <p>media gallery</p>
            </div>
            <div class="main-heading text-uppercase">
              <h3>Kobe's Photo</h3>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <div class="gallery-masonry">
            <!-- <vue-masonry-gallery :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn"></vue-masonry-gallery> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
// import VueWMasonryGallery from "vue-masonry-gallery/static";
export default {
  components: {},
  data() {
    return {
      imgArr: [
        {
          src: "../../assets/images/d.png"
        },
        {
          src: "../../assets/images/kobe.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#gallery {
  padding: 50px 0;
  background-color: #fbfbfb;
  .gallery-left {
    .horizontal-info {
      &::after {
        left: 8rem;
      }
    }
  }
}
</style>