<template>
    <v-col class="grey darken-2 white--text pt-0 pb-0"> 
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
                   <span>{{date}}</span> 
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
                <v-col @click.stop="show" :class="`${mate.classColor} black--text pa-4`" v-if="member" >
                    <span @click="showMe(mate)">
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
                <v-col v-if="orz" class="pa-4">
                   <v-icon>{{thumbIcon(mate.event.activityOrz[`${date}`])}}</v-icon>
                </v-col>
                <v-divider vertical class="white" v-if="orz"></v-divider>
                <v-col v-if="siege">
                   <!-- <span>{{mate.month[`${monthPickedString}`].activitySiege[+`${datePicked}`].presence}}</span> -->
                </v-col>
                <v-divider vertical class="white" v-if="siege"></v-divider>
                <v-col v-if="agaddon">
                   <!-- <span>{{mate.month[`${monthPickedString}`][`${datePicked}`].activityAgaddon}}</span> -->
                </v-col>
                <v-divider vertical class="white" v-if="agaddon"></v-divider>
                <v-col v-if="percent" >
                   <span>
                       
                       
                       {{getActivityPercent(mate)}}
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
        getActivityPercent(mate) {
            let activityPercent = 0
            for(let date of this.percent) {
                if(mate.event.activityOrz[`${date}`])
                activityPercent++
            }
            return Math.floor((activityPercent / this.percent.length) * 100) + '%'  
        },
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
        },
        thumbIcon(thumb) {
            return thumb ? `mdi-thumb-up` : `mdi-thumb-down`
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
            type: Array
        },
        date: {
            type: String
        }
    },
    computed: {
        ...mapGetters(['mates']),
        monthPickedString() {
            switch(this.monthPicked) {
                case '01' : return 'january'
                case '02' : return 'february'
                case '03' : return 'march'
                case '04' : return 'april'
                case '05' : return 'may'
                case '06' : return 'june'
                case '07' : return 'juli'
                case '08' : return 'august'
                case '09' : return 'september'
                case '10' : return 'october'
                case '11' : return 'november'
                case '12' : return 'december'
            }
            return true
        }

        
    }
}
</script>