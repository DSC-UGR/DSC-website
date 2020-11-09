<template>
  <Layout style="margin-top: 82px">

    <div class="tweets">
      <post
          v-for="(post, i) in posts"
          :key="i"
          :post="post"
          :type="post.type"
          class="element"
      ></post>
    </div>
    <a class="discord-button" href="https://discord.gg/MTBqq9tz">
      <button
          class="round-btn"
      >
        <div class="container">
          <img src="../assets/img/discord.png"/>
        </div>
      </button>
    </a>
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

button:focus {
  outline: 0;
}

.container{
  padding: 0px;
}

.container img {
  width: 24px;
  height: 18px;
}

.discord-button {
  top: 80px;
  right: 10px;
  position: absolute;
}

.element {
  margin-top: 48px;
}

.round-btn:before {
  display:inline-block;
  vertical-align:middle;
  outline: none;
}

.round-btn {
  background-color: #8c9dfb;
  border: none;
  display: inline-block;
  border-radius: 100%;
  padding: 0px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

</style>
