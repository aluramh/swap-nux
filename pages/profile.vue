<template>
  <div>
    <div class="container">
      <h1>Profile</h1>

      <table v-if="user && user.value">
        <tbody>
          <tr v-for="field in ['name', 'email', 'password']" :key="field">
            <th>{{ field }}</th>
            <td>
              <input :value="user.value[field]" disabled>
            </td>
          </tr>
        </tbody>
      </table>
      
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  // router: {
  //   middleware: "auth"
  // },
  async asyncData({ app }) {
    const { data: user } = await app.$axios.get(`/api/user`);
    return { user };
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
