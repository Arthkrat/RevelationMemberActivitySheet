<template>
<v-container fluid>
  <v-row>
    <v-col cols="12" class="pl-10 pr-10">
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
          ></v-date-picker>
        </v-menu>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="4">
            <v-select
              :items="timePoints"
              label="Select time"
              dark
            ></v-select>
          </v-col>
          <v-col cols="12" sm="4">
          <v-text-field
            dark
            type="number"
            label="Count chest"
            :value="countChest"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            dark
            type="number"
            label="Count ghosts"
            :value="countghosts"
          ></v-text-field>
        </v-col>
        </v-row>
      <v-container style="background-color: #212121"  fluid>
        <v-checkbox
        dark
        v-model="checkedAll"
        :label="checkedAll ? 'Check back' : 'Check all' " @change="checkValue"></v-checkbox>
        <v-row  class="text-center"
        align="stretch"
        justify="start"
        style="height: 55vh; flex-direction: column; align-content: start">
          <v-col
          cols="1"
          v-for="(mate, index) in mates"
          :key="`mate-${index}`"
          :class="`${mate.classColor} black--text mr-12 mb-2`">
              <v-checkbox v-model="presence"
              :label="mate.name"
              :value="mate.name"
              color="black"
              class=" ma-0 pa-0"
              hide-details
              ></v-checkbox>
            </v-col>
        </v-row>
         </v-container>
        <v-btn width="100%" class="mt-3">submit</v-btn>
      </form>
    </v-col>
  </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      date: "2020-02-06",
      menu1: false,
      menu2: false,
      checkedAll: false,
      presence: [],
      timePoints: ['19', '20', '21', '22', '23'],
      countChest: null,
      countghosts: null
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
    getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    changeDate(){
      this.checkedAll = false
       this.presence= this.getOrz(this.date).presence;
    },
    checkValue() {
      if (this.checkedAll) {
        this.presence = this.mates.map(item => item.name)
      } else {
        this.presence = this.getOrz(this.date).presence;
      }
    },
    ...mapActions(['CHANGEORZPRESENCE']),
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