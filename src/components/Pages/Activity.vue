<template>
<div>
    <v-date-picker v-model="picker" type="date" color="green lighten-1" @click:date="cos($event)"></v-date-picker>
    <v-row class="ma-10">
        <member-list
        :member="true"
        :siege="true"
        :orz="true"
        :agaddon="true"
        :percent="true"
        :monthPicked="pickedMonth"
        :datePicked="pickedDate"
        ></member-list>

    </v-row>
</div>
</template>
<script>
import MemberList from '../Shared/MemberList'
export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 7)
        }
    },
    components: {
        'member-list' : MemberList
    },
    computed: {
        pickedMonth() {
            return this.picker.split('-', 2)[1]
        },
        pickedDate() {
            // eslint-disable-next-line no-console
            console.log(this.picker.substr(8, 10))
            return this.picker.substr(8, 10)
        } 
    },
    methods: {
        cos(event) {
            // eslint-disable-next-line no-console
            console.log(event)
        }
    }
}
</script>