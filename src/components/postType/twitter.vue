<template>
  <div>
    <div class="d-flex">
      <b-avatar class="mr-2" :src="data.node.profile_url"></b-avatar>
      <div>
        <div class="font-weight-bold">{{ data.node.user_name }}</div>
        <div class="font-italic">@{{ data.node.screen_name }}</div>
      </div>
    </div>
    <b-card-text class="font-weight-light my-3">
      {{ data.node.text }}
    </b-card-text>
  </div>
</template>

<script>
import { BCardText, BAvatar } from "bootstrap-vue";

export default {
  props: ["data"],
  components: {
    BCardText,
    BAvatar,
  },
};
</script>
