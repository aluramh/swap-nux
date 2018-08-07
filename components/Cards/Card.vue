<template>
  <nuxt-link :to="`/contacts/${Number(contact._id)}`">

    <b-card class="swap-card" header-class="swap-header"> 
      <slot slot="header">
        <div />
      </slot>
      <div class="card-text">
        <ul>
          <li>{{ contact.name }}</li>
          <li>{{ contact.company }}</li>
          <li>{{ contact.position }}</li>
          <li>123-456-7890</li>
          <li>mail@company.com</li>
        </ul>
      </div>
    </b-card>
  </nuxt-link>

</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      contactType: 1
    };
  }
};
</script>

<style scoped>
.swap-card {
  transition: 0.8s;
  height: 12rem;
  width: 300px;
  margin: 0 auto;
  font-size: 80%;
}
.card-body {
  display: inherit;
  background: linear-gradient(
    to bottom,
    rgba(222, 222, 222, 0),
    rgba(222, 222, 222, 1)
  );
}

ul {
  list-style-type: none;
  padding: 0;
}

.swap-header {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.swap-header div {
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
}

a,
a:link,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
