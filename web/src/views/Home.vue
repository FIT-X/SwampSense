<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click='ledOn'>On</button>
    <button @click='ledOff'>Off</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

import axios from "axios";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted() {
    console.log(process.env.VUE_APP_PARTICLE_ACCESS_TOKEN);
  }

  ledOn() {
    const url = `https://api.particle.io/v1/devices/34003e000d47373334323233/led?access_token=${
      process.env.VUE_APP_PARTICLE_ACCESS_TOKEN
    }`;
    axios
      .post(url, {
        args: "on"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  ledOff() {
    const url = `https://api.particle.io/v1/devices/34003e000d47373334323233/led?access_token=${
      process.env.VUE_APP_PARTICLE_ACCESS_TOKEN
    }`;
    axios
      .post(url, {
        args: "off"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>
