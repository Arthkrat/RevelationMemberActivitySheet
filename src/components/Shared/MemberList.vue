<template>
    <v-col class="grey darken-2 white--text"> 
        <v-row  class="text-center">
                <v-col v-if="member || memberCheck">
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

                <v-col v-if="siege" class="pa-0">
                    <v-row class="justify-center"> {{date}} </v-row> 
                    <v-row>
                        <v-col class="pa-0">
                            <span>First</span>
                        </v-col>
                        <v-col class="pa-0">
                            <span>Second</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical class="white" v-if="siege"></v-divider>

                <v-col v-if="agaddon">
                    <span> AGADDON </span> 
                </v-col>
                <v-divider vertical class="white" v-if="agaddon"></v-divider>

                <v-col v-if="datesArray">
                    <span> Activity percent </span>
                </v-col>

                <v-col v-if="tournament" class="pa-0">
                    <p class="text-center mb-0 mt-n3">
                        <span>{{date}}</span>
                    </p>
                    <v-row>
                        <v-col class="pb-0">First</v-col>
                        <v-col class="pb-0">Second</v-col>
                        <v-col class="pb-0">Stock</v-col>
                    </v-row>
                    
                </v-col>
            </v-row>

            <v-divider class="white" v-if="memberClass"></v-divider>
            
            <v-row  v-for="(mate, index) in mates" :key="`mate-${index}`" class="text-center" >

                <v-col @click.stop="show" :class="`${mate.classColor} black--text`" v-if="member" >
                    <span @click="showMe(mate)">
                        {{mate.name}}
                    </span>
                </v-col>

                <v-col :class="`${mate.classColor} black--text`" v-if="memberCheck">
                    <v-checkbox v-model="checkValue"
                    :label="mate.name"
                    :value="mate.name"
                    color="black"
                    class="ma-0 pa-0"
                    hide-details
                    ></v-checkbox>
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
                <!--    ORZ       -->
                <v-col v-if="orz">
                    <v-icon size='20px' 
                    :class="[compareMemberOrz(mate.name, date) ? 'green--text text--darken-1' : 'red--text text--darken-1']"
                    >
                       {{thumbIcon(compareMemberOrz(mate.name, date))}}
                    </v-icon>
                </v-col>
                <v-divider vertical class="white" v-if="orz"></v-divider>
                <!--    SIEGE       -->
                <v-row v-if="siege">
                    <v-col>
                        <v-icon size='20px' 
                        :class="[compareMemberSiege(mate.name, date, 'first') ? 'green--text text--darken-1' : 'red--text text--darken-1']"
                        >
                            {{thumbIcon(compareMemberSiege(mate.name, date, 'first'))}}
                        </v-icon>
                    </v-col>
                    <v-col><v-icon size='20px' 
                        :class="[compareMemberSiege(mate.name, date, 'second') ? 'green--text text--darken-1' : 'red--text text--darken-1']"
                        >
                            {{thumbIcon(compareMemberSiege(mate.name, date, 'second'))}}
                        </v-icon>
                    </v-col>
                    
                </v-row>
                <v-divider vertical class="white" v-if="siege"></v-divider>
                <!--    AGADDON       -->
                <v-col v-if="agaddon">
                   <!-- <span>{{mate.month[`${monthPickedString}`][`${datePicked}`].activityAgaddon}}</span> -->
                </v-col>
                <v-divider vertical class="white" v-if="agaddon"></v-divider>
                <!-- ACTIVITY PERCENT ORZ-->
                <v-col v-if="datesArray && event === 'orz'">
                   <span>
                       {{getActivityPercentOrz(mate)}}
                    </span>
                </v-col>
                <!-- ACTIVITY PERCENT TOURNAMENT-->
                <v-col v-if="datesArray && event === 'tournament'">
                    <span>{{getActivityPercentTournament(mate.name)}}</span>
                </v-col>
                <!-- ACTIVITY PERCENT SIEGE -->
                <v-col v-if="datesArray && event === 'siege'">
                    <span>{{getActivityPercentSiege(mate.name)}}</span>
                </v-col>
                <!-- TOURNAMENT -->
                <v-row v-if="tournament">
                    <v-col>
                        <v-icon size='20px' 
                            :class="[compareMemberTournament(mate.name, date, 1) ? 'green--text text--darken-1' : 'red--text text--darken-1']">
                            {{thumbIcon(compareMemberTournament(mate.name, date, 1))}}
                        </v-icon>
                    </v-col>
                    <v-col>
                        <v-icon size='20px' 
                            :class="[compareMemberTournament(mate.name, date, 2) ? 'green--text text--darken-1' : 'red--text text--darken-1']">
                            {{thumbIcon(compareMemberTournament(mate.name, date, 2))}}
                        </v-icon>
                    </v-col>
                    <v-col>
                        <v-icon size='20px' 
                            :class="[compareMemberTournament(mate.name, date, 'stock') ? 'green--text text--darken-1' : 'red--text text--darken-1']">
                            {{thumbIcon(compareMemberTournament(mate.name, date, 'stock'))}}
                        </v-icon>
                    </v-col>
                </v-row>

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
        compareMemberOrz(mate, date) {
            return this.getOrz(date).presence.indexOf(mate) !== -1 ? true : false
        },
        compareMemberSiege(mate, date, hourNumber) {
            if(hourNumber === 'first')
                return this.getSiege(date).presence.firstHour.indexOf(mate) !== -1 ? true : false
            else if(hourNumber === 'second')
                return this.getSiege(date).presence.secondHour.indexOf(mate) !== -1 ? true : false
        },
        compareMemberTournament(mate, date, fightNumber) {
            if(fightNumber === 1)
                return Object.keys(this.getTournament(date).presence.firstFight).indexOf(mate) !== -1 ? true : false
            else if (fightNumber === 2)
                return Object.keys(this.getTournament(date).presence.secondFight).indexOf(mate) !== -1 ? true : false
            else if (fightNumber === 'stock')
                return this.getTournament(date).presence.stock.indexOf(mate) !== -1 ? true : false
        },
        getActivityPercentOrz(mate) {
                let activityPercent = 0
                for(let date of this.datesArray) {
                    if(this.getOrz(date).presence.indexOf(mate.name) !== -1)
                    activityPercent++
                }
                return Math.floor((activityPercent / this.datesArray.length) * 100) + '%'
        },
        getActivityPercentTournament(mate) {
            let activityPercent = 0
            for(let date of this.datesArray) {
                if(
                Object.keys(this.getTournament(date).presence.firstFight).indexOf(mate) !== -1 ||
                Object.keys(this.getTournament(date).presence.secondFight).indexOf(mate) !== -1 ||
                this.getTournament(date).presence.stock.indexOf(mate) !== -1
                )
                    activityPercent +=1
            }
               return Math.floor((activityPercent / this.datesArray.length) * 100) + '%'
        },
        getActivityPercentSiege(mate) {
            let activityPercent = 0
            this.datesArray.map(date => {
                if( this.getSiege(date).presence.firstHour.indexOf(mate) !== -1 || 
                    this.getSiege(date).presence.secondHour.indexOf(mate) !== -1)
                        activityPercent++
            })
            return Math.floor((activityPercent / this.datesArray.length) * 100) + '%'
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
        memberCheck: {
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
        datesArray:  Array,
        date: String,
        event: String,
        tournament: {
            default: false
        },
        checkValue: Array
    },
    computed: {
        ...mapGetters(['mates', 'getOrz', 'getTournament', 'getSiege'])
    }
}
</script>
