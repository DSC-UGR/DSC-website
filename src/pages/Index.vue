<template>
  <Layout>
    <div v-for="(post, i) in $page.posts.edges" :key="i" class="element">
      <div class="element-header">
        <span class="channel">TWITTER</span>
        <span class="bold text--grey">{{ post.node.created_at }}</span>
      </div>
      <b-card class="card">
        <div class="d-flex">
          <b-avatar
            class="mr-2"
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
          <div>
            <div class="font-weight-bold">{{ post.node.user_name }}</div>
            <div class="font-italic">@{{ post.node.screen_name }}</div>
          </div>
        </div>
        <b-card-text class="font-weight-light my-3">
          {{ post.node.text }}
        </b-card-text>
      </b-card>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allTwitterPost {
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
  }
}
</page-query>

<script>
import { BCard, BCardText, BAvatar } from "bootstrap-vue";
export default {
  components: {
    BCard,
    BCardText,
    BAvatar,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.element {
  margin-top: 48px;
}

.element-header {
  display: flex;
  justify-content: space-between;
}

.card {
  width: 100%;
  border: 2px solid #00808040;
  border-radius: 16px;
  margin-top: 16px;
}

.bold {
  font-weight: bold;
}

.text--grey {
  color: #606060;
}

.channel {
  font-weight: 200;
  color: #00acee;
  letter-spacing: 1px;
}
</style>
