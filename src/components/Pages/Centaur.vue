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
                :monthPicked="pickedMonth(date)"
                :datePicked="pickedDate(date)"
                >
                </member-list>
            </v-col>
            
        </v-row>

    </div>
</template>
<script>
import MemberList from '../Shared/MemberList'
export default {
    components: {
        'member-list' : MemberList
    },
    data: () => ({
      dates: [new Date().toISOString().substr(0, 10)],
      menu2: false
    }),
    methods: {
        pickedMonth(date) {
                return date.split('-', 2)[1]
        },
        pickedDate(date) {
            return date.substr(8, 10)
        },
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
    }
}

</script>