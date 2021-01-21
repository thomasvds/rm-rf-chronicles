<template>
  <div>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './app-footer.vue'

export default {
  components: {
    AppFooter,
  },
}
</script>

<style>
.cool-gradient {
  background: -webkit-radial-gradient(right, #8b5cf6 20%, #ec4899 80%);
}

.css-gnissy {
  background: -webkit-linear-gradient(
    right,
    #8b5cf6 1%,
    #ec4899 50%,
    #8b5cf6 99%
  );

  -webkit-background-clip: text;
  /*   
    `color` seems to work too
    -webkit-text-fill-color: transparent; 
  */
  color: transparent;
  background-size: 200% auto;
  animation: shine 10s ease infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
