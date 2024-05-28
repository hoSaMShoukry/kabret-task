<template>
  <v-app>
      <div class="landing">
        <navbar/>
        <router-view />
  <footerPage/>

      </div>
  </v-app>
</template>

<script setup>
import footerPage from './components/footerPage.vue'
import navbar from './components/navbar.vue'
import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine@2/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles@2/+esm";
import { onBeforeMount, ref } from "vue";
 import { auth } from "./router/loginAuth";
import FooterPage from './components/footerPage.vue';
 const loginAuth = auth(); 
 const loadParticles = async (options) => {
  await loadFull(tsParticles);
  await tsParticles.load(options);
}

const baseEmitterConfig = (direction, position) => {
  return {
    direction,
    rate: {
      quantity: 15,
      delay: 0.3
    },
    size: {
      width: 0,
      height: 0
    },
    spawnColor: {
      value: "#ff0000",
      animation: {
        h: {
          enable: true,
          offset: {
            min: -1.4,
            max: 1.4
          },
          speed: 2,
          sync: false
        },
        l: {
          enable: true,
          offset: {
            min: 40,
            max: 60
          },
          speed: 0,
          sync: false
        }
      }
    },
    position
  };
};

const configs = ref({
  background: {
    color: "#fff"
  },
  particles: {
    angle: {
      value: 0,
      offset: 30
    },
    move: {
      enable: true,
      outModes: {
        top: "none",
        default: "destroy"
      },
      gravity: {
        enable: true
      },
      speed: { min: 5, max: 20 },
      decay: 0.01
    },
    number: {
      value: 0,
      limit: 300
    },
    opacity: {
      value: 1
    },
    shape: {
      type: ["circle", "square", "triangle"]
    },
    size: {
      value: { min: 2, max: 5 },
      animation: {
        count: 1,
        startValue: "min",
        enable: true,
        speed: 5,
        sync: true
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: [
    baseEmitterConfig("top-right", { x: 0, y: 30 }),
    baseEmitterConfig("top-left", { x: 100, y: 30 })
  ]
});
onBeforeMount(() => {
  loginAuth.logOut()
  loadParticles(configs.value);  

});
</script>
<style lang="css">
#refresh-config {
  bottom: 5px;
  left: 5px;
  position: fixed;
  z-index: 500;
}
.landing{
  position: relative;
  z-index: 1000;
  overflow: hidden;
  max-width: 100% !important;
  object-fit: cover !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position-x: right !important;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
}
</style>