<template>
  <div class="box article">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="image || 'http://www.oneilllogistics.com/content/images/news.png'" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ title }}</strong><small class="is-pulled-right">{{ (new Date(date)).toLocaleString() }}</small>
            <br>
            {{ content }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
          </div>
          <div class="level-right">
            <a target="_blank" class="level-item is-pulled-right" :href="link" aria-label="reply">
              <span class="icon">
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: ['image', 'title', 'content', 'link', 'date']
}
</script>

<style>
.box.article {
  max-width: 700px;
  margin: 20px auto;
}
</style>
// author:null
// description:"Red spots suggest Mercury may have formed far away from the sun."
// publishedAt:"2018-04-21T06:22:26Z"
// source:{id: null, name: "Yahoo.com"}
// title:"Mysterious red spots on Mercury get names – but what are they?"
// url:"https://uk.news.yahoo.com/mysterious-red-spots-mercury-names-094605338.html"
// urlToImage:"https://s.yimg.com/uu/api/res/1.2/9reKv0zM65GoIeHLJFghSQ--~B/aD0xNjc7dz00OTY7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-GB/homerun/the_conversation_464/09e44962c48881a7f6b3eb4a8490c65e"
