<template>
<div>
    <v-row class="ma-10">
        <v-col cols="4" class="grey darken-2 white--text"> 
            <v-row  class="text-center">
                <v-col cols="4" >
                    <span>
                        Member
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="3">
                    <span class="text-center">
                        Class
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="2">
                    <span class="text-center">
                        BM
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="2">
                        Dragon
                </v-col>
                <v-divider vertical class="white"></v-divider>
            </v-row>
            <v-divider class="white"></v-divider>
            <v-row  v-for="(mate, index) in mates" :key="`mate-${index}`"  class="text-center">
                <v-col cols="4" @click="show">
                    <span class="text-center">
                        {{mate.name}}
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="3">
                    <span class="text-center">
                        {{mate.class}}
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="2">
                    <span class="text-center">
                        {{mate.bm}}
                    </span>
                </v-col>
                <v-divider vertical class="white"></v-divider>
                <v-col cols="2">
                        <v-icon dark color="white" center v-if="mate.dragon">mdi-checkbox-marked-circle</v-icon>
                </v-col>
                <v-divider vertical class="white"></v-divider>
            </v-row>
        </v-col>
        <v-col cols="6" class="text-right grey darken-2 white--text">
                <v-btn class="mr-6">Class Counter</v-btn>
                <v-divider class="white mt-3 ml-n6"></v-divider>
        </v-col>
    </v-row>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list>
          <v-list-item class="justify-center">Add to archive</v-list-item>
          <v-list-item class="justify-center">Statistic</v-list-item>
          <v-list-item class="justify-center">Change</v-list-item>
          <v-list-item class="red justify-center" >DELETE</v-list-item>
      </v-list>
    </v-menu>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
      data: () => ({
      showMenu: false,
      x: 0,
      y: 0
      }),
      computed: {
          ...mapGetters(['mates'])
      },
      methods: {
        show (e) {
            this.showMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
            this.showMenu = true
            })
        },
        congrats() {
            this.$router.push('/centaur')
        }
      }
  }
</script>