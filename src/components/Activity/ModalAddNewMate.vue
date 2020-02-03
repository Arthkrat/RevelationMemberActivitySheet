
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="grey darken-2" dark v-on="on">Add new member</v-btn>
      </template>
      <v-card>
        <v-form ref="form">
        <v-card-title>
          <span class="headline">Member Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nickname" 
                    v-model="nickname" required
                    :rules="[v => !!v || 'Nickname required!']">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select label="Class" :items="itemsForSelect"
                    v-model="memberClass" required
                    :rules="[v => !!v || 'Class required!']">
                </v-select >
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="BM" v-model="bm"></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-text-field label="Comment" v-model="comment"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submitForm">Save</v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      nickname: '',
      bm: '',
      memberClass: '',
      comment: '',
      itemsForSelect: ['Knight', 'Mage', 'Druid', 'Assasin', 'Guard','Gunner']
    }),
    methods: {
        submitForm() {
        this.$refs.form.reset()
         return true
        }
    }
  }
</script>