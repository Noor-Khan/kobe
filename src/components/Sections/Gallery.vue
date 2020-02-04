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
            <vue-gallery :images="images" :index="index" @close="index = null"></vue-gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '370px', height: '200px' }"
            ></div>
            <!-- <gallery :images="images" /> -->
            <!-- <vue-masonry-gallery :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn"></vue-masonry-gallery> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import VueGallery from "vue-gallery";
// import Gallery from "vue-cover-gallery";
// import VueWMasonryGallery from "vue-masonry-gallery/src/components/VueMasonryGallery.vue";
export default {
  components: {
    // VueWMasonryGallery
    // Gallery
    VueGallery
  },
  data() {
    return {
      index: null,
      images: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#gallery {
  padding: 50px 0;
  background-color: #fbfbfb;
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .gallery-left {
    .horizontal-info {
      &::after {
        left: 8rem;
      }
    }
  }
}
</style>