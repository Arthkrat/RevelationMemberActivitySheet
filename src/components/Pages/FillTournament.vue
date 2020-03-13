<template>
  <v-row>
    <v-col  class="ml-5">
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
                  persistent-hint
                  v-on="on"
                  dark
                  class="mb-4"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu1 = false"
                :allowed-dates="allowedDays"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      <v-tabs dark>
        <v-tab background-color="black">
          First fight
        </v-tab >
        <v-tab >
          Second fight
        </v-tab>
        <v-tab-item style="background-color: #212121">

          <v-data-table
            v-model="selectedFirst"
            :headers="headers"
            :items="presenceFirst"
            :single-select="singleSelect"
            item-key="name"
            show-select
            class="elevation-1"
            dark
          >
            <template v-slot:top>
              <v-text-field type="text" v-model="enemyFirst" label="Enemy"></v-text-field>
            </template>
            <template v-slot:item.name="{ item }">
              <v-chip label dark>{{ item.name }}</v-chip>
            </template>
            <template v-slot:item.damage="{ item }">
              <v-text-field type="number" v-model.number="item.damage"></v-text-field>
            </template>
            <template v-slot:item.kill="{ item }">
              <v-text-field type="number" v-model.number="item.kill"></v-text-field>
            </template>
            <template v-slot:item.heal="{ item }">
              <v-text-field type="number" v-model.number="item.heal"></v-text-field>
            </template>
            <template v-slot:item.assists="{ item }">
              <v-text-field type="number" v-model.number="item.assists"></v-text-field>
            </template>
          </v-data-table>
        </v-tab-item>
        <v-tab-item style="background-color: #212121">
           <v-data-table
              v-model="selectedSecond"
              :headers="headers"
              :items="presenceSecond"
              :single-select="singleSelect"
              item-key="name"
              show-select
              class="elevation-1"
              dark
            >
          <template v-slot:top>
            <v-text-field type="text" v-model="enemySecond" label="Enemy"></v-text-field>
          </template>
          <template v-slot:item.name="{ item }">
              <v-chip label dark>{{ item.name }}</v-chip>
            </template>
            <template v-slot:item.damage="{ item }">
              <v-text-field type="number" v-model.number="item.damage"></v-text-field>
            </template>
            <template v-slot:item.kill="{ item }">
              <v-text-field type="number" v-model.number="item.kill"></v-text-field>
            </template>
            <template v-slot:item.heal="{ item }">
              <v-text-field type="number" v-model.number="item.heal"></v-text-field>
            </template>
            <template v-slot:item.assists="{ item }">
              <v-text-field type="number" v-model.number="item.assists"></v-text-field>
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs>
        <v-btn dark width="100%" class="mt-3" @click="submitTournament">submit</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      date: "2020-02-07",
      enemyFirst: '',
      enemySecond: '',
      menu1: false,
      menu2: false,
      checkedAll: false,
      presenceFirst: [],
      presenceSecond: [],
      singleSelect: false,
        selectedFirst: [],
        selectedSecond: [],
        headers: [
          {
            text: 'Character',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Damage', value: 'damage' },
          { text: 'Kill', value: 'kill' },
          { text: 'Heal', value: 'heal' },
          { text: 'Assistance', value: 'assists' }
        ]
    };
  },
  computed: {
    ...mapGetters(["getTournament", 'guildMates']),
    getTournamentFirstFight() {
      return this.getTournament(this.date).presence.firstFight
    },
    getTournamentSecondFight() {
      return this.getTournament(this.date).presence.secondFight
    }
  },
  created() {
    this.presenceFirst = [...this.guildMates] 
    this.presenceSecond   = [...this.guildMates] 
    this.presenceFirst = this.mapArray(this.presenceFirst)
    this.presenceSecond = this.mapArray(this.presenceSecond)
  },
  methods: {
    ...mapActions(['SETTOURNAMENT']),
      allowedDays(val) {
           return moment(val).format('dddd, MMMM Do YYYY').split(',')[0] === 'Friday'
      },
      submitTournament() {
        this.SETTOURNAMENT({
          date: this.date,
          firstFight: this.selectedFirst,
          secondFight: this.selectedSecond,
          firstEnemy: this.enemyFirst,
          secondEnemy: this.enemySecond,
          firstWin: true,
          secondWin: false
        })
      },
      mapArray(array) {
       return array.map(item => 
      ({
        'name': item,
        'damage': 0,
        'kill': 0,
        'heal': 0,
        'assists': 0
        }))
      }
  }
};
</script>  