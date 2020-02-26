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
              v-model="date"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              v-on="on"
              dark
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
            @click:date="changeDate"
            :allowed-dates="allowedDays"
          ></v-date-picker>
        </v-menu>
        <v-text-field dark label="Result"></v-text-field>
        <v-checkbox 
        dark 
        v-model="checkedAll" 
        :label="checkedAll ? 'Check back' : 'Check all' " @click="checkValue"></v-checkbox>
        <v-row  v-for="(mate, index) in mates" :key="`mate-${index}`" class="text-center" >
                <v-col :class="`${mate.classColor} black--text`">
                    <v-checkbox v-model="presence"
                    :label="mate.name"
                    :value="mate.name"
                    color="black"
                    class="ma-0 pa-0"
                    hide-details
                    ></v-checkbox>
                </v-col>
        </v-row>
        <v-btn width="100%" class="mt-3">submit</v-btn>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      date: "2020-02-06",
      menu1: false,
      menu2: false,
      checkedAll: false,
      presence: [],
    };
  },
  computed: {
    ...mapGetters(["mates", "getOrz"]),
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  created() {
    this.presence = this.getOrz(this.date).presence;
  },
  methods: {
    changeDate(){
      this.checkedAll = false
       this.presence = this.getOrz(this.date).presence;
    },
    checkValue() {
      if (this.checkedAll) {
        this.presence = this.mates.map(item => item.name)
      } else {
        this.presence = this.getOrz(this.date).presence;
      }
    },
    ...mapActions(['CHANGEORZPRESENCE']),
    allowedDays(val) {
      return (
        moment(val)
          .format("dddd, MMMM Do YYYY")
          .split(",")[0] === "Thursday"
      );
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>