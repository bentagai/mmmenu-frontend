<template>
  <div>
    <!-- <h1>Welcome to Mmmenu</h1> -->
    <v-container class="container">
      <v-row dense>
        <v-col md="6" sm="6" xs="12" v-for="(article, idx) in articles" :key="idx">
          <CardArticle :card="article" :user="status" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Api from "../services/Api";
import CardArticle from "../components/CardArticle";

export default {
  name: "Home",
  data() {
    return {
      articles: [],
      status: false
    }
  },
  components: {
   CardArticle
  },
  mounted() {
    Api.getAllArticles()
      .then(articles => this.articles = articles.reverse());
  }
};
</script>
