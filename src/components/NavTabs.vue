<template>
    <section>
        <b-tabs expanded v-model='activeTab'>
            <b-tab-item v-for='tab in tabs' :label='tab' :key='tab.id'></b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
export default {
  name: 'MyTabs',
  data () {
    return {
      activeTab: 0,
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
  mounted: function () {
    this.$emit('tab-change', this.tabs[this.activeTab])
  },
  watch: {
    activeTab: function (newVal, oldVal) {
      this.$emit('tab-change', this.tabs[newVal])
    }
  }
}
</script>

<style>
.b-tabs .tab-content {
  padding: 0
}
</style>
