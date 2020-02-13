<template>
<div>
    <v-row class="ma-10">    
        <member-list 
            :member="true"
            :memberClass="true"
            :bm="true"
            :dragon="true"
        ></member-list>    
        <v-col cols="6" class="text-right grey darken-2 white--text">
                <v-menu class="mr-6">
                    <template v-slot:activator="{ on }">
                        <v-btn
                        dark
                        v-on="on"
                        @click.once="CLASSCOUNT"
                        >
                        Class Counter
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(memberClassCount,i) in getClassCount" :key="`${i}-class`">
                            <v-list-item-title>{{ memberClassCount.name }} {{memberClassCount.count}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-divider class="white mt-3 ml-n6"></v-divider>
                <v-card class="ma-2 white--text grey darken-1">
                    <v-card-title class="justify-center"> {{ getRules.title }}</v-card-title>
                    <v-card-text class="white--text">
                        <p class="text-left mb-1" v-for="(rule, i) in getRules.rules" :key="`${i}-rule`">
                           <span class="subtitle-2">{{i}}</span> <span>{{rule}}</span>
                        </p>
                    </v-card-text>
                </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import MemberList from '../Shared/MemberList'
import {mapGetters, mapActions} from 'vuex'
  export default {
      computed: {
          ...mapGetters(['getClassCount', 'getRules'])
      },
      methods: {
          ...mapActions(['CLASSCOUNT']),
      },
      components: {
          'member-list' : MemberList
      }
  }
</script>