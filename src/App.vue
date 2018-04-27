<template>
  <div id='app'>
    <div class='my-navbar'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div class="navbar-brand">
          <h1 class='title is-3 my-title'>Newzz</h1>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <b-icon icon="add"></b-icon>
          </div>
        </div>
      </nav>
      <MyTabs :tabs='tabs' @tab-change='handleTabChange'></MyTabs>
    </div>
    <NewsArticle v-if="type === 'normal'" v-for='(article, i) in results[activeTab].articles'
      v-bind:key='i'
      v-bind:title='article.title'
      v-bind:content='article.description'
      v-bind:link='article.url'
      v-bind:date='article.publishedAt'
      v-bind:image='article.urlToImage'>
    </NewsArticle>
    <AddTopics @add-new-tags="addNewTags" @remove-tag="removeTag" :tags="customTabs" v-if="type === '+'"></AddTopics>
  </div>
</template>

<script>
import MyTabs from '@/components/NavTabs'
import NewsArticle from '@/components/NewsArticle'
import AddTopics from '@/components/AddTopics'

export default {
  name: 'App',
  data () {
    return {
      API_URL: 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&category=',
      CUSTOM: 'https://newsapi.org/v2/everything?apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&q=',
      results: [],
      fetching: false,
      activeTab: 0,
      type: 'normal',
      tabs: [
        {type: 'normal', text: 'General', icon: 'newspaper'},
        {type: 'normal', text: 'Science', icon: 'microscope'},
        {type: 'normal', text: 'Technology', icon: 'newspaper'},
        {type: 'normal', text: 'Sports', icon: 'football'},
        {type: 'normal', text: 'Business', icon: 'newspaper'},
        {type: 'custom', text: 'Angular', icon: 'angular'},
        {type: 'custom', text: 'JavaScript', icon: 'JavaScript'}
      ],
      loadingComponent: null
    }
  },
  components: {
    MyTabs,
    NewsArticle,
    AddTopics
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
      this.results[x] = {}
    }
  },
  mounted: function () {
    if (localStorage.getItem('articles')) {
      try {
        JSON.parse(localStorage.getItem('articles')).forEach((item, i) => {
          this.results[i] = item
        })
        return
      } catch (err) {}
    }
    this.fetchPosts(0)
  },
  methods: {
    addNewTags (newTags) {
      this.customTabs = newTags
    },
    removeTag (i) {
      this.customTabs = this.customTabs.filter((tag, ind) => ind !== i)
    },
    handleTabChange (i) {
      // this.activeTab =
      // It is a normal tab
      let { type } = this.tabs.find((tab, ind) => ind === i)
      this.type = type
      this.activeTab = i
      if (type === 'normal') {
        this.fetchPosts(i)
      } else {
        this.fetchCustom(i)
      }
    },
    async fetchCustom (index, page) {
      try {
        this.results[index] = await fetch(this.CUSTOM + this.tabs[index].text).then(res => res.json())
      } catch (err) {
        this.$toast.open({
          message: `Couldn't fetch ${this.tabs[index].text} stories. Are you online? 😏`,
          position: 'is-bottom',
          duration: 4000
        })
      }
    },
    async fetchPosts (categoryIndex, page) {
      if (!this.results[categoryIndex].articles) this.fetching = true
      try {
        this.results[categoryIndex] = await fetch(this.API_URL + this.tabs[categoryIndex].text)
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
