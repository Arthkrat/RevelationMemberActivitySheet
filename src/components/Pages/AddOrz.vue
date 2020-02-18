<template>
  <v-row>
    <v-col cols="1" class="ml-5">
      <form>
    <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
        
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false" :allowed-dates="allowedDays"></v-date-picker>
        </v-menu>
    <v-text-field
      dark
      label="Result"
    ></v-text-field>
    <v-checkbox
      dark
      label="Check all"
      required
    ></v-checkbox>
    <member-list 
    :memberCheck="true"
    :date="date"
    ></member-list>
    <v-btn width="100%" class="mt-3">submit</v-btn>
  </form>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
import MemberList from '../Shared/MemberList'
export default {
    components: {
        'member-list' : MemberList,
    },
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
    computed: {
        ...mapGetters(['mates']),
        computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    methods: {
    allowedDays(val) {
           return moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Thursday'
        },
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}

</script>