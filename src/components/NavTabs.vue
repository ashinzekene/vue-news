<template>
    <section>
        <b-tabs expanded v-model='activeTab'>
            <b-tab-item v-for='tab in tabs' :label='tab' :key='tab.id'></b-tab-item>
            <b-tab-item label='+'></b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
export default {
  name: 'MyTabs',
  props: ['tabs'],
  data () {
    return {
      activeTab: 0,
      results: []
    }
  },
  mounted: function () {
    this.$emit('tab-change', this.activeTab)
  },
  watch: {
    activeTab: function (newVal, oldVal) {
      this.$emit('tab-change', this.tabs[newVal])
    }
  }
}
</script>

<style>
.b-tabs section.tab-content {
  padding: 0
}
</style>
