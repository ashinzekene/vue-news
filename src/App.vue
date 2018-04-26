<template>
  <div id='app'>
    <div class='my-navbar'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <h1 class='title is-3 my-title'>Newzz</h1>
      </nav>
      <MyTabs :tabs='[...tabs, ...customTabs]' @tab-change='handleTabChange'></MyTabs>
    </div>
    <NewsArticle v-if="tabs[activeTab]" v-for='(article, i) in results[activeTab].articles'
      v-bind:key='i'
      v-bind:title='article.title'
      v-bind:content='article.description'
      v-bind:link='article.url'
      v-bind:date='article.publishedAt'
      v-bind:image='article.urlToImage'>
    </NewsArticle>
    <NewsArticle v-else-if="customtabs[activeTab]" v-for='(article, i) in results[activeTab].articles'
      v-bind:key='i'
      v-bind:title='article.title'
      v-bind:content='article.description'
      v-bind:link='article.url'
      v-bind:date='article.publishedAt'
      v-bind:image='article.urlToImage'>
    </NewsArticle>
    <AddTopics v-else></AddTopics>
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
      results: [],
      customResults: [],
      fetching: false,
      activeTab: 0,
      tabs: [
        'General',
        'Science',
        'Technology',
        'Sports',
        'Business'
      ],
      customTabs: [],
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
  beforeMount () {
    for (let x in this.tabs) {
      this.results[x] = []
    }
  },
  mounted: function () {
    if (localStorage.getItem('articles')) {
      try {
        this.results = JSON.parse(localStorage.getItem('articles'))
        return
      } catch (err) {}
    }
    this.fetchPosts(0)
  },
  methods: {
    handleTabChange (text) {
      // this.activeTab =
      // It is a normal tab
      if (this.tabs.includes(text)) {
        this.activeTab = this.tabs.findIndex(tab => tab === text)
        this.fetchPosts(this.activeTab)
      } else if (this.customTabs.includes(text)) {
        this.activeTab = this.tabs.findIndex(tab => tab === text)
      } else {
        console.log('Clicked on + button')
      }
    },
    async fetchPosts (categoryIndex, page) {
      if (!this.results[categoryIndex].articles) this.fetching = true
      try {
        this.results[categoryIndex] = await fetch(this.API_URL + this.tabs[categoryIndex])
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
  padding: 20px 30px 0px;
  box-shadow: 0px 0px 20px 2px rgba(100, 100, 100, 0.3);
}
.my-title {
  width: 100%;
  text-align: left;
}
</style>
