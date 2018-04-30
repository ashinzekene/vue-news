<template>
  <div id='app'>
    <div class='my-navbar'>
      <nav class='navbar' role='navigation' aria-label='main navigation'>
        <h1 class='title is-3 my-title'>Newzz</h1>
        <div @click="() => type = '+'">
          <b-icon icon="plus"></b-icon>
        </div>
      </nav>
      <MyTabs :tabs='tabs' @tab-change='handleTabChange'></MyTabs>
    </div>
    <AddTopics @add-new-tags="addNewTags" @remove-tag="removeTag" :tags="tabs.filter(({type}) => type == 'custom').map(({ text }) => text)" v-if="type === '+'"></AddTopics>
    <div v-else class="articles">
      <NewsArticle v-for='(article, i) in activeArticles'
        v-bind:key='i'
        v-bind:title='article.title'
        v-bind:content='article.description'
        v-bind:link='article.url'
        v-bind:date='article.publishedAt'
        v-bind:image='article.urlToImage'>
      </NewsArticle>
      <b-loading :is-full-page="false" :active.sync="fetching" :canCancel="true"></b-loading>
    </div>
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
        {type: 'normal', text: 'General', icon: 'bell'},
        {type: 'normal', text: 'Science', icon: 'flask'},
        {type: 'normal', text: 'Technology', icon: 'rocket'},
        {type: 'normal', text: 'Sports', icon: 'bookmark'},
        {type: 'normal', text: 'Business', icon: 'briefcase'}
      ],
      loadingComponent: null
    }
  },
  components: {
    MyTabs,
    NewsArticle,
    AddTopics
  },
  computed: {
    activeArticles: function () {
      return this.results[this.activeTab] ? this.results[this.activeTab].articles : []
    }
  },
  watch: {
    tabs: function (old, newVal) {
      // SAVE YOUR PREFERENCES ON 'TAB' CHNAGE
      localStorage.setItem('tabs', JSON.stringify(this.tabs))
    }
  },
  beforeMount () {
    if (localStorage.getItem('tabs')) {
      try {
        this.tabs = JSON.parse(localStorage.getItem('tabs'))
      } catch (err) {}
    }
    for (let x in this.tabs) {
      this.results[x] = {}
    }
  },
  methods: {
    addNewTags (newTags) {
      console.log('New tabs', newTags)
      this.tabs = [...this.tabs.filter(({ type }) => type === 'normal'), ...newTags]
      let x = 0
      while (x < this.tabs.length) {
        if (!this.results[x]) this.results.push({})
        x++
      }
    },
    removeTag (tag) {
      let index = this.tabs.findIndex(({ text }) => text === tag)
      this.tabs = this.tabs.filter(({ text }) => text !== tag)
      this.results.filter((res, i) => i !== index)
    },
    handleTabChange (i) {
      let { type } = this.tabs.find((tab, ind) => ind === i)
      this.type = type
      this.activeTab = i
      if (type === 'normal') {
        this.fetchPosts(i)
      } else {
        this.fetchCustom(i)
      }
    },
    async fetchCustom (index) {
      if (!this.results[index].articles) this.fetching = true
      try {
        var result = await fetch(this.CUSTOM + this.tabs[index].text).then(res => res.json())
        this.results = this.results.map((res, i) => {
          return i === index
            ? result : res
        })
      } catch (err) {
        this.$toast.open({
          message: `Couldn't fetch ${this.tabs[index].text} stories. Are you online? 😏`,
          position: 'is-bottom',
          duration: 4000
        })
      }
      this.fetching = false
    },
    async fetchPosts (index) {
      if (!this.results[index].articles) this.fetching = true
      try {
        var result = await fetch(this.API_URL + this.tabs[index].text)
          .then(res => res.json())
        this.results = this.results.map((res, i) => {
          return i === index
            ? result : res
        })
      } catch (err) {
        this.$toast.open({
          message: `Couldn't fetch news. Are you online? 😏`,
          position: 'is-bottom',
          duration: 4000
        })
      }
      this.fetching = false
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
.my-navbar > .navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.my-title {
  text-align: left;
}
</style>
