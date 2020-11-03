<template>
  <div>
    <div class="d-flex">
      <b-avatar
        class="mr-2"
        src="http://pbs.twimg.com/profile_images/1180788038496083973/z2L0vBWY_normal.jpg"
      ></b-avatar>
      <div>
        <div class="font-weight-bold">{{ data.node.author }}</div>
      </div>
    </div>
    <b-card-text class="font-weight-light my-3">
      <h2>{{ data.node.title }}</h2>
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
