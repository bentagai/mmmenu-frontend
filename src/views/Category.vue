<template>
  <div>
    <div class="title font-weight-regular d-flex justify-center">{{ mainTitle }}</div>
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
  name: "Category",
  data() {
    return {
      articles: [],
      status: false,
      mainTitle: ""
    }
  },
  components: {
   CardArticle
  },
  created() {
    if (localStorage.getItem('userType') === 'true') {
      this.status = true
    } else {
      this.status = false;
    }
    this.$root.$on("mySearch", category => {
      const searchQuery = category.split('_')
      this.mainTitle = `${searchQuery[0]} ${searchQuery[1]}`; 
      this.search(searchQuery[1])
    })
    const word = this.$route.params.category.split('_')
    this.mainTitle = `${word[0]} ${word[1]}`; 
    this.search(word[1])
  },
  methods: {
    search(query) {
      Api.getArticlesByCategory(query)
        .then(articles => this.articles = articles.reverse());
    }
  }
};
</script>