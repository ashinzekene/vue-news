<template>
  <section>
    <b-field grouped>
        <b-input placeholder="Search..." expanded></b-input>
        <p class="control">
          <button class="button is-primary">Search</button>
        </p>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'AddTopics',
  data () {
    return {
      activeTab: 0,
      topics: []
    }
  },
  mounted: function () {

  },
  watch: {
  }
}
</script>

<style>
.b-tabs section.tab-content {
  padding: 0
}
</style>
