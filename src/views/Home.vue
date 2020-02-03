<template>
  <div id="Home">
    <intro />
    <biography />
    <career />
    <achievements />
    <gallery />
  </div>
</template>

<script>
import Intro from "../components/Sections/Intro";
import Biography from "../components/Sections/Biography";
import Career from "../components/Sections/Career";
import Achievements from "../components/Sections/Achievements";
import Gallery from "../components/Sections/Gallery";
export default {
  components: {
    Intro,
    Biography,
    Career,
    Achievements,
    Gallery
  }
};
</script>
