<template>
  <div>
    <div class="element-header">
      <span class="channel text-uppercase">{{ type }}</span>
      <span class="bold text--grey">{{
        post.node.created_at | toDateString
      }}</span>
    </div>
    <b-card class="card">
      <twitter v-if="type == 'twitter'" :data="post"></twitter>
      <devto v-else-if="type == 'devto'" :data="post"></devto>
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
import dateMixin from "@/mixins/date";

export default {
  props: ["type", "post"],
  mixins: [dateMixin],
  components: {
    BCard,
    Twitter: () => import("./postType/twitter"),
    Devto: () => import("./postType/devto"),
  },
};
</script>

<style scoped>
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

.text--grey {
  color: #606060;
}

.channel {
  font-weight: 200;
  color: #00acee;
  letter-spacing: 1px;
}
</style>
