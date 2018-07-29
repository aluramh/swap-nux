<template>
  <b-form>
    <b-form-group label="Categories">
      {{ selected }}
      <b-form-checkbox-group
        v-model="selected" 
        :options="options"
        plain 
        stacked 
      />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { text: "Family", value: "family" },
        { text: "Work", value: "work" },
        { text: "Category 3", value: "cat3" },
        { text: "Category 4", value: "cat4" }
      ],
      selected: []
    };
  }
};
</script>
