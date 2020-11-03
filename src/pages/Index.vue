<template>
  <Layout>
    <post
      v-for="(post, i) in $page.articles.edges"
      :key="i"
      :post="post"
      type="devto"
      class="element"
    ></post>
    <post
      v-for="(post, i) in $page.tweets.edges"
      :key="i"
      :post="post"
      type="twitter"
      class="element"
    ></post>
  </Layout>
</template>

<page-query>
query {
  tweets: allTwitterPost {
    edges {
      node {
        created_at,
        text,
        user_name,
        screen_name,
        user_description,
        profile_url

      }
    }
  },
  articles: allDevtoArticle {
    edges {
      node {
        creator,
        author,
        title,
        link,
        pubDate
      }
    }
  }
}
</page-query>

<script>
import Post from "@/components/post";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Post,
  },
};
</script>

<style>
.element {
  margin-top: 48px;
}
</style>
