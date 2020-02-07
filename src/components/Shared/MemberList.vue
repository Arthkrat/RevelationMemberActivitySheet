<template>
    <v-col class="grey darken-2 white--text"> 
        <v-row  class="text-center">
                <v-col v-if="member">
                    <span>Member</span>
                </v-col>
                <v-divider vertical class="white" v-if="member"></v-divider>
                <v-col class="text-center" v-if="memberClass">
                    <span >Class</span>
                </v-col>
                <v-divider vertical class="white" v-if="memberClass"></v-divider>
                <v-col v-if="bm"  class="text-center">
                    <span>BM</span>
                </v-col>
                <v-divider vertical class="white" v-if="bm"></v-divider>
                <v-col v-if="dragon" class="text-center">
                    <span>Dragon</span>
                </v-col>
                <v-divider vertical class="white" v-if="dragon"></v-divider>
                <v-col v-if="orz">
                   <span>ORZ</span> 
                </v-col>
                <v-divider vertical class="white" v-if="orz"></v-divider>
                <v-col v-if="siege">
                    <span> SIEGE </span> 
                </v-col>
                <v-divider vertical class="white" v-if="siege"></v-divider>
                <v-col v-if="agaddon">
                    <span> AGADDON </span> 
                </v-col>
                <v-divider vertical class="white" v-if="agaddon"></v-divider>
                <v-col v-if="percent">
                    <span> Activity percent </span>
                </v-col>
            </v-row>

            <v-divider class="white" v-if="memberClass"></v-divider>
            
            <v-row  v-for="(mate, index) in mates" :key="`mate-${index}`" class="text-center" >
                <v-col @click.stop="show" :class="`${mate.classColor} black--text`" v-if="member" >
                    <span @click="showMe(mate.month)">
                        {{mate.name}}
                    </span>
                </v-col>
                <v-divider vertical class="white" v-if="member"></v-divider>
                <v-col v-if="memberClass" :class="`${mate.classColor} black--text`">
                    <span >
                        {{mate.class}}
                    </span>
                </v-col>
                <v-divider vertical class="white" v-if="memberClass"></v-divider>
                <v-col v-if="bm">
                    <span class="text-center">
                        {{mate.bm}}
                    </span>
                </v-col>
                <v-divider vertical class="white" v-if="bm"></v-divider>
                <v-col v-if="dragon">
                        <v-icon dark color="white" center v-if="mate.dragon">mdi-checkbox-marked-circle</v-icon>
                </v-col>
                <v-divider vertical class="white" v-if="dragon"></v-divider>
                <v-col v-if="orz">
                   <span>{{mate.month[`${monthPicked}`].activityOrz}}</span>
                </v-col>
                <v-divider vertical class="white" v-if="orz"></v-divider>
                <v-col v-if="siege">
                   <span>{{mate.month[`${monthPicked}`].activitySiege}}</span>
                </v-col>
                <v-divider vertical class="white" v-if="siege"></v-divider>
                <v-col v-if="agaddon">
                   <span>{{mate.month[`${monthPicked}`].activityAgaddon}}</span>
                </v-col>
                <v-divider vertical class="white" v-if="agaddon"></v-divider>
                <v-col v-if="percent" @click="consolee()">
                   <span >
                       {{`${(mate.month[`${monthPicked}`].activityOrz + 
                       mate.month[`${monthPicked}`].activitySiege +
                       mate.month[`${monthPicked}`].activityAgaddon)/10*100}%`}}
                    </span>
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

    </v-col>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
    data: () => ({
      showMenu: false,
      x: 0,
      y: 0,    
      }),
    methods: {
        show (e) {
            this.showMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
            this.showMenu = true
            })
        },
        consolee(a) {
            // eslint-disable-next-line no-console
            console.log(a)
        }
    },
    props: {
        member: {
            default: false
        },
        memberClass: {
            default: false
        },
        bm: {
            default: false
        },
        dragon: {
            default: false
        },
        orz: {
            default: false
        },
        siege: {
            default: false
        },
        agaddon: {
            default: false
        },
        percent: {
            default: false
        },
        monthPicked: {
            type: String,
            default: 'january'
        }
    },
    computed: {
        ...mapGetters(['mates']),
    }
}
</script>