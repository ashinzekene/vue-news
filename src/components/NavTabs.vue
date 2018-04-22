<template>
    <section>
        <b-tabs expanded v-model='activeTab'>
            <b-tab-item v-for='tab in tabs' v-bind:label='tab' :key='tab.id'></b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
export default {
  name: 'MyTabs',
  data () {
    return {
      activeTab: 0,
      showBooks: true,
      API_URL: 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&category=',
      tabs: [
        'General',
        'Science',
        'Technology',
        'Sports',
        'Business'
      ],
      results: []
    }
  },
  watch: {
    activeTab: function (newVal, oldVal) {
      this.fetchPost(newVal)
    }
  },
  methods: {
    async fetchPost (i) {
      let results = await fetch(this.API_URL + this.tabs[i])
        .then(res => res.json())
      console.log(results)
    }
  }
}
</script>

<style>
.b-tabs .tab-content {
  padding: 0
}
</style>
