<template>
  <div id='app'>
    <div class='my-navbar'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <h1 class='title is-3 my-title'>Newzz</h1>
      </nav>
      <MyTabs @tab-change='handleTabChange'></MyTabs>
    </div>
    <NewsArticle v-for='(article, i) in results.articles'
      v-bind:key='i'
      v-bind:title='article.title'
      v-bind:content='article.description'
      v-bind:link='article.url'
      v-bind:date='article.publishedAt'
      v-bind:image='article.urlToImage'
    >
    </NewsArticle>
  </div>
</template>

<script>
import MyTabs from '@/components/NavTabs'
import NewsArticle from '@/components/NewsArticle'

export default {
  name: 'App',
  data () {
    return {
      API_URL: 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&category=',
      results: {},
      fetching: false,
      tabs: [
        'General',
        'Science',
        'Technology',
        'Sports',
        'Business'
      ],
      loadingComponent: null
    }
  },
  components: {
    MyTabs,
    NewsArticle
  },
  watch: {
    fetching: function (val) {
      if (val) {
        this.loadingComponent = this.$loading.open({
          container: null
        })
      } else {
        this.loadingComponent.close()
      }
    }
  },
  mounted: function () {
    if (localStorage.getItem('articles')) {
      try {
        this.results = JSON.parse(localStorage.getItem('articles'))
        return
      } catch (err) {}
    }
    for (let x in this.tabs) {
      this.results[x] = []
    }
  },
  methods: {
    handleTabChange (i) {
      this.fetchPosts(i)
    },
    async fetchPosts (category, page) {
      this.fetching = true
      try {
        this.results[category] = await fetch(this.API_URL + category)
          .then(res => res.json())
        this.storeResults()
      } catch (err) {
        this.$toast.open({
          message: `Couldn't fetch news. Are you online? 😏`,
          position: 'is-bottom',
          duration: 4000
        })
      }
      this.fetching = false
    },
    storeResults: function () {
      localStorage.setItem('articles', JSON.stringify(this.results))
      console.log('Successfully stored')
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.my-navbar {
  padding: 20px 30px 1px;
  box-shadow: 0px 0px 20px 2px rgba(100, 100, 100, 0.3);
}
.my-title {
  width: 100%;
  text-align: left;
}
</style>
