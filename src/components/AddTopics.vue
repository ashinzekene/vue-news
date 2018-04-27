<template>
  <section class="add-topics">
    <div class="subtitle my-title 3">Add Keywords to get updated about</div>
    <b-field grouped>
        <b-taginput
          expanded
          v-model="newTags"
          icon="fa fa-tags"
          type="is-primary">
        </b-taginput>
        <p class="control">
          <button class="button is-primary">Add To Topics</button>
        </p>
    </b-field>
    <div class="tags">
      <div class="field">
        <b-tag v-for="(tag, i) in tags" :key="i"
          type="is-primary is-medium"
          closable
          @close="removeTag(i)">
          {{ tag }}
        </b-tag>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddTopics',
  props: ['tags'],
  data () {
    return {
      newTags: []
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
section.add-topics {
  padding: 20px 30px;
}
div.my-title.subtitle {
  padding: 30px 40px;
  margin: auto;
  text-align: center;
}
</style>
