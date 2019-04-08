<template>
    <div class="home">
        <vue-thermometer
            :value="temperature"
            :min="0"
            :max="100"
            scale="F" />
        <div>
            <button @click='ledOn'>On</button>
            <button @click='ledOff'>Off</button>
        </div>
        <div>
            <img src='https://storage.googleapis.com/hatterhacks2k19/output.jpg?dummy=123'>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

import axios from "axios";

const POLL_RATE = 5000;

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    temperature = 0;
    pressure = 0;
    brightness = 0;

    mounted() {
        console.log(process.env.VUE_APP_PARTICLE_ACCESS_TOKEN);
        setInterval(() => {
            const url = `https://api.particle.io/v1/devices/34003e000d47373334323233/temp?access_token=${
                process.env.VUE_APP_PARTICLE_ACCESS_TOKEN
                }`;
            axios
                .post(url, {
                    args: "air"
                })
                .then((response) => {
                    console.log(response);
                    this.temperature = response.data.return_value;
                })
                .catch((error) => {
                    console.log(error);
                });
        }, POLL_RATE)
    }

    ledOn() {
        const url = `https://api.particle.io/v1/devices/34003e000d47373334323233/led?access_token=${
            process.env.VUE_APP_PARTICLE_ACCESS_TOKEN
            }`;
        axios
            .post(url, {
                args: "on"
            })
            .then((response) => {
                console.log(response);
                this.$toasted.show(response.data.return_value)
            })
            .catch((error) => {
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
            .then((response) => {
                this.$toasted.show(response.data.return_value)
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
</script>

<style lang="scss" scoped>
.home {
    > div {
        display: inline-block;
        padding: 15px;
        vertical-align: middle;
    }
}
</style>
