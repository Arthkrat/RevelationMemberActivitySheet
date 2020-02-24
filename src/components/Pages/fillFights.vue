<template>
  <v-row>
    <v-col  class="ml-5">
      <form>
        <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        :single-select="singleSelect"
        item-key="name"
        show-select
        class="elevation-1"
        dark
      >
      <template v-slot:top>
      <v-toolbar flat color="black" height="100px">
        <v-row align="center">
          <v-col cols="1">
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
                  class="mb-4"
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
          </v-col>
             <v-divider
          class="mx-4 ml-10"
          inset
          vertical
        ></v-divider>
          <v-col cols="5">
            <v-toolbar-title class="text-center">First fight</v-toolbar-title>
          </v-col>
             <v-divider
          class="mx-4 ml-10"
          inset
          vertical
        ></v-divider>
           <v-col cols="4">
            <v-toolbar-title class="text-center">Second fight</v-toolbar-title>
          </v-col>
        </v-row>
      </v-toolbar>
    </template>
      <template v-slot:item.name="{ item }">
      <v-chip label :color="getColor(item.name)" dark>{{ item.name }}</v-chip>
    </template>
    <template v-slot:item.damage_first="{ item }">
      <v-text-field type="number" v-model.number="item.damage_first"></v-text-field>
    </template>
    <template v-slot:item.kill_first="{ item }">
      <v-text-field type="number" v-model.number="item.kill_first"></v-text-field>
    </template>
    <template v-slot:item.heal_first="{ item }">
      <v-text-field type="number" v-model.number="item.heal_first"></v-text-field>
    </template>
     <template v-slot:item.assistance_first="{ item }">
      <v-text-field type="number" v-model.number="item.assistance_first"></v-text-field>
    </template>
    <template v-slot:item.damage_second="{ item }">
      <v-text-field type="number" v-model.number="item.damage_second"></v-text-field>
    </template>
    <template v-slot:item.kill_second="{ item }">
      <v-text-field type="number" v-model.number="item.kill_second"></v-text-field>
    </template>
    <template v-slot:item.heal_second="{ item }">
      <v-text-field type="number" v-model.number="item.heal_second"></v-text-field>
    </template>
     <template v-slot:item.assistance_second="{ item }">
      <v-text-field type="number" v-model.number="item.assistance_second"></v-text-field>
    </template>
  </v-data-table>
        <v-btn dark width="100%" class="mt-3">submit</v-btn>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      date: "2020-02-06",
      menu1: false,
      menu2: false,
      checkedAll: false,
      presence: [],
      singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Character',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Damage', value: 'damage_first' },
          { text: 'Kill', value: 'kill_first' },
          { text: 'Heal', value: 'heal_first' },
          { text: 'Assistance', value: 'assistance_first' },
          { text: 'Damage', value: 'damage_second' },
          { text: 'Kill', value: 'kill_second' },
          { text: 'Heal', value: 'heal_second' },
          { text: 'Assistance', value: 'assistance_second' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Ice cream sandwich',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Eclair',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Cupcake',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Gingerbread',
            damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Jelly bean',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Lollipop',
            damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Honeycomb',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'Donut',
            damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
          {
            name: 'KitKat',
             damage_first: 159,
            damage_second: 159,
            kill_first: 6.0,
            kill_second: 6.0,
            heal_first: 24,
            heal_second: 24,
            assistance_first: 4.0,
            assistance_second: 4.0,
          },
        ],
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
       this.presence = this.getOrz(this.date).presence;
    },
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