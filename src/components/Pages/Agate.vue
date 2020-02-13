<template>
    <div>
        <v-date-picker
        v-model="picker"
        :allowed-dates="allowedDays"
        @click:day="allowedDays"
        ></v-date-picker>
        <v-row>

        </v-row>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data() {
        return {
            picker: [this.date,],
            date: new Date().toISOString().substr(0, 10)
        }
    },
    methods: {
        allowedDays(val) {
            // eslint-disable-next-line no-console
            if(moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Saturday') {
                this.picker.push(val)
            }
           // console.log(moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Saturday')
           return moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Saturday'
        }
    },
    created() {
        
        
    }
}
</script>