<template>
  <Layout style="margin-top: 82px">
    <post
      v-for="(post, i) in posts"
      :key="i"
      :post="post"
      :type="post.type"
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
        user_name: author,
        title,
        url: link,
        created_at: pubDate
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
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    this.posts = [
      ...this.$page.articles.edges.map((article) => ({
        ...article,
        type: "devto",
      })),
      ...this.$page.tweets.edges.map((tweet) => ({
        ...tweet,
        type: "twitter",
      })),
    ].sort(function(a, b) {
      var d1 = new Date(a.node.created_at);
      var d2 = new Date(b.node.created_at);
      return d2.getTime() - d1.getTime();
    });
  },
};
</script>

<style>
.element {
  margin-top: 48px;
}
</style>
