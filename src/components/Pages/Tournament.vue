<template>
    <div>
        <v-row> 
            <v-col cols="2" class="ml-5">
                    <v-menu 
                        color="white"
                        class="white"
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }" class="white--text">
                            <v-text-field
                                background-color="grey lighten-2"
                                color="white"
                                v-model="dates"
                                v-on="on"
                                readonly
                                outlined
                            ></v-text-field>
                        </template>
                        <v-date-picker 
                        light v-model="dates"
                        multiple
                        :close-on-content-click="false"
                        :allowed-dates="allowedDays"
                        >
                        </v-date-picker>
                    </v-menu>
            </v-col>   
        </v-row>
        <v-row >
            <v-col cols="1" class="ml-5">
                <member-list
                :member="true"
                >
                </member-list>
            </v-col>
            <v-col cols="1" v-for="(date, i) in dates" :key="`${i}-date`">
                <member-list
                :orz="true"
                :date="date"
                >
                </member-list>
            </v-col>
            <v-col cols="1" v-if="dates.length">
                <member-list
                :percent="dates"
                >
                </member-list>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
import MemberList from '../Shared/MemberList'
export default {
    components: {
        'member-list' : MemberList
    },
    computed: {
        ...mapGetters(['mates'])
    },
    data: () => ({
      dates: [],
      menu2: false
    }),
    methods: {
    allowedDays(val) {
           return moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Friday'
        }
    }
}
</script>