<template>
  <div class="card article">
    <div class="card-content">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="image || 'http://www.oneilllogistics.com/content/images/news.png'" alt="Image">
          </figure>
        </div>
        <div class="media-content">
            <p>
              <strong>{{ title }}</strong><small class="is-pulled-right">{{ (new Date(date)).toLocaleString() }}</small>
              <br>
            </p>
              {{ content }}
          </div>
        </article>
      </div>
     <footer class="card-footer">
        <a href="#" class="card-footer-item">
          <b-icon pack="fa" icon="bookmark-o"></b-icon>&nbsp;
          Save
        </a>
        <a :href='link' target="_blank" class="card-footer-item">
          <b-icon pack="fa" icon="external-link"></b-icon>&nbsp;
          Open
        </a>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: ['image', 'title', 'content', 'link', 'date']
}
</script>

<style>
.card.article {
  max-width: 700px;
  margin: 20px auto;
  /* padding-bottom: 0px; */
}
.card-content {
  overflow: hidden;
}
</style>
// author:null
// description:"Red spots suggest Mercury may have formed far away from the sun."
// publishedAt:"2018-04-21T06:22:26Z"
// source:{id: null, name: "Yahoo.com"}
// title:"Mysterious red spots on Mercury get names – but what are they?"
// url:"https://uk.news.yahoo.com/mysterious-red-spots-mercury-names-094605338.html"
// urlToImage:"https://s.yimg.com/uu/api/res/1.2/9reKv0zM65GoIeHLJFghSQ--~B/aD0xNjc7dz00OTY7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-GB/homerun/the_conversation_464/09e44962c48881a7f6b3eb4a8490c65e"
