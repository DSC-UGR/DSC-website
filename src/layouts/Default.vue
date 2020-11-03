<template>
  <div class="layout">
    <b-navbar class="header" fixed="top" toggleable="lg" type="dark">
      <b-navbar-brand class="title">Developer Student Club</b-navbar-brand>
      <span id="university">UGR</span>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav>
    </b-navbar>
    <slot />
  </div>
</template>

<script>
import { BNavbar, BNavbarBrand } from "bootstrap-vue";
export default {
  components: {
    BNavbar,
    BNavbarBrand,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100&display=swap");

body {
  font-family: "Roboto", Roboto, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#university {
  height: fit-content;
  font-size: 12px;
  margin-top: 27px;
  margin-left: 4px;
}

.title {
  font-weight: 100;
  font-size: 1.6em;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  background-color: #2962ff;
  color: white;
}

.nav {
}

.nav__link {
}
</style>
