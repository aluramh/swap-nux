<template>  
  <v-container>
    <v-flex xs12>
      <v-layout row>
        <v-flex xs12 md4>
          <v-select
            :items="categories"
            v-model="category"
            label="Filter by Category"
            @change="loadAll"
            clearable
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md4>
          <CardsSearchBar @nosearch="loadAll" @searching="loadFound"/>
        </v-flex>
        
      </v-layout>
      <v-layout row>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex 
              v-for="card in cards" 
              :key="card.docID"
              xs12
              sm6
              md3>
                <SwapCard :contact="card" />
            </v-flex>
            <h1 v-if="!cards.length">You have no cards</h1>
          </v-layout>
        </v-container>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import SwapCard from "~/components/Cards/CardSingle";
import CardsSearchBar from "~/components/Cards/CardSearchBar";
export default {
  components: { SwapCard, CardsSearchBar },
  middleware: "auth",
  async asyncData({ app }) {
    let { cards, resultCount } = await app.$axios.$get("/api/cards");

    let categories = cards.map(k => k.category);

    categories = [...new Set(categories)];
    categories = categories.filter(Boolean);

    return { cards, resultCount, categories };
  },
  data() {
    return {
      category: null
    };
  },
  methods: {
    async loadAll() {
      const { cards } = await this.$axios.$get("/api/cards", {
        params: {
          category: this.category
        }
      });
      this.cards = cards;
    },
    loadFound(cards) {
      this.cards = cards;
    },
    clearFilters() {
      this.category = null;
      this.loadAll();
    }
  }
};
</script>
