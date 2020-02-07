<template>
<div>
    <v-date-picker v-model="picker" type="month" color="green lighten-1" @click:month="cos"></v-date-picker>
    <v-row class="ma-10">
        <member-list
        :member="true"
        :siege="true"
        :orz="true"
        :agaddon="true"
        :percent="true"
        :monthPicked="pickedMonth"
        ></member-list>
        
    </v-row>
</div>
</template>
<script>
import MemberList from '../Shared/MemberList'
export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 7),
        }
    },
    components: {
        'member-list' : MemberList
    },
    computed: {
        pickedMonth() {
            let month = this.picker.split('-', 2)[1]
            switch(month) {
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
    },
    methods: {
        cos() {
            // eslint-disable-next-line no-console
            console.log(this.pickedMonth)
        }
    },
    created() {
        this.cos()
    }
}
</script>